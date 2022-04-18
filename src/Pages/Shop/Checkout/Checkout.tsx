import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useContext} from "react";
import {BasketContext, UserContext} from "../../../App";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../../Constants/Constants";

export const Checkout = () => {
    const contextBasket = useContext(BasketContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    let total = contextBasket?.basket?.reduce((a, b) => a + b.price, 0) || 0;

    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_PAYPAL_CLIENT_ID || "test" }}>
            <div className={"w-full p-5 flex flex-col justify-center"}>
                <h3 className={"text-2xl font-bold"}>Checkout</h3>
                <div className={"lg:w-1/3 text-right"}>
                    <h3 className={"text-lg font-bold"}>Total: {total}S$</h3>
                </div>
                <PayPalButtons
                    className={"lg:w-1/3"}
                    createOrder={(data: any, actions: { order: { create: (arg0: { purchase_units: { amount: { value: string; }; }[]; }) => any; }; }) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: total.toFixed(2),
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        // @ts-ignore
                        return actions.order.capture().then((details) => {
                            console.log(details);
                            const options = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    payer_id: data.payerID,
                                    order_id: data.orderID,
                                    payment_id: details.id,
                                    payment_status: details.status,
                                    payer_address: details.payer.address,
                                    payer_email: details.payer.email_address,
                                    basket: contextBasket?.basket,
                                    amount: total,
                                }),
                            };
                            console.log(`${API_URL}/user/checkout/${userContext?.user?.username}`)
                            fetch(`${API_URL}/user/checkout/${userContext?.user?.username}`, options)
                                .then((res) => {
                                    if (res.status === 200) {
                                        // @ts-ignore
                                        const name = details.payer.name.given_name;
                                        alert(`Transaction completed by ${name}`);
                                        contextBasket?.setBasket([], userContext?.user);
                                        navigate("/");
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        });
                    }}
                />
            </div>
        </PayPalScriptProvider>
    );
}
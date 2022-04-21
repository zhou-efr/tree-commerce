import {FC, useContext} from "react";
import {UserContext} from "../../../App";

export const Profile:FC = () => {
    const context = useContext(UserContext);
    // console.log("profile", context);
    return (
        <div className={"m-3"}>
            {
                context?.user ?(
                        <div className={"flex flex-col justify-center items-center"}>
                            <img className={"w-48"} src={context?.user.profilePicture} alt={"Avatar"}/>
                            <h2 className={"mt-3 font-bold text-2xl"}>{context?.user.username}</h2>
                            <div className={"mt-3 grid grid-cols-1 md:grid-cols-2 gap-4"}>
                                <div className={"md:text-right"}>
                                    <p>{context?.user.email}</p>
                                </div>
                                <div>
                                </div>
                            </div>

                            {
                                context?.user.orders && (
                                    <div className={""}>
                                        <h2 className={"my-1 text-lg font-bold"}>Previous orders</h2>
                                        <div className={"ml-3"}>
                                            {
                                                context?.user.orders.map((order, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <h3>Order <em>#{order.order_id}</em></h3>
                                                            <p>{order.amount}S$</p>
                                                            <p>{order.payment_status}</p>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                    :(
                        <p>not authorized</p>
                    )
            }
        </div>
    );
}
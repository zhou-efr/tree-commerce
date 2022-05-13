export interface OrderType {
    payer_id: string;
    order_id: string,
    payment_id: string,
    payment_status: string,
    payer_address: {
        address_line_1: string,
        admin_area_2: string,
        postal_code: string,
        country_code: string
    },
    payer_email: string,
    basket: TreeType[],
    amount: number
}
export interface UserType {
    basket: TreeType[] | null;
    orders: OrderType[] | null;
    username: string,
    password: string,
    email: string,
    profilePicture: string,
}
export interface userContextType {
    user: UserType | null;
}
export interface TreeType {
    TaxonName: string;
    Author: string;
    continent: string;
    color: string;
    picture: string;
    picture_author: string;
    picture_author_link: string;
    picture_link: string;
    season: string;
    life_expectancy: string;
    collection_name: string;
    price: number;
    description: string;
}
export interface treeContextType {
    trees: TreeType[] | null;
}
export interface basketContextType {
    basket: TreeType[] | null;
    setBasket: (basket: TreeType[], user: UserType | null | undefined) => void;
    addToCart: (tree: TreeType, basket: TreeType[] | null, user: UserType | null | undefined) => void;
    removeFromCart: (index: number, basket: TreeType[] | null, user: UserType | null | undefined) => void;
}

export const defaultTreeContext: treeContextType = {
    trees: null
};

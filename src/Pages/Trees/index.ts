import { Tree } from "./Tree/Tree";
import { Trees } from "./Trees/Trees";

interface TreeType{
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export {Tree, Trees};
export type { TreeType };

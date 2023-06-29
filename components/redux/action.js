import { ADD_TO_CART } from "./constants"

export const addToCart = (props) => {
    return {
        type: ADD_TO_CART,
        data: props
    }
}
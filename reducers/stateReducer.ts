import priceList from '../pages/api/priceList.json';

export interface Item {
    name: string;
    price: number;
}

export interface CartItem extends Item {
    quantity: number;
}

export interface AppState {
    keyword: string;
    cartItems: CartItem[];
}

export enum ActionType {
    Search,
    Increase,
    Decrease,
    Add,
    Remove
}

type Action = { type: ActionType; name: string };

export const initialState = {
    keyword: '',
    cartItems: priceList.map(
        (item: Item): CartItem => ({ ...item, quantity: 0 })
    )
};

export function stateReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case ActionType.Search: {
            return {
                ...state,
                keyword: action.name
            };
        }
        case ActionType.Increase: {
            return {
                cartItems: state.cartItems.map((item) =>
                    item.name !== action.name
                        ? item
                        : { ...item, quantity: item.quantity + 1 }
                ),
                keyword: state.keyword
            };
        }
        case ActionType.Decrease: {
            return {
                cartItems: state.cartItems.map((item) =>
                    item.name !== action.name
                        ? item
                        : { ...item, quantity: Math.max(0, item.quantity - 1) }
                ),
                keyword: state.keyword
            };
        }
        case ActionType.Add: {
            return {
                cartItems: state.cartItems.map((item) =>
                    item.name !== action.name ? item : { ...item, quantity: 1 }
                ),
                keyword: state.keyword
            };
        }
        case ActionType.Remove: {
            return {
                cartItems: state.cartItems.map((item) =>
                    item.name !== action.name ? item : { ...item, quantity: 0 }
                ),
                keyword: state.keyword
            };
        }
        default: {
            return state;
        }
    }
}

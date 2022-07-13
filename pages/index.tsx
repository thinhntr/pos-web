import { useReducer } from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import {
    ActionType,
    initialState,
    stateReducer
} from '../reducers/stateReducer';

const Home = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    function createDispatch(type: ActionType) {
        function dispatchItem(name: string) {
            dispatch({
                type: type,
                name: name
            });
        }
        return dispatchItem;
    }

    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-8 p-4 sm:p-6 md:p-8">
            <SearchBar
                keyword={state.keyword}
                onChange={createDispatch(ActionType.Search)}
            />
            <main className="flex flex-col gap-8">
                <h2 className="mb-1 text-2xl">Giỏ hàng</h2>

                <Cart
                    items={state.cartItems}
                    onDecrease={createDispatch(ActionType.Decrease)}
                    onIncrease={createDispatch(ActionType.Increase)}
                />

                <h2 className="mb-1 text-2xl">Danh sách sản phẩm</h2>

                <ProductList
                    state={state}
                    onRemove={createDispatch(ActionType.Remove)}
                    onAdd={createDispatch(ActionType.Add)}
                />
            </main>
        </div>
    );
};

export default Home;

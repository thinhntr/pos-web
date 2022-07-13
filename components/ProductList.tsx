import { Checkbox, Table } from 'flowbite-react';
import { AppState } from '../reducers/stateReducer';

import vndFormatter from '../utils/vndFormatter';
export default function ProductList({
    state,
    onRemove,
    onAdd
}: {
    state: AppState;
    onRemove: (name: string) => void;
    onAdd: (name: string) => void;
}) {
    return (
        <Table>
            <Table.Head>
                {/* TODO: Adjust column width */}
                <Table.HeadCell>Tên sản phẩm</Table.HeadCell>
                <Table.HeadCell>Giá</Table.HeadCell>
                <Table.HeadCell>Mua</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {state.cartItems
                    .filter((item) =>
                        state.keyword.length === 0
                            ? true
                            : item.name.includes(state.keyword)
                    )
                    .map((item) => (
                        <Table.Row key={item.name}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>
                                {vndFormatter.format(item.price)}
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Checkbox
                                    checked={item.quantity > 0}
                                    onClick={() =>
                                        item.quantity > 0
                                            ? onRemove(item.name)
                                            : onAdd(item.name)
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
            </Table.Body>
        </Table>
    );
}

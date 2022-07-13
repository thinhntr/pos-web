import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { Button, Table } from 'flowbite-react';
import { CartItem } from '../reducers/stateReducer';
import vndFormatter from '../utils/vndFormatter';

export default function Cart({
    items,
    onDecrease,
    onIncrease
}: {
    items: CartItem[];
    onDecrease: (name: string) => void;
    onIncrease: (name: string) => void;
}) {
    return (
        <>
            <div className="flex gap-10">
                <div>Tổng</div>
                <div>
                    {vndFormatter.format(
                        items.reduce(
                            (total, { price, quantity }) =>
                                total + price * quantity,
                            0
                        )
                    )}
                </div>
            </div>
            <Table>
                <Table.Head>
                    {/* TODO: Adjust column width */}
                    <Table.HeadCell className="w-64">
                        Tên sản phẩm
                    </Table.HeadCell>
                    <Table.HeadCell className="w-32">Tổng giá</Table.HeadCell>
                    <Table.HeadCell className="w-24">Số lượng</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {items
                        .filter((item) => item.quantity)
                        .map((item) => (
                            <Table.Row key={item.name}>
                                <Table.Cell className="w-72">
                                    {item.name}
                                </Table.Cell>
                                <Table.Cell className="w-32">
                                    {vndFormatter.format(
                                        item.price * item.quantity
                                    )}
                                </Table.Cell>
                                <Table.Cell className="flex w-24 items-center justify-center gap-2">
                                    <Button
                                        outline={true}
                                        color="light"
                                        pill={true}
                                        size="xs"
                                        onClick={() => onDecrease(item.name)}
                                    >
                                        <MinusIcon className="h-3 w-3" />
                                    </Button>
                                    <p>{item.quantity}</p>
                                    <Button
                                        outline={true}
                                        color="light"
                                        pill={true}
                                        size="xs"
                                        onClick={() => onIncrease(item.name)}
                                    >
                                        <PlusIcon className="h-3 w-3" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </>
    );
}

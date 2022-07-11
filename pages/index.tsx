import { MinusIcon, PlusIcon, SearchIcon } from '@heroicons/react/solid';
import { Button, Checkbox, Label, Table, TextInput } from 'flowbite-react';
import Head from 'next/head';
import { useState } from 'react';
import priceList from './api/price_list.json';

const vndFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'vnd'
});

const Home = () => {
    const [products, setProducts] = useState([...priceList]);

    function filter(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.value.trim();
        console.log(name);
        if (!name.length) {
            setProducts(priceList);
        } else {
            setProducts(
                priceList.filter((product) => {
                    console.log(product.name, name);
                    return product.name.includes(name);
                })
            );
        }
    }

    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-8 p-4 sm:p-6 md:p-8">
            <Head>
                <title>Point of sale</title>
            </Head>

            {/* Input */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="product-input">Enter product&apos;s name</Label>
                <TextInput
                    id="product-input"
                    icon={SearchIcon}
                    placeholder="Quick search..."
                    onInput={filter}
                />
            </div>

            <main className="flex flex-col gap-8">
                {/* Cart */}
                <section id="cart">
                    <h2 className="mb-4 text-2xl">Cart</h2>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>Quantity</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {products.slice(3).map((item) => (
                                <Table.Row key={item.name}>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>
                                        {vndFormatter.format(item.price)}
                                    </Table.Cell>
                                    <Table.Cell className="flex items-center justify-center gap-2">
                                        <Button
                                            outline={true}
                                            color="light"
                                            pill={true}
                                            size="xs"
                                        >
                                            <MinusIcon className="h-3 w-3" />
                                        </Button>
                                        <p>0</p>
                                        <Button
                                            outline={true}
                                            color="light"
                                            pill={true}
                                            size="xs"
                                        >
                                            <PlusIcon className="h-3 w-3" />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </section>

                {/* Product List */}
                <section id="product-list">
                    <h2 className="mb-4 text-2xl">Product List</h2>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>Buy</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {products.map((item) => (
                                <Table.Row key={item.name}>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>
                                        {vndFormatter.format(item.price)}
                                    </Table.Cell>
                                    <Table.Cell className="flex justify-center">
                                        <Checkbox />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </section>
            </main>
        </div>
    );
};

export default Home;

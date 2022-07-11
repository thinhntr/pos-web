import Head from 'next/head';
const Home = () => {
    return (
        <>
            <Head>
                <title>Point of sale</title>
            </Head>
            <h1 className="text-3xl font-bold text-red-400 underline">
                Enter product&apos;s name
            </h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </>
    );
};

export default Home;

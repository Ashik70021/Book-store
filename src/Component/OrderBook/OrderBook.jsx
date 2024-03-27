import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderBook = () => {
    const orderBook = useLoaderData();
    return (
        <div>
            <h2>Order book here</h2>
        </div>
    );
};

export default OrderBook;
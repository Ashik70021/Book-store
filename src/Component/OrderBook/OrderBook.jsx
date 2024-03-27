import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const OrderBook = () => {
    const orderBook = useLoaderData();
    console.log(orderBook);
    return (
        <div className='md:grid grid-cols-3'>
            {
                orderBook.map(book => <Book key={book.id} book={book}></Book> )
            }
        </div>
    );
};

export default OrderBook;
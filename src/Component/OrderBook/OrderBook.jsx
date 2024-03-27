import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const OrderBook = () => {
    const orderBook = useLoaderData();
    console.log(orderBook);
    return (
        <div className='md:grid md:grid-cols-3 gap-8 mt-16'>
            {
                orderBook.map(book => <Book key={book.id} book={book}></Book> )
            }
        </div>
    );
};

export default OrderBook;
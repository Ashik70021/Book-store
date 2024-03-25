import Book from "../Book/Book";
import { useEffect, useState } from "react";
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()  =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    })
    return (
        <div>
            <h2 className="font-bold text-3xl text-center ml-6">Books: {books.length}</h2>
            <div className="grid grid-cols-3 gap-8 mt-16">
                {
                    books.map(book => <Book 
                        key={book.id} 
                        book={book} >
                        </Book> )
                }
            </div>
        </div>
    );
};

export default Books;
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadBook } from '../Utility/localstorage';

const PageToRead = () => {
    const books = useLoaderData();

    const [bookRead, setBookRead] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const readBook = books.filter(book => storedBookIds.includes(book.id))

            setBookRead(readBook);
            console.log(books, readBook, bookRead)
        }
    }, [])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      
    return (
        <div className='mt-16'>
            <BarChart
                width={1100}
                height={600}
                data={bookRead}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="book_name" />
                <YAxis />
                <Bar dataKey="total_page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookRead.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            <ResponsiveContainer height={400}></ResponsiveContainer>
        </div>
    );
};

export default PageToRead;
import { GoPeople } from "react-icons/go";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../Utility/localstorage";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ReadBooks = () => {
    const books = useLoaderData();

    const [bookRead, setBookRead] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const readBook = books.filter(book => storedBookIds.includes(book.id))

            setBookRead(readBook);

            console.log(books, storedBookIds, readBook);
        }
    }, [])

    return (
        <div>
            <ul>
                {
                    bookRead.map(readbook => <div>
                        <div className="flex flex-col max-w-full border rounded-3xl p-6 ml-3 mb-4 mt-4 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                            <ul className="flex flex-col divide-y dark:divide-gray-300">
                                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                    <div className="md:flex w-full space-x-2 sm:space-x-4">
                                        <img className="mt-4 flex-shrink-0 object-cover w-30 h-35 dark:border- rounded outline-none sm:w-40 sm:h-56 dark:bg-gray-500" src={readbook.img} alt="book image" />
                                        <div className="flex flex-col justify-between w-full pl-0 md:pl-8 pb-4">

                                            <div className="space-y-1">
                                                <h3 className="text-4xl font-semibold leading-snug sm:pr-8">{readbook.book_name}</h3>
                                                <p className="card-title text-[#131313cc] font-medium text-xl mb-4">By: {readbook.author}</p>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="flex mt-6 mb-4">
                                                    <p className="font-semibold text-xl text-[#131313] mr-2">Tag: </p>
                                                    <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">{readbook.tags[0]}</h1>
                                                    <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">{readbook.tags[1]}</h1>
                                                </div>
                                                <div className="text-[#303030cc] font-medium text-lg flex gap-2">
                                                    <IoLocationOutline />
                                                    <p>Year of Publishing: {readbook.year_of_publishing}</p>
                                                </div>
                                            </div>



                                            <div className="flex gap-6 align-middle mb-3">
                                                <div className="flex gap-4 text-[#303030cc] font-medium text-lg align-middle">
                                                    <GoPeople />
                                                    <p>Publisher: <span>{readbook.publisher}</span> </p>
                                                </div>
                                                <div className="flex gap-4 text-[#303030cc] font-medium text-lg align-middle">
                                                    <MdOutlineFindInPage />
                                                    <p>Page: <span>{readbook.total_page}</span> </p>
                                                </div>
                                            </div>
                                            <hr />

                                            <div className="md:flex gap-4 mt-4">
                                                <p className="p-2 rounded-2xl bg-[#cddef3] text-lg font-medium text-[#328EFF] text-center">Category:{readbook.category}</p>
                                                <p className="mt-2 md:mt-0 p-2 rounded-2xl bg-[#f4e5cf] text-lg font-medium text-[#FFAC33] text-center">Rating:{readbook.rating}</p>
                                                <p className="mt-2 md:mt-0 p-2 rounded-2xl bg-[#23BE0A] text-lg font-medium text-[#ffff] text-center">View Details</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    )
                }
            </ul>
        </div>
    );
};

export default ReadBooks;
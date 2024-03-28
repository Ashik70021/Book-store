import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, getStoredWishList, saveReadBook, saveWishList } from "../Utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.id === id)
    console.log(book, id)

    const handleRead = (book) => {
        handleToast(book);
        saveReadBook(id);
        
    }
    const handleToast = (book) => {
        const storedBookIds = getStoredReadBook();
        console.log(storedBookIds)
        console.log(book)
        const isexists = storedBookIds.includes(book);
        console.log(isexists)
        if (isexists) {
            toast.warn("already selected");
        }else{
            toast("Book Added to Wish List")
        }
    }

    const handleWish = (book) => {
        handleWishToast(book);
        saveWishList(id);
    }
    const handleWishToast = (book) =>{
        const storeids = getStoredWishList();
        const storedBookIds = getStoredReadBook();
        const isexistsread = storedBookIds.includes(book);
        const isexists = storeids.includes(book);
        if (isexists || isexistsread) {
            toast.warn("already selected");
        }else{
            toast("Book Added to Wish List")
        }
    }
    return (
        <div className="md:grid grid-cols-2 mt-16">
            <div className="rounded-2xl p-6">
                <img src={book.img} alt="" />
            </div>
            <div className="mt-6 ml-12">
                <h1 className="text-4xl font-bold text-[#131313] mb-4">{book.book_name}</h1>
                <p className="card-title text-[#131313cc] font-medium text-lg mb-4">By: {book.author}</p>

                <hr />

                <p className="text-[#131313cc] font-medium text-lg mt-4 mb-4">{book.category}</p>

                <hr />

                <p className="text-xl text-[#131313cc] mt-6"><span className="font-semibold text-xl text-[#131313]">Review:</span> {book.review} </p>
                <div className="flex mt-6 mb-4">
                    <p className="font-semibold text-xl text-[#131313] mr-2">Tag: </p>
                    <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">{book.tags[0]}</h1>
                    <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">{book.tags[1]}</h1>
                </div>

                <hr />

                <div className="flex gap-16 mt-6">
                    <div className="">
                        <p className="text-[#131313cc] text-xl mb-2">Number of page:</p>
                        <p className="text-[#131313cc] text-xl mb-2">Publisher:</p>
                        <p className="text-[#131313cc] text-xl mb-2">Year of publishing:</p>
                        <p className="text-[#131313cc] text-xl mb-2">Rating: </p>
                    </div>
                    <div>
                        <p className="font-bold text-xl mb-2">{book.total_page}</p>
                        <p className="font-bold text-xl mb-2">{book.publisher}</p>
                        <p className="font-bold text-xl mb-2">{book.year_of_publishing}</p>
                        <p className="font-bold text-xl mb-2">{book.rating}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <button onClick={() => { handleRead(book.id) }} className="border text-xl pl-4 pr-4 pt-2 pb-2 rounded-2xl font-bold text-[#131313] mr-4">Read</button>
                    <button onClick={() => { handleWish(book.id) }} className="border text-xl pl-4 pr-4 pt-2 pb-2 rounded-2xl font-bold bg-[#50B1C9] text-white">Wishlist</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
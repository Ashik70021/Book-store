
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { id, img, tags, book_name, author, category, rating } = book;
    return (
        <Link to={`/bookdetails/${id}`}>
            {/* ///////////////////////////////////////// */}
            <div className="max-auto p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={img} alt="" className=" mx-auto object-cover object-center w-64 rounded-md h-72 dark:bg-gray-500" />
                <div className="card-body text-center">
                    <div className="flex justify-start">
                        <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">{tags[0]}</h1>
                        <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">{tags[1]}</h1>
                    </div>
                    <h2 className="card-title font-bold text-2xl text-[#131313]">{book_name}</h2>
                    <p className="card-title text-[#131313cc] font-medium text-lg">By: {author}</p>
                    <hr className="mt-2 dashed" />
                    <div className="flex justify-around mt-4">
                        <div>
                            <span className="text-[#131313cc] font-medium text-lg">{category}</span>
                        </div>
                        <div className="flex gap-3">
                            <p className="text-lg text-[#131313cc]">{rating}</p>
                            <div className="text-2xl text-[#131313cc]"><CiStar /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
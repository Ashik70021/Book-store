import { Link } from "react-router-dom";

const Book = () => {
    return (
        <Link to=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-center">
                    <div className="flex">
                        <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">tags1 asdas</h1>
                        <h1 className=" pl-2 pr-2 pb-1 pt-1 bg-[#e8ffe5] text-[#23BE0A] rounded-3xl text-xl font-semibold mr-6">tags2 asfas</h1>
                    </div>
                    <h2 className="card-title font-bold text-2xl text-[#131313]">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
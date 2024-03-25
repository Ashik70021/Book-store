import image from '../../assets/images/pngwing 1.png'

const Home = () => {
    return (
        <div className='m-16 md:flex justify-around bg-[#e0e0e0] rounded-2xl max-w-6xl mx-auto'>
            <div className='mt-16 md:mt-24 text-center md:text-start'>
                <h2 className='font-bold text-3xl md:text-6xl'>Books to freshen up <br />your bookshelf</h2>
                <button className='mt-12 p-4 border bg-[#23BE0A] rounded-xl text-white font-bold text-lg'>View The List</button>
            </div>
            <div className='p-8 text-center md:text-start'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;
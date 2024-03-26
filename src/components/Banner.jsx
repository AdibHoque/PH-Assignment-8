import {Link} from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="hero min-h-60 bg-base-200 rounded-2xl my-2 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse md:px-16">
          <img
            src="https://i.ibb.co/fpPfvXr/book1.png"
            className="max-h-[60vh] md:max-h-xs md:max-w-xs rounded-lg"
          />
          <div className="flex flex-col items-center lg:items-start gap-4 lg:px-20 ">
            <h1 className="text-5xl text-[#131313] font-bold banner-font my-4 text-center md:text-start">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listedbooks">
              <button className="btn bg-[#23BE0A] text-white font-bold">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

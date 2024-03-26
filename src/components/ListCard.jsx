import {Link} from "react-router-dom";
import people from "/public/people.svg";
import page from "/public/page.svg";
import location from "/public/location.svg";

function Badge({name}) {
  return (
    <div className="badge font-medium text-[#23BE0A] bg-[#23BE0A0D]">
      #{name}
    </div>
  );
}

export default function ListCard({data}) {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = data;
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="bg-[#1313130D] py-6 md:px-10 flex justify-center items-center">
          <img
            className="max-h-[30vh] w-48 animate-once animate-fade"
            src={image}
            alt={bookName}
          />
        </div>

        <div className="w-full px-2 md:pl-8 flex flex-col justify-center">
          <h1 className="banner-font font-bold text-[#131313] text-4xl">
            {bookName}
          </h1>
          <p className="text-[#131313CC] font-medium text-xl">By : {author}</p>
          <div className="md:my-4 flex flex-wrap gap-x-4 gap-y-2 items-center">
            <h3 className="text-[#131313] font-bold">Tag</h3>
            {tags.map((t) => (
              <Badge key={Math.random() * 9999} name={t}></Badge>
            ))}
            <p className="text-[#13131399] flex gap-x-1">
              <img src={location} alt="" />
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6">
            <p className="text-[#13131399] my-2 flex gap-x-1">
              <img src={people} alt="" />
              Publisher: {publisher}
            </p>
            <p className="text-[#13131399] my-2 flex gap-x-1">
              <img src={page} alt="" />
              Pages: {totalPages}
            </p>
          </div>
          <hr className="border-t border-[#13131326] my-3" />
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-sm rounded-3xl bg-[#328EFF26] text-[#328EFF]">
              Category: {category}
            </button>
            <button className="btn btn-sm rounded-3xl bg-[#FFAC3326] text-[#FFAC33]">
              Rating: {rating}
            </button>
            <Link to={`/books/${bookId}`}>
              <button className="btn btn-sm rounded-3xl bg-[#23BE0A] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

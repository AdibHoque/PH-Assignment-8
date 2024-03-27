import {Link} from "react-router-dom";
import star from "/star.svg";

function Badge({name}) {
  return (
    <div className="badge font-medium text-[#23BE0A] bg-[#23BE0A0D]">
      {name}
    </div>
  );
}

export default function Card({data}) {
  const {image, tags, bookName, author, category, rating, bookId} = data;
  return (
    <>
      <Link to={`/books/${bookId}`}>
        <div className="card card-compact  bg-base-100 p-4 border border-[F3F3F3]">
          <figure className="bg-[#F3F3F3] p-4 rounded-2xl">
            <img className="max-w-xs max-h-64" src={image} alt={bookName} />
          </figure>
          <div className="my-4">
            <div className="flex gap-x-2 mb-2">
              {tags.map((t) => (
                <Badge key={Math.round(Math.random() * 9999)} name={t}></Badge>
              ))}
            </div>
            <h2 className="card-title banner-font text-[#131313] font-bold">
              {bookName}
            </h2>
            <p className="text-[#131313CC] font-medium">By : {author}</p>
          </div>
          <hr className="border-t border-[#13131326] border-dashed mb-2" />
          <div className="flex justify-between items-center">
            <p className="text-[#131313CC] font-medium">{category}</p>
            <div className="flex justify-center items-center p-1">
              <p className="text-[#131313CC] font-medium flex">{rating}</p>
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

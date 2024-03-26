import {useLoaderData, useParams} from "react-router-dom";

function Badge({name}) {
  return (
    <div className="badge font-medium text-[#23BE0A] bg-[#23BE0A0D]">
      #{name}
    </div>
  );
}
function handleRead(data) {
  const db = localStorage.getItem("read");
  if (!db) {
    let arr = [];
    arr.push(data);
    localStorage.setItem("read", JSON.stringify(arr));
    console.log("Created item");
  } else {
    const parsedDb = JSON.parse(db);
    const exists = parsedDb.find((e) => e.bookId == data.bookId);
    if (exists) {
      return console.log("item already exists");
    } else {
      parsedDb.push(data);
      localStorage.setItem("read", JSON.stringify(parsedDb));
      console.log("pushed new data");
    }
  }
}

function handleWishlist(data) {
  const readDb = localStorage.getItem("read");
  const wishDb = localStorage.getItem("wishlist");

  if (readDb) {
    const parsedDb = JSON.parse(readDb);
    const exists = parsedDb.find((e) => e.bookId == data.bookId);
    if (exists) {
      return console.log("You already read this book");
    } else {
      if (wishDb) {
        const parsedWishDb = JSON.parse(wishDb);
        const exists = parsedWishDb.find((e) => e.bookId == data.bookId);
        if (exists) {
          return console.log("You already wishlisted this book");
        } else {
          parsedWishDb.push(data);
          localStorage.setItem("wishlist", JSON.stringify(parsedWishDb));
          console.log("pushed new wishdata");
        }
      } else {
        let arr = [];
        arr.push(data);
        localStorage.setItem("wishlist", JSON.stringify(arr));
        console.log("Created new wish");
      }
    }
  }
}

export default function Book() {
  const {id} = useParams();
  const loadData = useLoaderData();
  console.log(localStorage.getItem("read"));
  const data = loadData[id - 1];
  if (!data.tags) return (window.location.href = "/");
  const {
    bookName,
    author,
    image,
    review,
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
        <div className="lg:w-1/2 bg-[#1313130D] p-10 flex justify-center items-center">
          <img
            className="max-h-[80vh] animate-once animate-fade"
            src={image}
            alt={bookName}
          />
        </div>

        <div className="lg:w-1/2 px-2 md:pl-8">
          <h1 className="banner-font font-bold text-[#131313] text-4xl">
            {bookName}
          </h1>
          <p className="text-[#131313CC] font-medium text-xl">By : {author}</p>
          <hr className="border-t border-[#13131326] mt-3" />
          <p className="text-[#131313CC] font-medium text-xl my-2">
            {category}
          </p>
          <hr className="border-t border-[#13131326] mb-3" />
          <p className="text-[#131313B2]">
            <span className="text-[#131313] font-bold">Review: </span>
            {review}
          </p>
          <div className="my-4 flex gap-4 items-center">
            <h3 className="text-[#131313] font-bold">Tag</h3>
            {tags.map((t) => (
              <Badge key={Math.random() * 9999} name={t}></Badge>
            ))}
          </div>
          <hr className="border-t border-[#13131326] my-3" />
          <table className="table">
            <tbody>
              <tr className="m-0">
                <td className="text-[#131313B2]">Number of Pages:</td>
                <td className="text-[#131313] font-semibold">{totalPages}</td>
              </tr>
              <tr>
                <td className="text-[#131313B2]">Publisher:</td>
                <td className="text-[#131313] font-semibold">{publisher}</td>
              </tr>
              <tr>
                <td className="text-[#131313B2]">Year of Publishing:</td>
                <td className="text-[#131313] font-semibold">
                  {yearOfPublishing}
                </td>
              </tr>
              <tr>
                <td className="text-[#131313B2]">Rating:</td>
                <td className="text-[#131313] font-semibold">{rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-4">
            <a
              onClick={() => handleRead(data)}
              className="btn text-[#131313] bg-transparent border border-[#1313134D]"
            >
              Read
            </a>
            <a
              onClick={() => handleWishlist(data)}
              className="btn text-white bg-[#59C6D2]"
            >
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

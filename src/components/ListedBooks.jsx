import {useEffect, useState} from "react";
import ListCard from "./ListCard";

export default function ListedBooks() {
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const readData = localStorage.getItem("read");
    if (readData) setRead(JSON.parse(readData));
    const wishData = localStorage.getItem("wishlist");
    if (wishData) setWishlist(JSON.parse(wishData));
  }, []);
  function handleSort(event) {
    if (read.length == 0 && wishlist.length == 0) return;
    const type = event.target.value;
    if (type.startsWith("Sort")) {
      const readData = localStorage.getItem("read");
      if (readData) setRead(JSON.parse(readData));
      const wishData = localStorage.getItem("wishlist");
      if (wishData) setWishlist(JSON.parse(wishData));
    }
    if (type.startsWith("Rating")) {
      const sortedRead = [...read].sort((a, b) => b.rating - a.rating);
      setRead(sortedRead);
      const sortedWishlist = [...wishlist].sort((a, b) => b.rating - a.rating);
      setWishlist(sortedWishlist);
    }
    if (type.startsWith("Number")) {
      const sortedRead = [...read].sort((a, b) => b.totalPages - a.totalPages);
      setRead(sortedRead);
      const sortedWishlist = [...wishlist].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishlist(sortedWishlist);
    }
    if (type.startsWith("Publishing")) {
      const sortedRead = [...read].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setRead(sortedRead);
      const sortedWishlist = [...wishlist].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setWishlist(sortedWishlist);
    }
  }
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-y-2">
        <div className="bg-[#1313130D] w-full rounded-2xl p-5">
          <h1 className="text-center font-bold text-[#131313] text-3xl">
            Books
          </h1>
        </div>
        <select
          onChange={handleSort}
          className="select select-bordered w-full mb-2 max-w-[12rem] font-semibold text-center bg-[#23BE0A] text-white"
        >
          <option defaultValue>Sort By</option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publishing year</option>
        </select>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read&nbsp;Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex flex-col gap-4 my-6">
            {read.map((d) => (
              <ListCard
                key={Math.round(Math.random() * 9999)}
                data={d}
              ></ListCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist&nbsp;Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex flex-col gap-4 my-6">
            {wishlist.map((d) => (
              <ListCard
                key={Math.round(Math.random() * 9999)}
                data={d}
              ></ListCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

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
  return (
    <>
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
              <ListCard key={d.id * Math.random()} data={d}></ListCard>
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
              <ListCard key={d.id * Math.random()} data={d}></ListCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

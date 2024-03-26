import {useEffect, useState} from "react";
import Card from "./Card";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h1 className="mt-12 banner-font font-bold text-[#131313] text-5xl text-center">
        Books
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
        {data.map((d) => (
          <Card key={Math.random()} data={d}></Card>
        ))}
      </div>
    </>
  );
}

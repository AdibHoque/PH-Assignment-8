import {useEffect, useState} from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

export default function Ratings() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const readDb = JSON.parse(localStorage.getItem("read")) || [];
    let arr = [];
    readDb.forEach((e) => {
      arr.push({name: e.bookName, rating: e.rating});
    });
    setData(arr);
  }, []);
  if (!data[0])
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <h1 className="text-6xl text-center">No Books read!</h1>
      </div>
    );
  return (
    <>
      <div className="bg-[#1313130D] w-full rounded-2xl p-5 animate-fade animate-once">
        <h1 className="text-center font-bold text-[#131313] text-3xl animate-fade animate-delay-200 animate-once">
          Ratings
        </h1>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 5]} />
          <Bar
            dataKey="rating"
            fill="#8884d8"
            shape={<Rectangle />}
            label={{position: "top"}}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

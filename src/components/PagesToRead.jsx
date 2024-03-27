import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const {fill, x, y, width, height} = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const readDb = JSON.parse(localStorage.getItem("read")) || [];
    let arr = [];
    readDb.forEach((e) => {
      arr.push({name: e.bookName, pages: e.totalPages});
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
      <div className="bg-[#1313130D] w-full rounded-2xl p-5">
        <h1 className="text-center font-bold text-[#131313] text-3xl">
          Pages To Read
        </h1>
      </div>
      {/* <div className="flex justify-center items-center"> */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
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

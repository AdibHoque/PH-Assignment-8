import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Page A",
    pages: 4000,
  },
  {
    name: "Page B",
    pages: 3000,
  },
  {
    name: "Page C",
    pages: 2000,
  },
  {
    name: "Page D",
    pages: 2780,
  },
  {
    name: "Page E",
    pages: 1890,
  },
  {
    name: "Page F",
    pages: 2390,
  },
];

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
      <div>
        <h1 className="text-6xl text-center">No Books read!</h1>
      </div>
    );
  return (
    <div className="flex justify-center items-center">
      <BarChart
        width={1200}
        height={500}
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
    </div>
  );
}

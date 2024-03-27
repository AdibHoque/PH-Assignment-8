import {useEffect, useState} from "react";

function Accordions({data}) {
  const {question, answer} = data;
  return (
    <div className="collapse collapse-plus bg-base-200 mb-2 animate-fade-up animate-once">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-bold">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/faq.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="bg-[#1313130D] w-full rounded-2xl p-5 mb-4">
        <h1 className="text-center font-bold text-[#131313] text-3xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-plus bg-base-200 mb-2 animate-fade-up animate-once">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            What is BookBash?
          </div>
          <div className="collapse-content">
            <p>
              BookBash is an online platform dedicated to book lovers, providing
              resources, recommendations, and community engagement for readers
              of all ages and interests.
            </p>
          </div>
        </div>
        {data.map((d) => (
          <Accordions
            key={Math.round(Math.random() * 99999)}
            data={d}
          ></Accordions>
        ))}
      </div>
    </>
  );
}

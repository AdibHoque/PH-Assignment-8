import {Link} from "react-router-dom";

const star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11.48 3.49897C11.5223 3.3958 11.5943 3.30755 11.6869 3.24543C11.7795 3.18331 11.8885 3.15015 12 3.15015C12.1115 3.15015 12.2205 3.18331 12.3131 3.24543C12.4057 3.30755 12.4777 3.3958 12.52 3.49897L14.645 8.60997C14.6848 8.70561 14.7501 8.78841 14.834 8.84928C14.9178 8.91015 15.0167 8.94672 15.12 8.95497L20.638 9.39697C21.137 9.43697 21.339 10.06 20.959 10.385L16.755 13.987C16.6764 14.0542 16.6179 14.1417 16.5858 14.2399C16.5537 14.3382 16.5493 14.4434 16.573 14.544L17.858 19.929C17.8838 20.037 17.877 20.1503 17.8385 20.2545C17.8 20.3587 17.7315 20.4491 17.6416 20.5144C17.5517 20.5797 17.4445 20.6168 17.3335 20.6212C17.2225 20.6256 17.1127 20.597 17.018 20.539L12.293 17.654C12.2048 17.6001 12.1034 17.5715 12 17.5715C11.8966 17.5715 11.7952 17.6001 11.707 17.654L6.98198 20.54C6.88724 20.598 6.77743 20.6266 6.66644 20.6222C6.55544 20.6178 6.44823 20.5807 6.35835 20.5154C6.26847 20.4501 6.19994 20.3597 6.16143 20.2555C6.12292 20.1513 6.11615 20.038 6.14198 19.93L7.42698 14.544C7.45081 14.4434 7.44643 14.3381 7.41432 14.2399C7.38221 14.1416 7.32361 14.0541 7.24498 13.987L3.04098 10.385C2.95632 10.3128 2.89499 10.2171 2.86474 10.1101C2.83449 10.003 2.8367 9.88942 2.87107 9.78362C2.90544 9.67782 2.97044 9.58461 3.05783 9.51578C3.14522 9.44695 3.25107 9.4056 3.36198 9.39697L8.87998 8.95497C8.98323 8.94672 9.0822 8.91015 9.16601 8.84928C9.24981 8.78841 9.3152 8.70561 9.35498 8.60997L11.48 3.49897Z"
      stroke="#424242"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function Badge({name}) {
  return (
    <div className="badge font-medium text-[#23BE0A] bg-[#23BE0A0D]">
      #{name}
    </div>
  );
}

export default function ListCard({data}) {
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
        <div className="bg-[#1313130D] p-10 flex justify-center items-center">
          <img
            className="max-h-[40vh] w-[20vw] animate-once animate-fade"
            src={image}
            alt={bookName}
          />
        </div>

        <div className="w-full px-2 md:pl-8">
          <h1 className="banner-font font-bold text-[#131313] text-4xl">
            {bookName}
          </h1>
          <p className="text-[#131313CC] font-medium text-xl">By : {author}</p>
          <div className="my-4 flex gap-4 items-center">
            <h3 className="text-[#131313] font-bold">Tag</h3>
            {tags.map((t) => (
              <Badge key={Math.random() * 9999} name={t}></Badge>
            ))}
          </div>
          <p className="text-[#13131399] my-2">Publisher: {category}</p>
          <hr className="border-t border-[#13131326] my-3" />
        </div>
      </div>
    </>
  );
}

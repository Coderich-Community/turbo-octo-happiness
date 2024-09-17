import React from "react";
import reviewsData from "../data/review.json";
import { IoStar } from "react-icons/io5";

const Review = () => {
  const reviews = reviewsData.reviews;
  return (
    <section
      className="w-[100vw] overflow-x-hidden h-auto relative flex flex-col justify-center items-center gap-[4vh] mt-[20vh] mb-[15vh]"
      id="reviews"
    >
      <div className="absolute left-0 -top-[250px] hidden md:hidden lg:block xl:block">
        <img src="" alt="midLeft" />
      </div>
      <div className="w-[100%] mx-auto font-semibold text-center text-3xl">
        <h1>See what happy customers are saying about AgriLink's</h1>
      </div>
      <div className="flex flex-wrap w-full md:w-full lg:w-[85%] xl:w-[85%] mx-auto justify-center items-center gap-x-10 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col  items-start justify-start w-[95%] md:w-[95%] lg:w-[368px] xl:w-[368px] h-[294px] "
          >
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-lg font-bold">{review.userName}</h1>
              <div className="flex gap-1 text-yellow-300">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>

            {review.comment}
            <h1
              className="text-xl font-semibold pt-2 text-[#386842]"
              style={{ WebkitTextStroke: ".3px #386842" }}
            >
              {review.service}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;

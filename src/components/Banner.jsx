import React from "react";

const Banner = () => {
  return (
    <div
      className="banner container d-flex justify-content-center justify-content-md-start align-items-center"
    >
      <div className="text-start my-3">
        <p className="display-5">Healty Foods</p>
        <h1 className="text-dark">Explore Diffrent Meals</h1>
        <button className="btn btn-success text-white">See More Below</button>
      </div>
    </div>
  );
};

export default Banner;

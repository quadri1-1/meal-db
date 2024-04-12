import React from "react";
import { useGlobalContext } from "../hooks/context";
import { useRef } from "react";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefult();
  };
  const inputContainer = useRef();
  const searchMeal = () => {
    setSearchValue(inputContainer.current.value)
  }
  return (
    <div className=" my-2">
      <form onSubmit={handleSubmit} className="w-100 w-md-50 mx-auto">
        <label
          htmlFor="name"
          className="form-label text-successs fw-bold fs-4 text-center"
        >
          Search for your favourite Meal
        </label>
        <input type="text" className="form-control" id="name" ref={inputContainer} onChange={searchMeal}/>
      </form>
    </div>
  );
};

export default SearchForm;

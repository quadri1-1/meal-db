import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading"
import ReactPlayer from 'react-player/youtube'
const Meal = () => {
  const { mealId } = useParams();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const finalUrl = url + mealId;
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(finalUrl);
    const data = await res.json();
    if (data.meals) {
      const {
        strMeal: name,
        strCategory: cat,
        strArea: area,
        strInstructions: instructions,
        strMealThumb: image,
        strYoutube: youtube,
        strTag: tags,
      } = data.meals[0];
      const newMeal = {
        name,
        cat,
        area,
        instructions,
        image,
        youtube,
        tags,
      };
      setMeal(newMeal);
    } else {
      setMeal(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [mealId]);

  if (loading) {
    return <Loading/>;
  }
  if (!meal) {
    return <h2>No meal to display</h2>
  }

  return (
    <div className="container mt-2">
      <div>
        <img className="w-100" style={{height : "400px", objectFit: "cover" }} src={meal.image} alt={meal.name} />
        <div className="mt-3">
          <p>
            <span className="bg-success text-white p-1 me-2">Name:</span>
            {meal.name}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Cartegory:</span>
            {meal.cat}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Tag:</span>
            {meal.tags}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Area :</span>
            {meal.area}
          </p>
          <p className="lh-lg">
            <span className="bg-success text-white p-1 me-2">Instruction:</span>
            {meal.instructions}
          </p>
          <ReactPlayer url={meal.youtube} controls={true} playing ={true} width={"285"}  />
        </div>
      </div>
    </div>
  );
};

export default Meal;

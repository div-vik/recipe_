import React, { useEffect, useState } from "react";
import classes from "./hero.module.css";
import meal from "../../assets/meal1.jpg";

const Hero = () => {
  const URL1 =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const URL2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger";
  const [chickenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const res = await fetch(URL1);
        const data = await res.json();

        setChickenRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChickenRecipe();
  }, []);

  useEffect(() => {
    const fetchBurgerRecipe = async () => {
      try {
        const res = await fetch(URL2);
        const data = await res.json();

        setBurgerRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBurgerRecipe();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            Craving some <br />
            delicious meals
          </h2>
          <h5>Feeling the cooking vibe</h5>
          <p className={classes.firstDesc}>
            You've come to the right place for some tasty recipes
          </p>
          <p className={classes.secondDesc}>Just see what we have for you</p>
          <div className={classes.buttons}>
            <button>Get Started</button>
            <button>Explore recipe</button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} alt="" />
          <div className={classes.chickenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} alt="" />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className={classes.burgerMeal}>
            <div className={classes.imgContainer}>
              <img src={burgerRecipe?.strMealThumb} alt="" />
            </div>
            <h5>{burgerRecipe?.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

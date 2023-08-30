import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/api/workouts')
      const data = await response.json()
    };

    fetchWorkouts()
  }, []);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home
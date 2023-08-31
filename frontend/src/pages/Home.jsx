import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      response.ok? setWorkouts(json) : null
    };

    fetchWorkouts()
  }, []);

  return (
    <div className="home">
      <div className="workouts">

        {/* Check if there are any workouts. If so render workout */}
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}

      </div>
      <WorkoutForm />
    </div>
  )
};

export default Home
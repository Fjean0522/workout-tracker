import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      };
    };

    fetchWorkouts()
  }, [workouts]);

  return (
    <div className="home">
      <div className="workouts">

        {/* Check if there are any workouts. If so render workout.
            If fetch request fails or returns an empty array, render loading text*/}
        {Array.isArray(workouts) ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <p>Loading workouts...</p>
        )}

      </div>
      <WorkoutForm />
    </div>
  )
};

export default Home
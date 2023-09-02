import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        };

        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            dispatch({ type: 'SET_WORKOUTS', payload: json });
        };
    };

    return (
        <form className='create' onSubmit={submitForm}>
            <h3>Add a New Workout</h3>

            <label>Exercise Name:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in lb):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button type='submit'>Add Workout</button>

            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm
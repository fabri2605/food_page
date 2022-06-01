import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import React from 'react';

const AvailableMeals = () => {
    const [DUMMY_MEALS, setDummys] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState('');

    async function fetchingMeals() {
        const response = await fetch(
            'https://react-http-467cc-default-rtdb.firebaseio.com/meals.json'
        );
        if (!response.ok) {
            setHasError('Error while fetching');
        }
        const data = await response.json();
        const smth = [];
        for (const key in data) {
            smth.push({ ...data[key], id: key });
        }
        setDummys(smth);
        setIsLoading(false);
    }

    React.useEffect(
        React.useCallback(() => {
            fetchingMeals().catch((error) => {
                setIsLoading(false);
                setHasError(error.message);
            });
        }),
        []
    );

    const mealsList = React.useCallback(
        DUMMY_MEALS.map((meal) => (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )),
        [DUMMY_MEALS]
    );

    return (
        <section className={classes.meals}>
            <Card>
                {!hasError ? (
                    isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>{mealsList}</ul>
                    )
                ) : (
                    <p>{hasError}</p>
                )}
            </Card>
        </section>
    );
};

export default AvailableMeals;

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import React from 'react';
import Filter from '../UI/Filter';

const AvailableMeals = () => {
    const [DUMMY_MEALS, setDummys] = React.useState([]);
    const [filteredMeals, setFilteredMeals] = React.useState(DUMMY_MEALS);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState('');

    async function fetchingMeals() {
        const response = await fetch(
            process.env.REACT_APP_NOT_SECRET_CODE_MEALS
        );
        if (!response.ok) {
            setHasError('Error while fetching');
        }
        const data = await response.json();
        const fetchedMeals = [];
        for (const key in data) {
            fetchedMeals.push({ ...data[key], id: key });
        }
        setDummys(fetchedMeals);
        setFilteredMeals(fetchedMeals);
        setIsLoading(false);
    }

    const changeFilterHandler = (type) => {
        console.log(type);
        if (type === 'all') {
            setFilteredMeals(DUMMY_MEALS);
        } else {
            setFilteredMeals(DUMMY_MEALS.filter((meal) => meal.type === type));
        }
    };

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
        filteredMeals.map((meal) => (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )),
        [filteredMeals]
    );

    return (
        <section className={classes.meals}>
            <Filter filterBy={changeFilterHandler} />
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

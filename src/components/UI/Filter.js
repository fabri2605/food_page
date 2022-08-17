import React, { useEffect, useState } from 'react';
import classes from './Filter.module.css';

function Filter(props) {
    const [showing, setShowing] = useState('all');

    const filterHandler = (e) => {
        setShowing(e.target.value);
    };

    useEffect(() => {
        props.filterBy(showing);
    }, [showing]);

    return (
        <div className={classes.filter}>
            <select value={showing} onChange={filterHandler}>
                <React.Fragment className={classes.options} >
                <option value='all'>All</option>
                <option value='meat'>Meat</option>
                <option value='fish'>Fish</option>
                <option value='veggie'>Veggies</option>
                </React.Fragment>
            </select>
        </div>
    );
}

export default Filter;

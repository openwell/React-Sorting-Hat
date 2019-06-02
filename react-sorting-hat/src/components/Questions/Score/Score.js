import React from 'react'
import classes from './Score.module.scss'
import sortingHat from '../../../resources/images/sorting-hat.png'


function score(props) {
    return (
        <div hidden={props.display} className={classes.SortingHat}>
            <img src={sortingHat} alt=""/>
            <div>
                <p>Your Score is </p>
                <p>Your House is  </p>
            </div>
        </div>
    )
}

export default score

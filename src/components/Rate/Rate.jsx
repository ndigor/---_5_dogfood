import React, { memo, useCallback, useEffect, useState } from 'react';
import { ReactComponent as Star } from './star.svg';
import styles from './rate.css';
import classNames from 'classnames';

let cn = classNames.bind(styles);

const Rate = memo(({ rating, setRate = () => {}, isModify = false }) => {
    const emptyArr = new Array(5).fill(<></>);
    const [starArr, setStarArr] = useState(emptyArr);

    const changeRating = useCallback(
        (indexStar) => {
            if (!isModify) {
                return;
            }
            setRate(indexStar);
        },
        [setRate, isModify]
    );

    const paintingStarsWhileMoving = (rate) => {
        if (!isModify) {
            return;
        }
        paintingRating(rate);
    };

    const paintingRating = useCallback(
        (rate) => {
            const newStarArr = starArr.map((elem, index) => {
                return (
                    <Star
                        className={cn({ filled: index < rate, modify: isModify })}
                        onMouseEnter={() => paintingStarsWhileMoving(index + 1)}
                        onMouseLeave={() => paintingStarsWhileMoving(rating)}
                        onClick={() => changeRating(index + 1)}
                    />
                );
            });
            setStarArr(newStarArr);
        },
        [rating, isModify]
    );

    useEffect(() => {
        paintingRating(rating);
    }, [paintingRating]);

    return (
        <div>
            {starArr.map((elem, index) => {
                return <span key={index}>{elem}</span>;
            })}
        </div>
    );
});

export default Rate;
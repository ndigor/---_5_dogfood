import React, { memo, useContext, useState } from 'react';
import './productReviews.css';
import { timeOptions } from '../../utils/utils';
import Rate from '../Rate/Rate';
import { useForm } from 'react-hook-form';
import { api } from '../../utils/api';
import { CardContext } from '../../context/cardContext';
import { Trash3 } from 'react-bootstrap-icons';

const ProductReviews = memo(({ productInfo, allReviews, setAllReviews }) => {
    const [formActive, setFormActive] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: 'onBlur' });
    const { user } = useContext(CardContext);
    const [rate, setRate] = useState(3);

    const submitReview = async (review) => {
        return await api
            .addNewReview(productInfo._id, review)
            .then((product) => setAllReviews(product.reviews))
            .catch((error) => console.log(error));
    };

    const deleteReview = async (reviewId) => {
        return await api
            .deleteProductReview(productInfo._id, reviewId)
            .then(() =>
                setAllReviews((state) =>
                    state.filter((productReview) => productReview._id !== reviewId)
                )
            )
            .catch((error) => console.log(error));
    };

    const sendReview = ({ text }) => {
        submitReview({ text, rating: rate });
        reset();
        setFormActive(false);
        setRate(3);
    };

    const checkingTheField = {
        required: {
            value: true,
            message: 'Обязательное поле для заполнения',
        },
    };

    return (
        <div className='product__reviews'>
            <h2 className='product__reviews_title'>Отзывы</h2>
            <button className='reviews_btn' onClick={() => setFormActive(!formActive)}>
                Написать отзыв
            </button>
            {formActive && (
                <form className='form__reviews' onSubmit={handleSubmit(sendReview)}>
                    <Rate rating={rate} setRate={setRate} isModify={true} />
                    <div>
                        <textarea
                            type='text'
                            {...register('text', { ...checkingTheField })}
                            placeholder='Ваш отзыв'
                            className='form__reviews_input'
                            rows={3}
                        />
                        {errors?.text && (
                            <span className='errors__span'> {errors?.text.message}</span>
                        )}
                    </div>
                    <button type='submit' className='reviews_btn'>
                        Отправить
                    </button>
                </form>
            )}
            <div className='reviews__list'>
                {allReviews.map((item) => {
                    return (
                        <div key={item._id} className='reviews__item'>
                            <div className='reviews__name-wrap'>
                                <span className='reviews__name'>{item.author.name}&#160;</span>
                                <span className='reviews__date'>
                                    {new Date(item.created_at).toLocaleString('ru-RU', timeOptions)}
                                </span>
                            </div>
                            <div className='reviews__rate'>
                                <Rate rating={item.rating} />
                            </div>
                            <div className='reviews__text-wrap'>
                                <div className='reviews__text'>{item?.text}</div>
                                {user._id === item.author._id ? (
                                    <Trash3
                                        className='reviews__trash'
                                        onClick={() => deleteReview(item._id)}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    );
                })}
                <button className='reviews_btn btn__all_reviews'>Все отзывы {'>'}</button>
            </div>
        </div>
    );
});

export default ProductReviews;
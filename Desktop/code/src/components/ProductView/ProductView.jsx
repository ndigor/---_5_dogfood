import React, { useEffect, useState } from 'react';
import './productView.css';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../utils/api';
import GoBack from '../GoBack/GoBack';

const ProductView = () => {
    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getOneProduct(id).then((data) => setProductInfo(data));
    }, [id]);

    return (
        <>
            <div className="product__wrapper">
                <div className="product__title_wrapper">
                    <GoBack />
                    <h3 className="product__title">{productInfo.name}</h3>
                    <div className="product__rating">
                        <span>Artikul</span>
                        <span>Rate</span>
                    </div>
                </div>
                <div className="product__img_wrapper">
                    <div className="card__sticky card__sticky_left">
                        {productInfo.discount ? (
                            <span className="card__discount">
                                -{productInfo.discount}%
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                    <img
                        className="product__img"
                        src={productInfo.pictures}
                        alt=""
                    />
                </div>
                <div className="product__description">
                    <span className="product__description_price">
                        {productInfo.price}&nbsp;₽
                    </span>
                </div>
                <div className="product__description">
                    <span className="product__description_title">Описание</span>
                    <span>{productInfo.description}</span>
                </div>
            </div>
        </>
    );
};

export default ProductView;

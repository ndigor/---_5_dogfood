import React from 'react';
import './productprice.css';

const ProductPrice = ({ productInfo }) => {
    return (
        <div className="product__price">
            {!!productInfo.discount ? (
                <span className="product__old_price">
                    {productInfo.price}&nbsp;₽
                </span>
            ) : (
                <span className="product__old_price"></span>
            )}
            {!!productInfo.discount ? (
                <span className="product__price _red">
                    {productInfo.price -
                        (productInfo.price * productInfo.discount) / 100}{' '}
                    ₽
                </span>
            ) : (
                <span className="product__price _black">
                    {productInfo.price -
                        (productInfo.price * productInfo.discount) / 100}{' '}
                    ₽
                </span>
            )}
        </div>
    );
};

export default ProductPrice;

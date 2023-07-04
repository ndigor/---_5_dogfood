import React, { useState } from 'react';
import './faq.css';
import data from '../../data/popapData.json';

const FAQ = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        return setSelected(index);
    };

    return (
        <div className="faq__wrapper">
            <h2 className="faq__title">Часто спрашивают</h2>
            <div className="faq__accordion">
                {data.map((item, index) => {
                    return (
                        <div className="faq__accordion_item" key={index}>
                            <div
                                className="faq__accordion_title"
                                onClick={() => toggle(index)}
                            >
                                <span>{selected === index ? '-' : '+'}</span>
                                <h3>{item.title}</h3>
                            </div>
                            <div
                                className={
                                    selected === index
                                        ? 'faq__accordion_content show'
                                        : 'faq__accordion_content'
                                }
                            >
                                {item.text}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
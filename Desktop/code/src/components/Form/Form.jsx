
import React, { useState } from "react";

export const Form = () => {

    // const [inputName, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [contactInfo, setContactInfo] = useState({
        name: '',
        lastName: '',
        phone: 0,
        email: ''
    });


    const sendData = (data) => {
        console.log({ data });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        sendData({...contactInfo, phoneNumberFromVeryImportantPerson: contactInfo.phone })
    }

    const handleChange = (e) => {
        // console.log(e);
        setContactInfo((state) => ({ ...state, [e.target.name]: e.target.value }))
        // if (e.target.name === 'name') {
        //   setContactInfo((state) => ({ ...state, name: e.target.value }))
        // }
        // if (e.target.name === 'email') {
        //   setContactInfo((state) => ({ ...state, email: e.target.value }))
        // }
        // if (e.target.name === 'lastName') {
        //   setContactInfo((state) => ({ ...state, lastName: e.target.value }))
        // }
        // if (e.target.name === 'phoneNumber') {
        //   setContactInfo((state) => ({ ...state, phoneNumber: e.target.value }))
        // }
    }

    // console.log({ contactInfo });

    return (<div className=" incontent ">
        <form className="form-example" onSubmit={handleSubmit} >
            <input name="name" type="text" value={contactInfo.name} placeholder="Name" onChange={handleChange} className="form__input" />
            <input name="email" type="text" value={contactInfo.email} placeholder="Email" onChange={handleChange} className="form__input" />
            <input name="lastName" type="text" value={contactInfo.lastName} placeholder="lastName" onChange={handleChange} className="form__input" />
            <input name="phone" type="number" value={contactInfo.phoneNumber} placeholder="phoneNumber" onChange={handleChange} className="form__input" />
            <button type="submit" >click</button>
        </form>
    </div>)
}
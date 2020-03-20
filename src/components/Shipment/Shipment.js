import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }
    const auth = useAuth();


    return (

        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>

            <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder='your name' />
            {errors.name && <span className='error'>Name is required</span>}

            <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder='your email' />
            {errors.email && <span className='error'>email field is required</span>}

            <input name="city" ref={register({ required: true })} placeholder='your city' />
            {errors.city && <span className='error'>city field is required</span>}


            <input name="country" ref={register({ required: true })} placeholder='your country' />
            {errors.country && <span className='error'>country field is required</span>}


            <input type="submit" />
        </form>
    )
};

export default Shipment;
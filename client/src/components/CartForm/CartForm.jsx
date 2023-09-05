import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CartForm.scss';
import Button from '../Button/Button';

function CartForm({ cartItems, totalCost, totalDiscount }) {
  const navigate = useNavigate(); 

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Full name should contain only English letters')
      .min(5, 'Full name should be at least 5 characters long')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    address: Yup.string()
      .matches(/[A-Za-z]/, 'Address should contain at least one English letter')
      .min(5, 'Address should be at least 5 characters long')
      .required('Address is required'),
    phone: Yup.string()
      .matches(/^\+[0-9]{12}$/, 'Phone number should start with + and contain 12 digits')
      .required('Phone number is required'),
    message: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const orderData = {
        customer: {
          name: values.name,
          email: values.email,
          address: values.address,
          phone: values.phone,
          message: values.message,
          totalPrice: totalCost, 
          totalDiscount: totalDiscount, 
        },
        cartItems: cartItems, 
      };

      axios
        .post('http://localhost:8000/orders', orderData) 
        .then((response) => {
          console.log('The order was successfully sent to the server:', response.data);
          resetForm();
          localStorage.clear();
          navigate('/thank-you');
        })
        .catch((error) => {
          console.error('Error sending order:', error);
        });
    },
  });

  return (
    <form className={'cart__form'} onSubmit={formik.handleSubmit} autoComplete="off" method="post">
      <div className={'cart__form-group-wrapper'}>
        <div className={'cart__form-group'}>
          <label className={'cart__form-label'} htmlFor="cart__fullname">
            Full name*
          </label>
          <input
            className={'cart__form-input'}
            id="cart__fullname"
            type="text"
            name="name"
            placeholder="Your full name"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="cart__form-error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={'cart__form-group'}>
          <label className={'cart__form-label'} htmlFor="cart__email">
            Your email*
          </label>
          <input
            className={'cart__form-input'}
            id="cart__email"
            type="email"
            name="email"
            placeholder="example@yourmail.com"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="cart__form-error">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div className={'cart__form-group-wrapper'}>
        <div className={'cart__form-group'}>
          <label className={'cart__form-label'} htmlFor="cart__address">
            Address*
          </label>
          <input
            className={'cart__form-input'}
            id="cart__address"
            type="text"
            name="address"
            placeholder="Your company address"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="cart__form-error">{formik.errors.address}</div>
          ) : null}
        </div>
        <div className={'cart__form-group'}>
          <label className={'cart__form-label'} htmlFor="cart__phone">
            Phone number*
          </label>
          <input
            className={'cart__form-input'}
            id="cart__phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="cart__form-error">{formik.errors.phone}</div>
          ) : null}
        </div>
      </div>
      <div className={'cart__form-group-wrapper'}>
        <div className={'cart__form-group'}>
          <label className={'cart__form-label'} htmlFor="cart__message">
            Message
          </label>
          <textarea
            className={'cart__form-input cart__form-input_message'}
            id="cart__message"
            name="message"
            placeholder="Some extra information"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>
      </div>
        <Button
          className={'cart__form-btn'}
          label="Confirm"
          type="submit"
          onClick={totalCost === 0 ? undefined : formik.handleSubmit}
        />
    </form>
  );
}

export default CartForm;
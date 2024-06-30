import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";
import { Col, Container, Row  } from 'react-bootstrap';

import logo from '../img/skool-logo-9DCF3E49B3-seeklogo.com.png'

const UserSignup = () => {
    const history = useHistory();

    const Signupschema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <div className='bg'>
            <Container fluid className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="col-md-6 col-12">
                            <div>
                                <img src={logo} width="30%" alt="" />
                            </div>
                            <div className='mt-4'>
                                <h3 className='fw-bold'>Everything you need to build community and make money online.</h3>
                                <ul className='ps-0 mt-3'>
                                    <li className='mb-4 '>📈   Highly engaged</li>
                                    <li className='mb-4 '>❤️   Simple to setup</li>
                                    <li className='mb-4 '>🙂   Fun to use</li>
                                    <li className='mb-4 '>💰   Charge for membership</li>
                                    <li className='mb-4 '>📱    iOS + Android apps</li>
                                    <li className='mb-4 '>🌎   Millions of users daily</li>
                                </ul>
                                <a href="https://www.skool.com/" target='_blank' className='text-dark'>help@skool.com</a>
                            </div>

                        </div>
                        <div className="col-md-6 col-12 pt-md-0 pt-5">
                            <div className='d-flex justify-content-center align-items-center  '>
                                <div className="box-1 bg-white">
                                    <h1 className='mb-4 fs-3'>Create your SignIn account</h1>
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            password: '',
                                        }}
                                        validationSchema={Signupschema}
                                        onSubmit={async (values) => {
                                            axios.post('https://vermilion-node.onrender.com/user/signup', values)
                                                .then((res) => {
                                                    console.log(res);
                                                    history.push('/user');
                                                })
                                                .catch((error) => {
                                                    alert(error.response.data.message);
                                                });
                                        }}
                                    >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                                                <label htmlFor="name" className='fw-bold'>Name:</label>
                                                <Field id="name" className='in-gov' name="name" placeholder="Name" />
                                                <span><ErrorMessage name='name' /><br /><br /></span>

                                                <label htmlFor="email" className='fw-bold'>Email:</label>
                                                <Field
                                                    className='in-gov'
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email123@email.com"
                                                    type="email"
                                                />
                                                <span><ErrorMessage name='email' /><br /><br /></span>

                                                <label htmlFor="password" className='fw-bold'>Password:</label>
                                                <Field id="password" className='in-gov' name="password" placeholder="Password" type="password" />
                                                <span><ErrorMessage name='password' /><br /><br /></span>

                                                <div className='d-flex justify-content-center'>
                                                    <button type="submit" className='submit'>Submit</button>
                                                </div>
                                                <Link to="/user" className="text-dark mt-3 text-center">
                                                    <li className='me-2 fw-bold'>
                                                        <span className=''>Already Have An Account?</span> <span className='login-color'>Log In</span>
                                                    </li>
                                                </Link>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default UserSignup;




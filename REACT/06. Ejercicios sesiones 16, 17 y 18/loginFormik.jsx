import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {useNavigate} from 'react-router-dom'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }

    const navigate = useNavigate()

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                /* Se añaden los valores iniciales*/
                initialValues={initialCredentials}

                /** Validamos los campos con Yup */
                validationSchema={loginSchema}

                /** Se simula la orden submit */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));

                    /** Cuando se loguea el usuario, los datos se quedan guardados en el navegador */
                    await localStorage.setItem('credentials', values)
                    navigate('/profile');
                }}
            >

                {/** Obtenemos props de Formik */}

                {({
                    errors,
                    touched,
                    isSubmitting,
                    values,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type='email' name="email" placeholder="example@email.com" />

                        {/** Email errors */}

                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component={'div'}></ErrorMessage>
                            )
                        }

                        {/** Password errors */}

                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component={'div'}></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default LoginFormik;

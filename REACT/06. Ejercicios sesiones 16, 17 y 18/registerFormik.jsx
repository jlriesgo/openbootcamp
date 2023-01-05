import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//Importamos las clases
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', /** para confirmar el password, deben ser iguales */
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),

            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),

            password: Yup.string()
                .required('Password is required'),

            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),

            confirm: Yup.string() /** Campo texto = contraseña */
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Passwords must match!'
                    )
                }).required('You must confirm your password')
        }
    );


    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}

                /** Validamos los campos con Yup */
                validationSchema={registerSchema}

                /** Se simula la orden submit */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}

            >

                {({
                    errors,
                    touched,
                    isSubmitting,
                    values,
                    handleChange,
                    handleBlur }) => (
                    <Form>

                        <label htmlFor="username">Username</label>
                        <Field id="username" type='text' name="username" placeholder="username" />

                        <label htmlFor="email">Email</label>
                        <Field id="email" type='email' name="email" placeholder="example@email.com" />

                        <label htmlFor="role">User Role</label>
                        <Field id="role" type='text' name="role" placeholder="Select your role" />

                        {/** username errors */}

                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component={'div'}></ErrorMessage>
                            )
                        }

                        {/** email errors */}

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

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />

                        {/** Confirm Password errors */}

                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component={'div'}></ErrorMessage>
                            )
                        }


                        <button type="submit">Register</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}



            </Formik>
        </div>
    );
}

export default RegisterFormik;

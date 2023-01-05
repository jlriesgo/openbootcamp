import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik/>
            </div>
    );
}

export default LoginPage;

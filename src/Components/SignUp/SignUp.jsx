import React, { useState }from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios'

function SignUp() {
    const navigate = useNavigate();

    // State variables to hold form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/user/register/', {
                email_address: email,
                password: password,
                confirm_password: confirmPassword
            });
            
            setSuccessMessage('Registration successful');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.log(error);  // Log the full error object for more details
            
            if (error.response && error.response.data.detail) {
                setErrorMessage(error.response.data.detail);
            } else if (error.response && error.response.data) {
                setErrorMessage(JSON.stringify(error.response.data)); 
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div>
            <div className='login-main-div'>
                <div className='login-first-div'></div>
                <div className='login-second-div'>
                    <Link onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </Link>
                    <div className='form-class'>
                        <h2>Let's get started</h2>

                        {/* Error message display */}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                        {/* Success message display */}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                        {/* Form */}
                        <Form onSubmit={handleSubmit}>
                            <label className="login__form__label">Email</label>
                            <br />
                            <input
                                type="email"
                                className="login__input"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update state with input value
                                required
                            />
                            <br />

                            <label className="login__form__label">Password</label>
                            <br />
                            <input
                                type="password"
                                className="login__input"
                                id="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update state with input value
                                required
                            />
                            <br />

                            <label className="login__form__label">Confirm Password</label>
                            <br />
                            <input
                                type="password"
                                className="login__input"
                                id="confirmPassword"
                                placeholder="********"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} // Update state with input value
                                required
                            />
                            <br />

                            <Button type="submit" className='sign_btn'>Sign up</Button>
                        </Form>

                        <label>
                            You have an account already? <Link to='/login'>Sign in</Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
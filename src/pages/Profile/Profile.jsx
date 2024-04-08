import { useState } from 'react';
import './profile.css';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

const Profile = () => {
    const [isLoginForm, setIsLoginForm] = useState(false);

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className="container">
            {isLoginForm ? (
                <LoginForm switchForm={switchForm} />
            ) : (
                <RegisterForm switchForm={switchForm} />
            )}
        </div>
    )
}

const LoginForm = ({ switchForm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="formContainer sectionContainer">
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className='loginIconsContainer'>
                    <div className='loginIcons'>
                        <FaFacebookF className='icon loginIcon' />
                        <FaGooglePlusG className='icon loginIcon' />
                        <FaLinkedinIn className='icon loginIcon' />
                    </div>
                    <p>or use your account</p>
                </div>
                <div className='inputContainer'>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className='button'>Sign in</button>
                    <span onClick={switchForm}>Don’t have an account? Register here.</span>
                </div>
            </form>
        </div>
    );
};

const RegisterForm = ({ switchForm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="formContainer sectionContainer">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className='loginIconsContainer'>
                    <div className='loginIcons'>
                        <FaFacebookF className='icon loginIcon' />
                        <FaGooglePlusG className='icon loginIcon' />
                        <FaLinkedinIn className='icon loginIcon' />
                    </div>
                    <p>or use your email for registration</p>
                </div>
                <div className='inputContainer'>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className='button'>Sign Up</button>
                    <span onClick={switchForm}>Already have an account? Login here.</span>
                </div>
            </form>
        </div >
    );
};


export default Profile
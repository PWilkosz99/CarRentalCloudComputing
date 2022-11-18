import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";

import styles from './Login.module.css';


export default function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch {
            alert("ERROR")
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.panel}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.txt}>
                        <input type="email" className="login-form" placeholder=" " required onChange={e => setEmail(e.target.value)} />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className={styles.txt}>
                        <input type="password" className="login-form" required onChange={e => setPassword(e.target.value)} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className={styles.frgtPasswd}>
                        Forgot password?
                    </div>
                    <button className={styles.btnLogin} type="submit">Login</button>
                    <div className={styles.linkSignUp}>
                        You don't have a account? <Link>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
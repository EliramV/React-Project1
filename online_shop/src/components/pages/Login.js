import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Here, you would typically perform authentication checks with a backend
        // For this example, let's assume the username is 'user' and password is 'password'
        if (username === 'user' && password === 'password') {
            setLoggedIn(true);
            onLogin(true);
        }
    };

    return (
        <div>
            {loggedIn ? (
                <p>You are logged in!</p>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Login;

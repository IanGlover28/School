// import { useState } from 'react';

// const Login = ({ onClose }) => {

//         const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');
      
//         const handleLogin = () => {
          
//           onClose();
//         };
      
//         return (
//           <div className="login-modal">
//             <div className="login-form">
//               <h2>Login</h2>
//               <label>Username</label>
//               <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//               <label>Password</label>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//               <button onClick={handleLogin}>Login</button>
//               <button onClick={onClose}>Close</button>
//             </div>
//           </div>
//         );
//     };

//       export default Login;


import React from 'react'

const LoginRegister = () => {
  return (
    <div className='wrapper'>
    <div className='form-box login'>
    <form action=''>
    <h1>Login</h1>
    <div className='input-box'>
    <input type='text' placeholder='Username' required/>
    </div>
    <div className='input-box'>
    <input type='password' placeholder='password' required/>
    </div>
    </form>

    </div>

    </div>
  )
}

export default LoginRegister;
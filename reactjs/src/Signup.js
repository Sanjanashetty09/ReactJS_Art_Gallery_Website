import { useState } from 'react';
import { Link } from 'react-router-dom';
import pimage from './images/potraitimage.jpg'
import './Signup.css'
export default function Signup() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
<Link to='/gallerypage'><button className='button-sign' >Continue</button></Link>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form-wrapper">


{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>
<img src={pimage} className="img-sign"></img>
<div className='content-wrap'>

<div className='form-container-contents'>
<h1 className='content-title'>Sign Up</h1>
<form>
    <div className='form-contents'>
{/* Labels and inputs for form data */}
<div className='form-input'>
<input onChange={handleName} className="input"
value={name} type="text" placeholder='Name'/>
</div>
<div className='form-input'>
<input onChange={handleEmail} className="input"
value={email} type="email" placeholder='Email' />
</div>
<div className='form-input'>
<input onChange={handlePassword} className="input"
value={password} type="password" placeholder='Password'/>
</div>
</div>
<input type='submit' onClick={handleSubmit} value='SignUp' className='btn-sign'/>
</form>
</div>
</div>
</div>
);
}
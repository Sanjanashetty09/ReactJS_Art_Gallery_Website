import './Login.css';
import profile from "./images/sign.jpeg";
import email from "./images/email.jpeg";
import pass from "./images/pass.jpeg";
import bg_pic from './images/background_pic.jpeg'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="main-login">
      <img src={bg_pic} alt='image' className='bg_pic-login'/>
     <div className="sub-main-login">
       <div>
         <div className="imgs-login">
           <div className="container-image-login">
            <img src={profile} alt="profile" className="profile-login"/>
           </div>
         </div>
         <div>
           <h1 className='heading'>Sign in to your account</h1>
           <div>
             <img src={email} alt="email" className="email-login"/>
             <input type="text" placeholder="Enter the username" className="name-login"/>
           </div>
           <div className="second-input-login">
             <img src={pass} alt="pass" className="email-login"/>
             <input type="password" placeholder="Enter password" className="name-login" />
           </div>
          <div className="login-button-login">
          <Link to='/gallerypage'><button className='button-login'>Login</button></Link>
          </div>
            <p className="link-login">
              <a href="#" className='a-login'>Forgot your password?</a><br/>
              <p>No account yet?&nbsp;<Link to="/signup">Sign Up</Link></p>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}

export default Login;
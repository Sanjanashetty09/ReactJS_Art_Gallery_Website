import './LoginUi.css';
import profile from "./images/sign.jpeg";
import email from "./images/email.jpeg";
import pass from "./images/pass.jpeg";
import bg_pic from './images/background_pic.jpeg'

function LoginUi() {
  return (
    <div className="main">
      <img src={bg_pic} alt='image' className='bg_pic'/>
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Sign in to your account</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
            <p className="link">
              <a href="#">Forgot your password?</a><br/>
              <p>No account yet?&nbsp;<a href="#">Sign Up</a></p>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}

export default LoginUi;
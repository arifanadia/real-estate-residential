import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Helmet } from "react-helmet-async";





const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location =useLocation();
    const navigate = useNavigate()
    console.log("login",location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        logIn(email,password)
         .then(result => {
            console.log(result);

            navigate(location?.state ? location.state : "/")
         })
         .catch(error => {
            console.error(error);
         })

     
    }
    return (
        
        <div className=" bg-navyBlue mt-10 max-w-5xl mx-auto rounded-lg py-6 shadow-2xl">
             <Helmet>
                <title>CozyHome | Login</title>
            </Helmet>
            <h2 className="text-center mt-10 text-4xl text-skyBlue font-bold">Please LogIn</h2>

            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            className="input w-full input-bordered relative" required />
                        <span className="absolute right-3 top-4"
                            onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FiEyeOff /> : <FiEye />
                            }
                        </span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                    </label>
                </div>
                <p className="text-center text-white mt-4">Do not have an account ? <Link className="text-skyBlue" to={`/register`}>Register Now </Link> </p>
                <div className="form-control mt-6">
                    <button className="btn bg-skyBlue text-white">Login</button>
                </div>
                <div className="flex items-center justify-center gap-3 mt-4">
                    <hr className="w-32" />
                    <p className="text-white text-xl  text-center">or connect with</p>
                    <hr className="w-32" />
                </div>
            </form>
            <SocialLogin></SocialLogin>
      
        </div>
    );
};

export default Login;
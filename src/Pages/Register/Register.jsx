import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createUser,updateUserProfile} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        setRegisterError('')

        if (password.length < 6) {
            setRegisterError("password Length must be at least 6 character")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("Must have a Lowercase letter in the password")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Must have an Uppercase letter in the password")
            return;
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("User Created Successfully")

                updateUserProfile(name,photo)
                .then(() => console.log("profile updated"))
                .catch()
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }
    return (
        <div className=" bg-navyBlue mt-10 max-w-5xl mx-auto rounded-lg py-6 shadow-2xl">
              <Helmet>
                <title>CozyHome | Register</title>
            </Helmet>
            <h2 className="text-center text-6xl text-skyBlue font-bold">Register</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">photoURl</span>
                    </label>
                    <input type="text" placeholder="photoURL" name="photo" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                <p className="text-center text-white mt-4">Already have an account? <Link className="text-skyBlue" to={`/login`}>LogIn </Link> </p>
                <div className="form-control mt-6">
                    <button className="btn bg-skyBlue text-white">Register </button>
                </div>
            </form>
            {
                registerError && <p className="text-white text-center">{registerError}</p>
            }
        </div>
    );
};

export default Register;
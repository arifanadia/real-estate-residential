import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGithub, FaGoogle} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleLogIn, githubLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSocialLogin = socialProvider => {
        socialProvider()
         .then((result) =>{
            console.log(result);
            navigate(location?.state ? location.state : "/")
         })
    }
    

    return (
        <div className="flex items-center justify-center gap-4">
            <div >
                <button
                    onClick={() => handleSocialLogin(googleLogIn)}
                    className="flex btn text-xl items-center text-center gap-2 text-skyBlue">
                    <FaGoogle></FaGoogle>
                    Login With Google</button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="flex btn text-xl items-center text-center gap-2 ">
                    <FaGithub></FaGithub>
                    Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;
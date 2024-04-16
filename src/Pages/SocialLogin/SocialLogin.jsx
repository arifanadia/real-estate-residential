import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGithub, FaGoogle} from "react-icons/fa";

const SocialLogin = () => {

    const { googleLogIn, githubLogin} = useContext(AuthContext)
    

    return (
        <div className="flex items-center justify-center gap-4">
            <div >
                <button
                    onClick={() => googleLogIn()}
                    className="flex btn text-xl items-center text-center gap-2 text-skyBlue">
                    <FaGoogle></FaGoogle>
                    Login With Google</button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => githubLogin()}
                    className="flex btn text-xl items-center text-center gap-2 ">
                    <FaGithub></FaGithub>
                    Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;
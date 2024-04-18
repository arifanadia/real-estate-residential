import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"


const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
 
 
    const {
        register,
        handleSubmit,
        // watch,
        formState: {errors } } = useForm(
            {
              
                defaultValues: {
                    name : user?.displayName,
                    photo : user?.photoURL
                  

                }
            }
        )
    const formSubmit = (data) => {
        // e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // const name = form.get('name')
        // const photo = form.get('photo');
        // const password = form.get('password');
        // console.log(name, photo, password);

        // setRegisterError('')
        const { name, photo } = data
        console.log(data);




        updateUserProfile(name, photo)
            .then(() =>{
                 console.log("profile updated")

            })
            .catch((error) => {
                console.error("Error updating profile",error);
            })
    }

    return (
        <div className=" bg-navyBlue mt-10 max-w-5xl mx-auto rounded-lg py-6 shadow-2xl">
            <Helmet>
                <title>CozyHome | update-profile</title>
            </Helmet>
            <h2 className="text-center mt-10 text-4xl text-white font-bold">My Profile</h2>

            <form onSubmit={handleSubmit(formSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input {...register("name",{required: {
                        value: true,
                        message:"you must fill the field"
                    }})} type="text" placeholder="Name" name="name"
                        className="input input-bordered"  />
                        <div>
                            {errors.name && <p className="text-red-600 font-bold">{errors.name.message} </p>}
                        </div>


                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">photoURl</span>
                    </label>
                    <input  {...register("photo")} type="text" placeholder="photoURL" name="photo" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <button className="btn bg-skyBlue text-white"> Update </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
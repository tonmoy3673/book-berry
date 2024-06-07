
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthTokenForSingUp } from '../../api/auth';
import { AuthContext } from '../Context/AuthProvider';

const SignUp = () => {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const {createUser,updateUser,setLoading} =useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('')
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || '/';

    const handleSignup=data=>{
        
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            setLoading(true)
            const user=result.user;
            console.log(user);
            
            
            const userInfo={
                displayName:(data.name),
                photoURL:data.photoURL
            }
            updateUser(userInfo)
            .then(()=>{
                
                saveUser(data.name,data.email,data.photoURL);
            })
            .catch(err=>{
                console.log(err)
                
            });
           
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        });   

    }

    const saveUser=(name,email,photoURL)=>{
        const user={name,email,photoURL};
        setAuthTokenForSingUp(user, toast, navigate,from)
        setLoading(false)
        
        }


    

    return (
        <div className='py-6 lg:py-10 mb-4 lg:mb-16 md:flex gap-20  items-center'>
            <div>
                <img src='https://i.ibb.co/9q8ShdJ/signUp.jpg' className='w-[300px] lg:w-[600px] mx-auto md:mx-0'>
                </img>
            </div>
            <div className='w-96 p-10 bg-[#00897B] rounded mx-auto md:mx-0'>
                <h2 className='text-2xl font-bold text-center mb-4 text-white'>Please Sign Up Here!</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs text-black">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Name</span>
                            
                        </label>
                        <input type="text" {...register("name",{
                            required:'Name is required'
                        })} placeholder='Your Name' className="input input-bordered w-full max-w-xs"/>
                        {errors.name && <p role='alert' className='text-red-400'>{errors?.name?.message}</p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Email</span>
                            
                        </label>
                        <input {...register("email",{
                            required:"Email is required"
                        })} placeholder='Your email' type="email"  className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role='alert' className='text-red-600'>{errors.email?.message}</p>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Password</span>
                            
                        </label>
                        <input type="password" 
                        {...register("password",{
                            required:'Password is required',
                            minLength:{value:6,message: "Password must be 6 character long"},
                            pattern:{value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ , message:'Password must have uppercase number special character'}
                        })} placeholder="Type Password"
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role='alert' className='text-red-600'>{errors.password?.message}</p>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Photo URL</span>
                            
                        </label>
                        <input type="text" 
                        {...register("photoURL",{
                            required:'photoURL is required',
                            
                        })} placeholder="Input Photo URL"
                        className="input input-bordered w-full max-w-xs" />
                        {errors.photoURL && <p role='alert' className='text-red-600'>{errors.photoURL?.message}</p>}
                        
                    </div>
                    
                   
                   <div className='py-4'>
                   <input type="submit" className='btn w-full hover:bg-warning bg-[#00897B] text-white' value='Sign Up'/>
                   </div>
                </form>
                <div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </div>
                <p className='py-2 text-white'>Already have an account <Link to='/login' className=' underline text-blue-500'>Please Login</Link></p>
                
            </div>
        </div>
    );
};

export default SignUp;
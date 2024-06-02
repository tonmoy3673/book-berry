

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SignUp = () => {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const {createUser,updateUser} =useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('')
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';

    const handleSignup=data=>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user=result.user;
            console.log(user);
            
            
            const userInfo={
                displayName:(data.name)
            }
            updateUser(userInfo)
            .then(()=>{
                
                saveUser(data.name,data.email);
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
    const saveUser=(name,email)=>{
        const user={name,email};
        console.log(user);
        toast.success('Account Created Successfully!!')
            navigate(from,{replace:true});

        }


    

    return (
        <div className='py-6 lg:py-10 mb-4 lg:mb-16 md:flex gap-20  items-center'>
            <div>
                <img src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1717351978~exp=1717355578~hmac=af05ecc2d4cea4a079511a209593d99e105e453deba2677b02ebe150ffce1aa1&w=740' className='w-[300px] lg:w-[600px] mx-auto md:mx-0'>
                </img>
            </div>
            <div className='w-96 p-10 bg-[#880769] rounded mx-auto md:mx-0'>
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
                    
                   
                   <div className='py-4'>
                   <input type="submit" className='btn w-full hover:bg-warning bg-[#880769] text-white' value='Sign Up'/>
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
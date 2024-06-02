
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Login = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signIn,logInWithGoogle,signInWithGithub}=useContext(AuthContext);
    const [loginError,setLoginError]=useState('');
    const location =useLocation();
    const navigate = useNavigate ();

    const from=location.state?.from?.pathname || '/';

    
    const handleLogin=data=>{ 
            setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);

            toast.success('Login Successfully!!')
            navigate(from,{replace:true});
            

            
           
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
        });

    }
        const googleProvider=new GoogleAuthProvider();
        const handleSignInWithGoogle=()=>{
            logInWithGoogle(googleProvider)
            .then((result)=>{
                const user=result.user;
                console.log(user);
            toast.success('Google Login Successfully!!')
            navigate(from,{replace:true});
                
            })
            .catch(error=>console.error(error))
        }

        const githubProvider=new GithubAuthProvider();
        const handleGitHub=()=>{
            signInWithGithub (githubProvider)
            .then(result=>{
                const user=result.user;
            toast.success('GitHub Login Successfully!!')
            navigate(from,{replace:true});
                console.log(user);
            })
            .catch(error=>{
                console.log(error);
            })
        }

    return (
        <div className='py-6 lg:py-16 mb-5 md:flex gap-20  items-center '>
            <div>
                <img src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1717351978~exp=1717355578~hmac=af05ecc2d4cea4a079511a209593d99e105e453deba2677b02ebe150ffce1aa1&w=740' className='w-[300px] lg:w-[600px] mx-auto md:mx-0'>
                </img>
            </div>

            <div className='w-96 p-10 bg-[#a01b81] rounded text-white mx-auto md:mx-0'>
                <h2 className='text-2xl font-bold text-center mb-5'>Please Login Here!</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    
                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Email</span>
                            
                        </label>
                        <input type="email" {...register("email",{required:"Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs text-black ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Password</span>
                            
                        </label>
                        <input type="password" {...register("password",{required:"Password is required",
                        minLength:{value:2,message:'Password must be 6 character or longer'}
                        
                        })} className="input input-bordered w-full max-w-xs"/>
                        
                        <label className="label">
                        {errors.password && <p role="alert" className='text-red-400'>{errors.password?.message}</p>}
                            <span className="label-text text-white">Forget Password?</span>
                            
                        </label>
                    </div>
                    
                   
                    <input type="submit" className='btn w-full font-semibold hover:bg-warning bg-[#880769] text-white' value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='py-2'>New to foodie? <Link to='/register' className='text-blue-500 underline'>Create an account</Link></p>
                <div className="divider text-xl font-semibold">OR</div>
                <button onClick={handleSignInWithGoogle} className='btn w-full hover:bg-warning bg-[#880769] text-white'><FaGoogle className='text-base'/> Login With Google</button>
                <button  onClick={handleGitHub} className='btn w-full hover:bg-warning bg-[#880769] text-white mt-2 md:mt-4'><FaGithub className='text-lg'/> Login With GitHub</button>
            </div>

        </div>
    );
};

export default Login;
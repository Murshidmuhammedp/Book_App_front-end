import InputField from '../components/InputField.jsx';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const methods = useForm();
    const navigate = useNavigate();

    const { register, formState: { errors } } = methods;
    const onSubmit2 = async (data) => {
        toast.success("Login Successfully");
        navigate('/');
    };

    return (
        <div className='min-h-screen w-full bg-black'>
            <div className="flex flex-col md:flex-row w-full items-center bg-black-800 text-white md:justify-center md:px-16">

                <div className="order-1 flex items-center w-full md:w-1/2 p-2 md:p-8">
                    <div className="flex flex-col gap-5">
                        <blockquote className="text-3xl md:text-5xl text-left">
                            Welcome,<br />
                            Enter Your Details To<br />
                            Stay Logged In
                        </blockquote>
                    </div>
                </div>

                <div className="order-2 flex items-center w-full md:w-2/3 p-4 md:p-8 mt-10 ">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit2)} className='flex flex-col w-full md:w-auto'>
                            <div className="space-y-4">
                                <InputField
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    {...register("email")}
                                />
                                <InputField
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    {...register("Password", {
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                />
                                <div className='w-full flex justify-center items-center'>
                                    <button
                                        type='submit'
                                        className='px-8 py-2 text-black font-bold rounded bg-yellow-600 hover:bg-yellow-700'
                                    >
                                        Log In
                                    </button>
                                </div>
                                <p className="text-center text-gray-500">or</p>
                                <p className="mt-4 text-center text-gray-500">
                                    Don't have an account yet?{' '}
                                    <a href="/signup" className="text-yellow-500 hover:underline">
                                        Register now
                                    </a>
                                </p>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
import { LoginPopUpContext } from '../../context/LoginPopContext';
import { useContext } from 'react';
import Signup from './SignUp';
import LoginPage from './Login';

const LoginPopup = () => {
    const {
        popup,

        handleLoginClose,
        signUpActive,
    } = useContext(LoginPopUpContext);

    return (
        <div>
            {popup && (
                <div className='inset-0 fixed bg-transparent  flex justify-center items-center z-50 max-sm:mr-1 '>
                    <div
                        className='absolute inset-0 w-screen h-screen bg-black/10  z-30'
                        onClick={handleLoginClose}
                    ></div>
                    <div className='z-40'>
                        {signUpActive ? (
                            <Signup />
                        ) : (
                            <LoginPage

                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPopup;

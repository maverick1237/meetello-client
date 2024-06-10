import React, { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import useAuthService from '../service/auth';



const Activation = () => {
    const navigate = useNavigate();
    
    const {token} = useParams();
    const authService = useAuthService();

    useEffect(() => {
        const activateAccount = async () => {
            try {
                const response = await authService.activateAccount(token);
                const userData = response.data;
                
                
                
                // Store the token in local storage
                localStorage.setItem('jwt', token);

                // Dispatch login action
                authService.dispatchLogin(userData);

                // Show alert
                alert('Account activated successfully.');

                // Navigate to dashboard
                navigate('/home');
            } catch (error) {
                console.error('Activation error', error);
                alert('Account activation failed.');
            }
        };

        if (token) {
            activateAccount();
        }
    }, [token, navigate, authService]);

    return (
        <div>
            <h2>Activating your account...</h2>
        </div>
    );
};

export default Activation;

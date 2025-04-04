import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext.tsx';
import { LoginPopUpProvider } from './context/LoginPopContext.tsx';
import { AccountVerifyContextProvider } from './context/AccountVerifyContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AppContextProvider>
            <LoginPopUpProvider>
                <AccountVerifyContextProvider>
                    <App />
                </AccountVerifyContextProvider>
            </LoginPopUpProvider>
        </AppContextProvider>
    </BrowserRouter>
);

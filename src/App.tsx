import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from "./layout/AuthContext";
import IndexPage from './components/landingpage/index.js';
import MainLayout from './layout/MainLayout';
import Contact from './components/contact/Contact';
import SoftwareSolutions from './components/softwareSolutions/SoftwareSolutions.js';
import Careers from './pages/Careers.js';
import AboutUs from './pages/About.js';
import Training from './pages/Training.js';
import Products from './pages/Products.js';
import Staffingsolutions from './pages/Staffingsolutions.js';

const App = () => {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Instantly scrolls to the top
        }, [pathname]); // Runs every time the path changes

        return null;
    };

    return (
        <div className='dark:bg-zinc-900 dark:text-white'>
            <AuthProvider>                
                <Router>
                    <ScrollToTop />

                    {/* This makes it scroll to top automatically */}
                    <Routes>
                        <Route
                            path='/'
                            element={<MainLayout />}
                        >
                            <Route
                                index
                                element={<Navigate to='/index' />}
                            />
                            <Route
                                path='/index'
                                element={<IndexPage />}
                            />
                            <Route
                                path='/contact'
                                element={<Contact />}
                            />
                            <Route
                                path='/software-solutions'
                                element={<SoftwareSolutions />}
                            />
                            <Route
                                path='/about-us'
                                element={<AboutUs />}
                            />
                            <Route
                                path='/careers'
                                element={<Careers />}
                            />
                            <Route
                                path='/training'
                                element={<Training />}
                            />
                            <Route
                                path='/products'
                                element={<Products />}
                            />
                            <Route
                                path='/staffing-solutions'
                                element={<Staffingsolutions />}
                            />
                            <Route
                                path='*'
                                element={<Navigate to='/index' />}
                            />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default App;

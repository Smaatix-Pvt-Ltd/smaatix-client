import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import IndexPage from './components/landingpage/index.js';

import MainLayout from './layout/MainLayout';
import Contact from './components/contact/Contact';
import SoftwareSolutions from './components/softwareSolutions/SoftwareSolutions.js';
import Careers from './pages/Careers.js';

const App = () => {
    return (
        <Router>
            <MainLayout>
                <div className='dark:bg-zinc-800 '>
                    <Routes>
                        <Route
                            path='*'
                            element={<Navigate to='/index' />}
                        />
                        <Route
                            path='*'
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
                            path='/careers'
                            element={<Careers />}
                        />
                        {/* Add the route for the  component */}
                    </Routes>
                </div>
            </MainLayout>
        </Router>
    );
};

export default App;

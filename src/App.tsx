import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import IndexPage from './components/landingpage/index.js';

import MainLayout from './layout/MainLayout';
import Contact from './components/contact/Contact';

const App = () => {
    return (
        <Router>
            <MainLayout>
                <div className='dark:bg-[#212121] '>
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
                        >
                            {' '}
                        </Route>
                        <Route
                            path='/contact'
                            element={<Contact />}
                        />
                        {/* Add the route for the IndexPage component */}
                    </Routes>
                </div>
            </MainLayout>
        </Router>
    );
};

export default App;

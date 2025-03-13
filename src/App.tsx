import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import IndexPage from './components/landingpage/index.js';

import MainLayout from './layout/MainLayout';

const App = () => {
    return (
        <MainLayout>
            <Router>
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
                        />{' '}
                        {/* Add the route for the IndexPage component */}
                    </Routes>
                </div>
            </Router>
        </MainLayout>
    );
};

export default App;

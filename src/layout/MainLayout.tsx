import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ScrollProvider } from '../context/ScrollContext';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <ScrollProvider>
                <Outlet />
            </ScrollProvider>
            <Footer />
        </div>
    );
};

export default MainLayout;

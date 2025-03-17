import Header from '../components/Header/Header';
import { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;

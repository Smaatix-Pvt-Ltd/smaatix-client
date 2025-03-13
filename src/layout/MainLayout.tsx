import Header from '../components/Header/Header';
import { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer
                // colorTheme={colorTheme}
                // setColorTheme={setColorTheme}
            />
        </div>
    );
};

export default MainLayout;

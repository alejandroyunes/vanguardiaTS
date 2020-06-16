import React, { ReactNode } from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


interface LayoutProps {
  children: ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {


  return (

        <div className="login__layout">
        <div>  
        <Header />
          {children}
          <Footer />
        </div>
    </div>

  );
}

export default Layout
import React from 'react';
import NavBar from '../components/NavBar';


const Layout = ({ children }) => (
  <>
    <NavBar />
    <div style={{ padding: '20px' }}>{children}</div>
  </>
);

export default Layout;

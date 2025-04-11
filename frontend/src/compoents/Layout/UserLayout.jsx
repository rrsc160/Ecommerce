import React from 'react';
import Header from '../Common/Header';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default UserLayout;

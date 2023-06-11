import React from 'react';
import MainNavigation from '../../Components/MainNavigation/MainNavigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
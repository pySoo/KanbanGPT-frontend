import { Outlet } from 'react-router-dom';

import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import Header from '@/components/Shared/Header';
import Navbar from '@/components/Shared/Navbar';
import SkeletonBoard from '@/components/Shared/SkeletonBoard';
import ToastContainer from '@/components/Shared/ToastContainer';
import ModalContainer from '@/components/Modal/ModalContainer';
import { useToggle } from '@/hooks/useToggle';

export default function Layout() {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <Header onToggle={toggle} />
      <Navbar isNavOpen={isToggled} onToggle={toggle} />

      <AsyncBoundary suspenseFallback={<SkeletonBoard />}>
        <Outlet />
      </AsyncBoundary>

      <ModalContainer />
      <ToastContainer />
    </div>
  );
}

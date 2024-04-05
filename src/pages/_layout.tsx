import { Outlet } from 'react-router-dom';

import AsyncBoundary from '@/components/common/AsyncBoundary';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import SkeletonBoard from '@/components/common/SkeletonBoard';
import ToastContainer from '@/components/common/ToastContainer';
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

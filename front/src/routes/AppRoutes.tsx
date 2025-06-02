import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home'));

const AppRoutes: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Suspense />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense >
  )
}

export default AppRoutes
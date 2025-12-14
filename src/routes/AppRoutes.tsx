import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';
const HomePage = lazy(() => import('../pages/home/HomePage'));
const ArchivePage = lazy(() => import('../pages/home/ArchivePage'));
const PostersPage = lazy(() => import('../pages/home/PostersPage'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const AboutSectionPage = lazy(() => import('../pages/about/AboutSectionPage'));
const AnnouncementsPage = lazy(() => import('../pages/home/AnnouncementsPage'));

const DepartmentsPage = lazy(
  () => import('../pages/departments/DepartmentsPage')
);

const DepartmentPage = lazy(
  () => import('../pages/departments/DepartmentPage')
);

const MediaPage = lazy(() => import('../pages/MediaPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/posters" element={<PostersPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/general" element={<AboutPage />} />
          <Route path="/about/:slug" element={<AboutSectionPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/:slug" element={<DepartmentPage />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
}

export default AppRoutes;

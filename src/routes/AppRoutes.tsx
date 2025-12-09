import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const ArchivePage = lazy(() => import('../pages/home/ArchivePage'));
const EventsPage = lazy(() => import('../pages/home/EventsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const GeneralInfoPage = lazy(() => import('../pages/GeneralInfoPage'));
const HistoryPage = lazy(() => import('../pages/HistoryPage'));
const FacilitiesPage = lazy(() => import('../pages/FacilitiesPage'));
const OrganizationPage = lazy(() => import('../pages/OrganizationPage'));
const AchievementsPage = lazy(() => import('../pages/AchievementsPage'));
const DepartmentsPage = lazy(() => import('../pages/DepartmentsPage'));
const DepartmentPage = lazy(
  () => import('../pages/departments/DepartmentPage')
);

const MediaPage = lazy(() => import('../pages/MediaPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/events" element={<EventsPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/general-info" element={<GeneralInfoPage />} />
        <Route path="/about/history" element={<HistoryPage />} />
        <Route path="/about/facilities" element={<FacilitiesPage />} />
        <Route path="/about/organization" element={<OrganizationPage />} />
        <Route path="/about/achievements" element={<AchievementsPage />} />

        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:slug" element={<DepartmentPage />} />

        <Route path="/media" element={<MediaPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;

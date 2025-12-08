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
const PianoDepartmentPage = lazy(
  () => import('../pages/departments/PianoDepartmentPage')
);
const FolkInstrumentsDepartmentPage = lazy(
  () => import('../pages/departments/FolkInstrumentsDepartmentPage')
);
const StringsDepartmentPage = lazy(
  () => import('../pages/departments/StringsDepartmentPage')
);
const WindPercussionDepartmentPage = lazy(
  () => import('../pages/departments/WindPercussionDepartmentPage')
);
const TheoryDepartmentPage = lazy(
  () => import('../pages/departments/TheoryDepartmentPage')
);
const VocalChorusDepartmentPage = lazy(
  () => import('../pages/departments/VocalChorusDepartmentPage')
);
const ArtDepartmentPage = lazy(
  () => import('../pages/departments/ArtDepartmentPage')
);
const AestheticDepartmentPage = lazy(
  () => import('../pages/departments/AestheticDepartmentPage')
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
        <Route path="/departments/piano" element={<PianoDepartmentPage />} />
        <Route
          path="/departments/folk"
          element={<FolkInstrumentsDepartmentPage />}
        />
        <Route
          path="/departments/strings"
          element={<StringsDepartmentPage />}
        />
        <Route
          path="/departments/wind-percussion"
          element={<WindPercussionDepartmentPage />}
        />
        <Route path="/departments/theory" element={<TheoryDepartmentPage />} />
        <Route
          path="/departments/vocal-chorus"
          element={<VocalChorusDepartmentPage />}
        />
        <Route path="/departments/art" element={<ArtDepartmentPage />} />
        <Route
          path="/departments/aesthetic"
          element={<AestheticDepartmentPage />}
        />

        <Route path="/media" element={<MediaPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;

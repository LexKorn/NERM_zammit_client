import { ADMIN_ROUTE, MAIN_ROUTE, PROJECT_ROUTE, SERVISES_ROUTE, SYSTEMS_ROUTE, VACANCY_ROUTE, NOTFOUND_ROUTE } from "./utils/consts";
import { AdminPage, MainPage, ProjectsPage, ServisesPage, SystemsPage, VacancyPage, Page404 } from './pages';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: PROJECT_ROUTE,
        Component: ProjectsPage
    },
    {
        path: SERVISES_ROUTE,
        Component: ServisesPage
    },
    {
        path: SYSTEMS_ROUTE,
        Component: SystemsPage
    },
    {
        path: VACANCY_ROUTE,
        Component: VacancyPage
    },
    {
        path: NOTFOUND_ROUTE,
        Component: Page404
    }
];
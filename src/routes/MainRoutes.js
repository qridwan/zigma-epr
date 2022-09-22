import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const PurchaseOrder = Loadable(lazy(() => import('views/purchase-order')));
const Profile = Loadable(lazy(() => import('views/profile')));
const Download = Loadable(lazy(() => import('views/downloads')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const Settings = Loadable(lazy(() => import('views/settings')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'purchase-order',
                    element: <PurchaseOrder />
                }
            ]
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'profile',
                    element: <Profile />
                }
            ]
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'downloads',
                    element: <Download />
                }
            ]
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'settings',
                    element: <Settings />
                }
            ]
        }
    ]
};

export default MainRoutes;

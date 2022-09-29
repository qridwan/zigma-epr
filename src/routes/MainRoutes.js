import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PurchaseLayout from 'layout/MainLayout/Purchase';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const PurchaseOrder = Loadable(lazy(() => import('views/purchase-order/Purchase')));
const OrderStatus = Loadable(lazy(() => import('views/purchase-order/order-states')));
const Profile = Loadable(lazy(() => import('views/profile')));
const Download = Loadable(lazy(() => import('views/downloads')));
const History = Loadable(lazy(() => import('views/downloads/history')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));

const Settings = Loadable(lazy(() => import('views/settings')));

// notification page routing
const Notification = Loadable(lazy(() => import('views/notification')));

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
                    path: '',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'purchase-order',
            element: <PurchaseLayout />,
            children: [
                {
                    path: 'purchase',
                    element: <PurchaseOrder />
                },
                {
                    path: 'order-status',
                    element: <OrderStatus />
                }
            ]
        },
        {
            children: [
                {
                    path: 'profile',
                    element: <Profile />
                }
            ]
        },
        {
            path: '/downloads',
            element: <Download />
        },
        {
            path: 'dashboard/downloads',
            children: [
                {
                    path: 'history',
                    element: <History />
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
        },
        {
            path: '/user/notification',
            element: <Notification />
        }
    ]
};

export default MainRoutes;

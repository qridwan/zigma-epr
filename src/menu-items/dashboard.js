// assets
import { IconLayoutDashboard, IconBuildingStore, IconUser, IconArrowBigDownLines, IconSettings } from '@tabler/icons';

// constant
const icons = { IconLayoutDashboard, IconBuildingStore, IconUser, IconArrowBigDownLines, IconSettings };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'purchaseOrder',
            title: 'Purchase Order',
            type: 'item',
            url: '/purchase-order/purchase',
            icon: icons.IconBuildingStore,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/profile/',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'download',
            title: 'Download',
            type: 'item',
            url: '/downloads/',
            icon: icons.IconArrowBigDownLines,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings/',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

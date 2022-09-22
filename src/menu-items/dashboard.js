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
            url: '/dashboard/default',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'purchaseOrder',
            title: 'Purchase Order',
            type: 'item',
            url: '/dashboard/purchase-order',
            icon: icons.IconBuildingStore,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/dashboard/profile',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'download',
            title: 'Download',
            type: 'item',
            url: '/dashboard/downloads',
            icon: icons.IconArrowBigDownLines,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/dashboard/settings',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

// assets
import { IconHelp, IconLogout } from '@tabler/icons';

// constant
const icons = {
    IconHelp,
    IconLogout
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    // title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'help',
            title: 'Help',
            type: 'item',
            url: '/',
            icon: icons.IconHelp,
            breadcrumbs: false
        },
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/',
            icon: icons.IconLogout,
            breadcrumbs: false
        }
    ]
};

export default utilities;

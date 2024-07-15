import { MdOutlineDashboard } from 'react-icons/md';

export interface Item {
  icon?: JSX.Element | string;
  activeIcon?: JSX.Element | string;
  label: string;
  link: string;
  defLink?: string;
}

export interface Menu extends Item {
  children: Item[];
}

export const menuList: Menu[] = [
  {
    icon: <MdOutlineDashboard />,
    activeIcon: (
      <MdOutlineDashboard />

    ),
    label: 'Dashboard',
    link: '/dashboard',
    defLink: '/dashboard',
    children: [],
  },
  {
   icon: <MdOutlineDashboard />,
    activeIcon: (
      <MdOutlineDashboard />

    ),
    label: 'Main Menu',
    link: '/sub-link',
    defLink: '/sub-link',
    children: [
      {
        icon: <MdOutlineDashboard />,
        label: 'Sub Menu1',
        link: '/sub-link',
      },
      {
          label: 'Sub Menu',
        link: '/sub-link-2',
      },
    ],
  },

];



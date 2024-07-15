import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { menuList } from './menuData';
import { Collapse } from '@mui/material';
import { cn } from '@/utils/cn';
import { usePathname, useRouter } from 'next/navigation';
import Text from '../ui/typo';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import AppBar from './AppBar';
import { FiChevronDown, FiChevronUp, FiLogOut } from 'react-icons/fi';
import { useSessionLogout } from '@/lib/session';

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.projectTheme.drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: theme.projectTheme.drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  height: '100vh',
  paper: {
    background: 'red',
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Drawer: React.FC<React.PropsWithChildren> = ({ children }) => {
      const { trigger: logoutTrigger } = useSessionLogout();

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = React.useState<boolean>(true);
  const router =useRouter();
  const [openItems, setOpenItems] = React.useState<number[]>([]);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (index: number) => {
    const isChild = menuList.some(
      (menu) => menu.children && menu.children.some((child) => child.link === menuList[index].link)
    );

    if (isChild) {
      setOpenItems((prevOpenItems) => {
        const currentIndex = prevOpenItems.indexOf(index);
        if (currentIndex !== -1) {
          // If the child is already open, close it
          return [
            ...prevOpenItems.slice(0, currentIndex),
            ...prevOpenItems.slice(currentIndex + 1),
          ];
        } else {
          // If the child is not open, close other children and open this one
          const parentIndex = menuList.findIndex(
            (menu) =>
              menu.children && menu.children.some((child) => child.link === menuList[index].link)
          );
          return [parentIndex, index];
        }
      });
    } else {
      setOpenItems((prevOpenItems) => (prevOpenItems.includes(index) ? [] : [index]));
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerStyled variant="permanent" open={open}>
        <Box
          className="bg-white"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pl: 2.5,
          }}
        >
          <Box className="flex gap-x-2 items-center">
            
            <Text className="text-sm text-primary font-bold">{theme.projectTheme.name}</Text>
          </Box>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
        </Box>
        {/* <Divider /> */}
        <List className="bg-white">
          {menuList.map((menu, key) => (
            <div key={key}>
              {open && (key === 8 || key === 9) && (
                <p className="text-gray_500 font-bold text-xs px-3 mt-6 pb-3">
                  {key === 8 ? 'Communications' : key === 9 ? 'Setting' : ''}
                </p>
              )}
              <ListItem key={key} disablePadding sx={{ display: 'block' }}>
                <Link href={`/${currentLocale}${menu.link}`}>
                  <ListItemButton
                    selected={
                      `/${currentLocale}${menu.link}` === pathname || menu.link === pathname
                    }
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                    className={cn(
                      '',
                      (pathname === `/${currentLocale}${menu.link}` ||
                        pathname === `/${currentLocale}${menu.defLink}` ||
                        pathname === menu.link ||
                        pathname === menu.defLink ||
                        openItems.includes(key)) &&
                        '!bg-blue_50 text-gray_700 '
                      // "!bg-primary !hover:bg-secondary text-white font-semibold !border-r-orange-700 !rounded-lg sm:m-[5px]"
                    )}
                    onClick={() => handleClick(key)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? '16px' : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      className="!text-sm"
                      style={{
                        fontSize: '1px',
                      }}
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      <span className="text-xs font-semibold">{menu.label}</span>
                    </ListItemText>
                    {open && menu?.children?.length > 0 && (
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                        }}
                      >
                        {openItems.includes(key) ? (
                          <FiChevronUp className="w-6 h-6" />
                        ) : (
                          <FiChevronDown className="w-6 h-6" />
                        )}
                      </ListItemIcon>
                    )}
                  </ListItemButton>
                </Link>
                {open && menu?.children?.length > 0 && (
                  <Collapse in={openItems.includes(key)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {menu?.children?.map((child, i) => (
                        <Link key={i} href={child.link}>
                          <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                              sx={{ ml: !open ? 8 : 0, my: 0.5, pl: !open ? 0 : 7 }}
                              selected={
                                `${currentLocale}${child.link}` === pathname ||
                                child.link === pathname
                              }
                              className={cn(
                                'flex justify-start items-center align-middle hover:bg-secondary rounded-lg',
                                (`${currentLocale}${child.link}` === pathname ||
                                  child.link === pathname) &&
                                  '!bg-blue_50 text-gray_700 '
                              )}
                            >
                              {/* <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: 1
                              }}
                            >
                              {child.icon}
                            </ListItemIcon> */}
                              <ListItemText>
                                <span className="text-xs font-semibold">{child.label}</span>
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </Collapse>
                )}
              </ListItem>
            </div>
          ))}
        </List>

          <Box  onClick={()=>{
                  React.startTransition(() => {
                  logoutTrigger().then(() => {
                    router.push(`/${currentLocale}/login`);
                    router.refresh();
                  });
                });
            }} className="cursor-pointer flex justify-center items-center w-full mt-36 gap-3">
            <Text className='text'>

Demo
            
            </Text>
                 <FiLogOut  className=' size-5'/>
           
         
        </Box>


      </DrawerStyled>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box component="div" className=" py-20">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;

'use client';
import {
  IconButton,
  Toolbar,
  styled,
  Box,
  Menu,
  DialogTitle,

  DialogActions,
} from '@mui/material';
import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '../ui/dialog';
import MButton from '../ui/muibutton';

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<Omit<AppBarProps, 'handleDrawerOpen'>>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: theme.projectTheme.drawerWidth,
    width: `calc(100% - ${theme.projectTheme.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar: React.FC<AppBarProps> = ({ open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const isMenuOpen = Boolean(anchorEl);


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {};

 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      keepMounted
    >
    
    </Menu>
  );

  return (
    <>
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon className="!text-gray_700" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          
           
          </Box>
        </Toolbar>
      </AppBarStyled>
      {renderMenu}
      <Dialog open={dialogOpen} setOpen={setDialogOpen}>
        <DialogTitle align="center">Are you sure?</DialogTitle>
        <DialogActions
          sx={{
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <MButton color="error" onClick={() => setDialogOpen(false)}>
            Cancel
          </MButton>
          <MButton onClick={handleLogout}>Logout</MButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppBar;

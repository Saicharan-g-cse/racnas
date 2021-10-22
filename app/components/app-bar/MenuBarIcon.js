import React from 'react';
import { MenuRounded as MenuIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { navBarRefs } from '../nav-bar/NavBar';

const jss = makeStyles(function (theme) {
   return {
      menuIconContainer: {
         [theme.breakpoints.up('sm')]: {
            marginRight: '20px'
         }
      }
   };
});

function MenuBarIcon() {
   const styles = jss();
   return (
      <div className={styles.menuIconContainer}>
         <IconButton
            onClick={function () {
               navBarRefs.handleNavBarState();
            }}
         >
            <MenuIcon />
         </IconButton>
      </div>
   );
}

export default MenuBarIcon;

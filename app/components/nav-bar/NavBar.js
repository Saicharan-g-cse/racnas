import { grey } from '@mui/material/colors';
import React from 'react';
import {
   Divider,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemIcon,
   ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
   AccountCircle as AccountCircleIcon,
   ChevronLeftRounded as ArrowLeftIcon,
   Code as CodeIcon,
   Grade as GradeIcon,
   Home as HomeIcon,
   Info as InfoIcon,
   Error as NotFoundIcon
} from '@mui/icons-material';
import { appRefs } from '../../../pages/_app';

const jss = makeStyles(function (theme) {
   return {
      root: {
         width: '230px',
         height: '100vh',
         padding: '15px',
         backgroundColor: appRefs.getAppTheme() && grey[900]
      },
      navListItem: {
         margin: '8px 0 !important',
         padding: '5px 15px !important',
         borderRadius: '5px !important'
      },
      closeIconContainer: {
         textAlign: 'right'
      }
   };
});

export let navBarRefs;
let navPreviousActiveItemIndex = 0;

function CloseMenuIcon() {
   return (
      <IconButton
         onClick={function () {
            navBarRefs.handleNavBarState();
         }}
      >
         <ArrowLeftIcon />
      </IconButton>
   );
}

function NavBar() {
   const styles = jss();
   const [openNavBar, setNaveBarState] = React.useState(false);
   const [navListItems, setNavListItemsState] = React.useState([
      {
         text: 'Home',
         icon: <HomeIcon />,
         active: true
      },
      {
         text: 'Services',
         icon: <CodeIcon />,
         active: false
      },
      {
         text: 'About us',
         icon: <InfoIcon />,
         active: false
      },
      {
         text: 'Contact us',
         icon: <AccountCircleIcon />,
         active: false
      },
      {
         text: 'Rate us',
         icon: <GradeIcon />,
         active: false
      },
      {
         text: '404',
         icon: <NotFoundIcon />,
         active: false
      }
   ]);

   function handleNavBarState() {
      setNaveBarState(!openNavBar);
   }

   function closeNavBar() {
      setNaveBarState(false);
   }

   function handleListItemClick(index) {
      const newDrawerListItems = [...navListItems];
      newDrawerListItems[navPreviousActiveItemIndex].active = false;
      newDrawerListItems[index].active = true;
      setNavListItemsState(newDrawerListItems);
      navPreviousActiveItemIndex = index;
   }

   navBarRefs = {
      handleNavBarState
   };
   return (
      <Drawer open={openNavBar} variant={'temporary'} onClose={closeNavBar}>
         <div className={styles.root}>
            <div
               className={
                  'mb-2 d-flex align-items-center justify-space-between'
               }
            >
               <div className={`d-flex align-items-center`}>
                  <h3>Racnas</h3>
               </div>
               <CloseMenuIcon />
            </div>
            <Divider />
            <List>
               {navListItems.map(function (element, index) {
                  return (
                     <ListItem
                        button
                        key={index}
                        className={styles.navListItem}
                        selected={element.active}
                        onClick={function () {
                           handleListItemClick(index);
                        }}
                     >
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText primary={element.text} />
                     </ListItem>
                  );
               })}
            </List>
         </div>
      </Drawer>
   );
}

export default NavBar;

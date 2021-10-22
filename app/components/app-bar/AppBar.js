import { grey } from '@mui/material/colors';
import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { appRefs } from '../../../pages/_app';
import LangMenu from './LangMenu';
import MenuBarIcon from './MenuBarIcon';
import ThemeSwitch from './ThemeSwitch';

const jss = makeStyles(function (theme) {
   return {
      root: {
         width: 'calc(100% - 10px)',
         position: 'fixed',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: '15px 40px 15px 30px',
         zIndex: '10',
         backgroundColor: appRefs.getAppTheme() ? grey[900] : 'white',
         [theme.breakpoints.down('sm')]: {
            padding: '15px'
         }
      },
      logoContainer: {
         [theme.breakpoints.down('sm')]: {
            display: 'none'
         }
      },
      mobileTitle: {
         [theme.breakpoints.down('sm')]: {
            display: 'none'
         }
      },
      logoName: {
         marginRight: '30px'
      },
      contactUsButton: {
         marginLeft: '10px',
         [theme.breakpoints.down('sm')]: {
            display: 'none'
         }
      }
   };
});

function ContactUsButton({ contactUsButton }) {
   return (
      <div className={contactUsButton}>
         <Button variant={'contained'} className={'text-white'}>
            Contact us
         </Button>
      </div>
   );
}

function changeTheme() {
   appRefs.setAppTheme(!appRefs.getAppTheme());
}

function AppBar() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <div className={`d-flex align-items-center`}>
            <MenuBarIcon />
            <div
               className={`d-flex align-items-center ${styles.logoContainer}`}
            >
               <h2>Racnas</h2>
            </div>
         </div>
         <div className={`d-flex align-items-center`}>
            <div className={'mr-2'}>
               <ThemeSwitch
                  defaultChecked={appRefs.getAppTheme()}
                  onClick={changeTheme}
               />
            </div>
            <LangMenu />
            <ContactUsButton contactUsButton={styles.contactUsButton} />
         </div>
      </div>
   );
}

export default AppBar;

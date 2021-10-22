import React from 'react';
import AppBar from './app-bar/AppBar';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import { appRefs } from '../../pages/_app';
import ContactUs from './contact-us/ContactUs';
import Footer from './footer/Footer';
import PageIntroDetails from './page-intro-details/PageIntroDetails';
import NavBar from './nav-bar/NavBar';
import PageIntro from './page-intro/PageIntro';
import Services from './services/Services';

const jss = makeStyles(function () {
   return {
      root: {
         backgroundColor: appRefs.getAppTheme() && grey[900],
         height: '100vh',
         overflowY: 'scroll',
         '& p, small': {
            color: appRefs.getAppTheme()
               ? `${grey[500]} !important`
               : `${grey[700]} !important`
         },
         '& p': {
            fontSize: '15px !important'
         },
         '& h1, h2, h3, h4': {
            color: !appRefs.getAppTheme() && `${grey[800]}`
         }
      }
   };
});

function Main() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <AppBar />
         <NavBar />
         <PageIntro />
         <PageIntroDetails />
         <Services />
         <ContactUs />
         <Footer />
      </div>
   );
}

export default Main;

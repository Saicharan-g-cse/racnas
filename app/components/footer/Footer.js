import React from 'react';
import GoToTopButton from './GoToTopButton';
import { makeStyles } from '@mui/styles';

const jss = makeStyles(function (theme) {
   return {
      root: {
         padding: '30px 40px 30px 40px',
         [theme.breakpoints.down('sm')]: {
            padding: '30px 30px 20px 30px'
         }
      }
   };
});

function Footer() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <div className={'text-center'}>
            <b>
               <p>&copy;&nbsp;Racnas. 2021, All rights reserved</p>
            </b>
            <br />
            <small>
               When you visit or interact with our sites, services or tools, we
               or our authorised service providers may use cookies for storing
               information to help provide you with a better, faster and safer
               experience and for marketing purposes.
            </small>
         </div>
         <GoToTopButton />
      </div>
   );
}

export default Footer;

import { Button, Link } from '@mui/material';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { appRefs } from '../../../pages/_app';

const jss = makeStyles(function (theme) {
   return {
      root: {
         width: '100%',
         height: '100vh',
         backgroundColor: appRefs.getAppTheme() && grey[900],
         '& div, img': {
            marginBottom: '30px'
         }
      },
      notFoundPic: {
         width: '30%',
         [theme.breakpoints.down('sm')]: {
            width: '70%'
         }
      }
   };
});

function NotFound() {
   const styles = jss();
   return (
      <div
         className={`${styles.root} d-flex flex-column justify-content-center align-items-center`}
      >
         <img
            className={styles.notFoundPic}
            src={'/static/404.svg'}
            alt={'pic'}
         />
         <div>
            <h3>Resource not found</h3>
         </div>
         <div>
            <Link href={'/'}>
               <Button variant={'outlined'} size={'large'}>
                  Goto home
               </Button>
            </Link>
         </div>
      </div>
   );
}

export default NotFound;

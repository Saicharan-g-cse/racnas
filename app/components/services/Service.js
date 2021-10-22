import { makeStyles } from '@mui/styles';
import React from 'react';

const jss = makeStyles(function (theme) {
   return {
      root: {
         marginTop: '50px',
         [theme.breakpoints.down('sm')]: {
            marginTop: '30px'
         }
      },
      serviceDetailContainer: {
         [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
         },
         [theme.breakpoints.up('sm')]: {
            width: '60%',
            paddingRight: '15px'
         },
         '& *': {
            marginBottom: '15px'
         }
      },
      servicePicContainer: {
         width: '50%',
         textAlign: 'right',
         [theme.breakpoints.down('sm')]: {
            display: 'none'
         }
      },
      servicePic: {
         width: '80%'
      }
   };
});

function Service({
   setTopMargin,
   serviceTitle,
   serviceDescription,
   servicePic,
   serviceContainerStyles,
   servicePicStyles
}) {
   const styles = jss();
   return (
      <div className={`d-flex ${setTopMargin && styles.root}`}>
         <div
            className={`${styles.serviceDetailContainer} ${serviceContainerStyles}`}
         >
            <h1>{serviceTitle}</h1>
            <p>{serviceDescription}</p>
         </div>
         <div className={`${styles.servicePicContainer} ${servicePicStyles}`}>
            <img className={styles.servicePic} src={servicePic} alt={'pic'} />
         </div>
      </div>
   );
}

export default Service;

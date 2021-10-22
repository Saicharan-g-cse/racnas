import React from 'react';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import IntroButtons from './IntroButtons';

const jss = makeStyles(function (theme) {
   return {
      root: {
         width: '100%',
         display: 'flex',
         padding: '20vh 40px 30px 40px',
         [theme.breakpoints.down('sm')]: {
            paddingTop: '75px',
            paddingLeft: '40px',
            paddingRight: '40px',
            textAlign: 'center'
         },
         [theme.breakpoints.up('sm')]: {
            alignItems: 'center',
            justifyContent: 'space-between'
         }
      },
      introTitleContainer: {
         [theme.breakpoints.up('sm')]: {
            paddingRight: '35px'
         }
      },
      introTitle: {
         fontSize: '65px',
         color: '#00B0FF !important',
         [theme.breakpoints.down('sm')]: {
            fontSize: '50px'
         }
      },
      introImageContainer: {
         [theme.breakpoints.down('sm')]: {
            display: 'none'
         }
      },
      introImage: {
         width: '500px',
         height: '60vh'
      },
      getStartedButtonContainer: {
         marginTop: '25px'
      }
   };
});

function PageIntro() {
   const styles = jss();
   return (
      <div className={`${styles.root}`}>
         <div className={styles.introTitleContainer}>
            <h1 className={styles.introTitle}>Racnas Infosec</h1>
            <p>
               We shall make your product look modern and professional while
               saving your precious time.
            </p>
            <div className={styles.getStartedButtonContainer}>
               <IntroButtons />
            </div>
         </div>
         <div className={styles.introImageContainer}>
            <img
               src={'/static/intro-1.svg'}
               className={styles.introImage}
               alt={'bg'}
            />
         </div>
      </div>
   );
}

export default PageIntro;

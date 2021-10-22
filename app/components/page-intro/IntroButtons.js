import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const jss = makeStyles((theme) => ({
   root: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
         justifyContent: 'center',
         alignItems: 'center'
      }
   }
}));

function IntroButtons() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <div className={'mr-2'}>
            <Button
               className={'text-white'}
               variant={'contained'}
               size={'large'}
            >
               Get Started
            </Button>
         </div>
         <div>
            <Button variant={'outlined'} size={'large'}>
               View demos
            </Button>
         </div>
      </div>
   );
}

export default IntroButtons;

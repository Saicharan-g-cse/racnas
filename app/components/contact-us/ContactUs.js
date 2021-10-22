import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import RacansDetails from './RacansDetails';
import UserDetails from './UserDetails';

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

function ContactUs() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <div className={`mb-2 text-center`}>
            <h1 className={'mb-2'}>Here you can contact us</h1>
            <p>We'd love to talk about how we can help you.</p>
         </div>
         <RacansDetails />
         <div className={'mt-3'}>
            <p>If you want to send message</p>
            <UserDetails />
         </div>
         <div className={`mt-3 text-center`}>
            <Button variant={'contained'} className={'text-white'}>
               Send message
            </Button>
         </div>
      </div>
   );
}

export default ContactUs;

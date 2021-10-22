import React from 'react';
import { Button } from '@mui/material';

function IntroButtons() {
   return (
      <div className={'d-flex justify-content-center'}>
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

import { KeyboardArrowUpRounded as ArrowUp } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const jss = makeStyles({
   root: {
      position: 'fixed',
      right: '11px',
      bottom: '10px'
   }
});

function GoToTopButton() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <Fab color={'primary'} size={'small'}>
            <ArrowUp style={{ fill: 'white' }} />
         </Fab>
      </div>
   );
}

export default GoToTopButton;

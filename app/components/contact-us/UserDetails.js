import { Grid, TextField, Box } from '@mui/material';
import React from 'react';

function UserDetails() {
   return (
      <Box className={'mt-3'} sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <TextField
                  fullWidth
                  variant={'outlined'}
                  label={'Your name'}
                  size={'medium'}
               />
            </Grid>
            <Grid item xs={12} md={6}>
               <TextField
                  fullWidth
                  variant={'outlined'}
                  label={'Your phone number'}
                  size={'medium'}
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  fullWidth
                  variant={'outlined'}
                  label={'Your email'}
                  size={'medium'}
               />
            </Grid>
            <Grid item xs={12}>
               <TextField
                  fullWidth
                  multiline
                  variant={'outlined'}
                  label={'Your message'}
                  size={'medium'}
                  rows={5}
               />
            </Grid>
         </Grid>
      </Box>
   );
}

export default UserDetails;

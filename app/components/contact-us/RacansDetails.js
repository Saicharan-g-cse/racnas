import {
   LocationOnRounded as LocationIcon,
   PhoneRounded as PhoneIcon,
   EmailRounded as EmailIcon
} from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React from 'react';
import RCard from '../../utils/RCard';

const jss = makeStyles(function (theme) {
   return {
      root: {},
      detailsIcon: {
         fill: theme.palette.success.main
      },
      detailsTitle: {
         color: grey[600]
      }
   };
});

const details = [
   {
      icon: <LocationIcon style={{ fill: '#00B0FF' }} />,
      title: 'ADDRESS',
      description:
         'Sy No. 113, Hosur Rd, Krishna Reddy Industrial Area, 7th Mile, Bengaluru.'
   },
   {
      icon: <PhoneIcon style={{ fill: '#00B0FF' }} />,
      title: 'CONTACT',
      description: 'We have 24/7 support. Phone number: +918885594123'
   },
   {
      icon: <EmailIcon style={{ fill: '#00B0FF' }} />,
      title: 'EMAIL',
      description: 'racnasinfosec@gmail.com'
   }
];

function RacansDetails() {
   const styles = jss();
   return (
      <div className={styles.root}>
         <Box>
            <Grid container spacing={2}>
               {details.map(function (element, index) {
                  return (
                     <Grid item xs={12} md={4} key={index}>
                        <RCard
                           cardIcon={element.icon}
                           cardTitle={element.title}
                           cardDescription={element.description}
                           cardHeaderStyles={'align-items-center'}
                           cardTitleStyles={styles.detailsTitle}
                           cardDescriptionStyles={'text-center'}
                        />
                     </Grid>
                  );
               })}
            </Grid>
         </Box>
      </div>
   );
}

export default RacansDetails;

import { Grid, Box } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import {
   Code as CodeIcon,
   Web as WebIcon,
   Description as DescriptionIcon
} from '@mui/icons-material';
import RCard from '../../utils/RCard';

const jss = makeStyles(function (theme) {
   return {
      root: {
         padding: '25px 40px 30px 40px',
         [theme.breakpoints.down('sm')]: {
            padding: '10px 30px 20px 30px'
         }
      },
      headingContainer: {
         marginBottom: '15px',
         [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            textAlign: 'left'
         }
      },
      title: {
         marginBottom: '15px'
      }
   };
});

const introDetailIconStyle = { fill: 'white' };
const introDetails = [
   {
      icon: <CodeIcon style={introDetailIconStyle} />,
      title: 'Built for developers',
      description:
         'Racnas is built to make your life easier. Variables, build tooling, documentation, and reusable components.'
   },
   {
      icon: <WebIcon style={introDetailIconStyle} />,
      title: 'Designed to be modern',
      description:
         'Designed with the latest design trends in mind. Racnas feels modern, minimal, and beautiful..'
   },
   {
      icon: <DescriptionIcon style={introDetailIconStyle} />,
      title: 'Documentation for everything',
      description:
         "We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
   }
];

function PageIntroDetails() {
   const styles = jss();
   return (
      <div id={'INTRO_DETAILS'} className={styles.root}>
         <div className={`${styles.headingContainer} text-center`}>
            <h1 className={styles.title}>Get accessible web apps with speed</h1>
            <p>
               Builds a beautiful, modern websites with flexible and fully
               customizable
            </p>
         </div>
         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
               {introDetails.map(function (element, index) {
                  return (
                     <Grid item xs={12} sm={4} key={index}>
                        <RCard
                           cardIcon={element.icon}
                           cardTitle={element.title}
                           cardDescription={element.description}
                           cardHeaderStyles={'align-items-center'}
                           cardDescriptionStyles={'text-center'}
                           roundedIcon
                        />
                     </Grid>
                  );
               })}
            </Grid>
         </Box>
      </div>
   );
}

export default PageIntroDetails;

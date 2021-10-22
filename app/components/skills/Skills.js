import {
   LinearProgress,
   linearProgressClasses,
   Box,
   Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const jss = makeStyles(function (theme) {
   return {
      root: {
         padding: '30px 40px 30px 40px',
         [theme.breakpoints.down('sm')]: {
            padding: '10px 40px 20px 30px'
         }
      },
      progressBar: {
         height: '13px !important',
         borderRadius: '5px',
         [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
               theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
         },
         [`& .${linearProgressClasses.bar}`]: {
            borderRadius: '5px'
         }
      }
   };
});

const skills = [
   {
      text: 'Web app development',
      value: 100,
      color: ''
   },
   {
      text: 'Mobile app development',
      value: 95,
      color: ''
   },
   {
      text: 'SEO',
      value: 90,
      color: ''
   }
];

function LinearProgressWithLabel({ maxValue, className }) {
   const [progress, setProgress] = React.useState(0);

   React.useEffect(() => {
      const timer = setInterval(() => {
         setProgress((prevProgress) => {
            if (prevProgress >= maxValue - 5) {
               clearInterval(timer);
            }
            return prevProgress + 5;
         });
      }, 200);
   }, []);

   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress className={className} variant='determinate' />
         </Box>
         <Box sx={{ minWidth: 35 }}>
            <Typography variant='body2' color='text.secondary'>{`${Math.round(
               progress
            )}%`}</Typography>
         </Box>
      </Box>
   );
}

function Skills() {
   const styles = jss();
   return (
      <div className={styles.root}>
         {skills.map(function (element, index) {
            return (
               <Box key={index} sx={{ width: '100%' }}>
                  <LinearProgressWithLabel
                     className={styles.progressBar}
                     maxValue={element.value}
                  />
               </Box>
            );
         })}
      </div>
   );
}

export default Skills;

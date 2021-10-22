import {
   PaletteRounded as ThemeIcon,
   LightMode as LightIcon,
   ViewCompactRounded as ComposeIcon,
   FlashOnRounded as FlashOnIcon,
   LoopRounded as LoopIcon,
   SupportAgentRounded as SupportAgentIcon
} from '@mui/icons-material';
import { Grid, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { appRefs } from '../../../pages/_app';
import isInViewport from '../../helpers/is-in-viewport';
import RCard from '../../utils/RCard';

const jss = makeStyles(function (theme) {
   return {
      root: {
         marginTop: '40px',
         [theme.breakpoints.down('sm')]: {
            marginTop: '20px'
         }
      },
      serviceCardContainer: {
         height: '100%',
         backgroundColor: appRefs.getAppTheme() && grey[800],
         boxShadow: !appRefs.getAppTheme() && '0 1px 8px 0 rgba(0, 0, 0, 0.06)',
         padding: '5px 35px 15px 35px',
         borderRadius: '20px'
      }
   };
});

const cardAnimationStyles = {
   transitionDuration: '1s',
   position: 'relative',
   top: '1000px'
};
const serviceIconStyle = { fill: 'white' };
const servicesList = [
   {
      icon: <ThemeIcon style={serviceIconStyle} />,
      title: 'Themeable',
      description:
         'Customize any part of our components to match your design needs.'
   },
   {
      icon: <LightIcon style={serviceIconStyle} />,
      title: 'Light and Dark UI',
      description:
         'Optimized for multiple color modes. Use light or dark, your choice.'
   },
   {
      icon: <ComposeIcon style={serviceIconStyle} />,
      title: 'Composable',
      description:
         'Designed with composition in mind. Compose new components with ease.'
   },
   {
      icon: <FlashOnIcon style={serviceIconStyle} />,
      title: 'Developer Experience',
      description:
         'Guaranteed to boost your productivity when building your app or website.'
   },
   {
      icon: <LoopIcon style={serviceIconStyle} />,
      title: 'Continuous Updates',
      description:
         'We continually deploy improvements and new updates to Webbee.'
   },
   {
      icon: <SupportAgentIcon style={serviceIconStyle} />,
      title: 'Free support',
      description:
         '3 months of free technical support to help you build your website faster.'
   }
];
let serviceCardsId;

function scrollSpy() {
   if (isInViewport(serviceCardsId)) {
      window.removeEventListener('scroll', scrollSpy, true);
      document.getElementById('id-service-cards').style.top = '0';
   }
}

function ServiceCards() {
   const styles = jss();

   React.useEffect(function () {
      serviceCardsId = document.getElementById('id-services');
      window.addEventListener('scroll', scrollSpy, true);
   }, []);

   return (
      <div id={'id-services'} className={styles.root}>
         <Box sx={{ flexGrow: 1 }}>
            <Grid
               id={'id-service-cards'}
               container
               spacing={3}
               style={cardAnimationStyles}
            >
               {servicesList.map(function (element, index) {
                  return (
                     <Grid item xs={12} sm={4} key={index}>
                        <RCard
                           cardIcon={element.icon}
                           cardTitle={element.title}
                           cardDescription={element.description}
                           cardStyles={styles.serviceCardContainer}
                           cardHeaderStyles={'align-items-start'}
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

export default ServiceCards;

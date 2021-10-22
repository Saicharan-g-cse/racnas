import { makeStyles } from '@mui/styles';
import React from 'react';
import Service from './Service';
import ServiceCards from './ServiceCards';

const jss = makeStyles(function (theme) {
   return {
      root: {
         padding: '30px 40px 30px 40px',
         [theme.breakpoints.down('sm')]: {
            padding: '10px 40px 20px 30px'
         }
      },
      serviceDetailContainer2: {
         order: '1'
      },
      servicePic2: {
         order: '0',
         textAlign: 'left !important'
      }
   };
});

function Services() {
   const styles = jss();
   return (
      <div className={`${styles.root}`}>
         <Service
            serviceTitle={
               'The powerful and flexible apps for all kinds of businesses'
            }
            serviceDescription={
               'Whether you are creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase racnas helps you to create the best possible product for your users with best User Experience.'
            }
            servicePic={'/static/theming.svg'}
         />
         <Service
            serviceTitle={'Responsive for all screen size devices'}
            serviceDescription={
               'The growth of mobile and tablet devices is not slowing down and you just don’t know what your next visitor will be using. We do make apps with addon feature that is responsiveness, so app looks great and work well on any platform and any device.'
            }
            servicePic={'/static/responsive.svg'}
            serviceContainerStyles={styles.serviceDetailContainer2}
            servicePicStyles={styles.servicePic2}
            setTopMargin
         />
         <ServiceCards />
      </div>
   );
}

export default Services;

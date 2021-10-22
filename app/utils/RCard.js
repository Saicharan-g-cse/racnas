import { makeStyles } from '@mui/styles';
import React from 'react';

const jss = makeStyles(function (theme) {
   return {
      root: {
         '& div': {
            margin: '15px 0'
         }
      },
      cardIconContainer: {
         padding: '15px',
         borderRadius: '50%',
         backgroundColor: theme.palette.primary.light
      }
   };
});

function RCard({
   cardIcon,
   cardTitle,
   cardDescription,
   cardStyles,
   cardHeaderStyles,
   cardTitleStyles,
   cardDescriptionStyles,
   roundedIcon,
   style
}) {
   const styles = jss();
   return (
      <div className={`${styles.root} ${cardStyles}`} style={{ ...style }}>
         <div className={`d-flex flex-column ${cardHeaderStyles}`}>
            <div
               className={`${
                  roundedIcon && styles.cardIconContainer
               } d-flex justify-content-center align-items-center`}
            >
               {cardIcon}
            </div>
            <section className={cardTitleStyles}>
               <h4>{cardTitle}</h4>
            </section>
         </div>
         <div className={cardDescriptionStyles}>
            <p>{cardDescription}</p>
         </div>
      </div>
   );
}

export default RCard;

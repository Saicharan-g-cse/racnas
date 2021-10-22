import './globals.css';
import React from 'react';
import {
   createTheme,
   CssBaseline,
   ThemeProvider,
   useMediaQuery
} from '@mui/material';
import NoSsr from '@mui/material/NoSsr';

export let appRefs;

//#4285F4
//#00B0FF
//useMediaQuery('(prefers-color-scheme: dark)');
function MyApp({ Component, pageProps }) {
   const [appTheme, setAppTheme] = React.useState(true);
   const theme = React.useMemo(
      () =>
         createTheme({
            palette: {
               mode: appTheme ? 'dark' : 'light',
               primary: {
                  main: '#00B0FF'
               }
            }
         }),
      [appTheme]
   );

   function getAppTheme() {
      return appTheme;
   }

   appRefs = {
      setAppTheme,
      getAppTheme
   };
   return (
      <NoSsr>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
         </ThemeProvider>
      </NoSsr>
   );
}

export default MyApp;

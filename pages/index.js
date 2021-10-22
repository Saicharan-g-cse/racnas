import React from 'react';
import Head from 'next/head';
import Main from '../app/components/Main';

function Index() {
   return (
      <div>
         <Head>
            <title>Racnas</title>
         </Head>
         <main>
            <Main />
         </main>
      </div>
   );
}

export default Index;

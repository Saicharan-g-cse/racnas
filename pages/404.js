import Head from 'next/head';
import React from 'react';
import NotFound from '../app/components/not-found/NotFound';

function Page404() {
   return (
      <div>
         <Head>
            <title>Racnas | Not found</title>
         </Head>
         <main>
            <NotFound />
         </main>
      </div>
   );
}

export default Page404;

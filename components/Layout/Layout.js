import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

const Layout = ({children,title}) => {
    return(
        <main 
            id="mainContent"
            className='sectionMain'
        >
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no, maximum-scale=1.0"
                />
                <meta name="theme-color" content="#000" />
                <title>{title}</title>
            </Head>
            <div>{children}</div>
            {/**footer */}
        </main>
    );
};

export default Layout;
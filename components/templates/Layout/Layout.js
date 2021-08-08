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
            {/* <style jsx>{`
                .sectionMain {
                    z-index: 1;
                    background-color: #0079bf;
                    height: 100%;
                }
            `}</style> */}
            <style jsx global>{`
                html,
                body {
                background-color: #0079bf;
                margin: 3px 1px;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </main>
    );
};

export default Layout;
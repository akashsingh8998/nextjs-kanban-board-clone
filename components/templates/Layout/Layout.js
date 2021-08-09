import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { PageHeader, Input, Typography } from 'antd';
import 'antd/dist/antd.css';

const Layout = ({children,title,searchHandler}) => {
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
            <div>
                <PageHeader
                    title={<Typography style={{color: '#fff'}}>Daily to-do list Kanban board</Typography>}
                    style={{padding: '10px 5px'}}
                    extra={
                        <Input.Search 
                            allowClear 
                            style={{}} 
                            placeholder="search cards" 
                            onSearch={searchHandler}
                        />
                    }
                ></PageHeader>
            </div>
            <div>{children}</div>
            {/**footer */}
            <style jsx>{`
                .ant-page-header-heading-title {
                    background-color: #0079bf;
                }
            `}</style>
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
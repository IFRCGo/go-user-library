import React from "react";
import {Helmet} from 'react-helmet';
import BreadCrumb from '../breadcrumb';
import HeaderDash from './header-dash';
import KeyFiguresHeader from '../common/key-figures-header';

function Headers({children, ...props}) {
    return (
        <>
            <Helmet>
                <title>
                    {props.title}
                </title>
            </Helmet>

            <section className='inpage'>
                {props.breadcrumb ? (
                    <BreadCrumb crumbs={[{link: props.url, name: props.urlText}, {
                        link: '/',
                        name: "Home"
                    }]}/>
                ) : null}
                <>
                    <HeaderDash
                        title={props.title}
                        description={props.description}
                    />
                    <div>
                        <div className='inner fold--stats'>
                            <KeyFiguresHeader
                                appealsListStats={props.data}
                                fullscreen={false}
                                toggleFullscreen={false}
                            />
                        </div>
                    </div>
                </>
            </section>
        </>
    );
}

export default Headers;

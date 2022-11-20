import React from 'react';
import {Helmet} from "react-helmet";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <title>404 page</title>
                <meta name="description" content="Страница не найдена" />
            </Helmet>
            Page404
        </div>
    );
};

export default Page404;
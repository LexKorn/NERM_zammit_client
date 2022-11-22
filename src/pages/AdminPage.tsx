import React from 'react';
import {Helmet} from "react-helmet";

const AdminPage = () => {
    return (
        <div style={{flex: 1}}>
            <Helmet>
                <title>Админ. панель</title>
                <meta name="description" content="Цаммит. Админ. панель" />
            </Helmet>
            AdminPage
        </div>
    );
};

export default AdminPage;
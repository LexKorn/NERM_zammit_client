import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";

import { authRoutes, publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../';


const AppRouter: React.FC = observer(() => { 
    const {admin} = useContext(Context);

    return (
        <Routes>
            {admin.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path='/*' element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
});

export default AppRouter;
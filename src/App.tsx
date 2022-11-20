// import React, { useContext, useState, useEffect } from "react";
import {BrowserRouter} from 'react-router-dom';
import { observer } from "mobx-react-lite";
// import { Spinner } from "react-bootstrap";

import AppRouter from "./components/AppRouter";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import NavBar from "./components/NavBar/NavBar";
// import { Context } from "./index";
// import { check } from "./http/userAPI";


const App = observer(() => {
    // const {user} = useContext(Context);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     check()
    //         .then(() => {
    //             user.setIsAuth(true);
    //         })
    //         .finally(() => setLoading(false));
    // }, []);

    // if (loading) {
    //     return <Spinner animation={"border"}/>
    // }

    return (
        <BrowserRouter>
            {/* <NavBar /> */}
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
});

export default App;
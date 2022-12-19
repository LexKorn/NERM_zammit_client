import {BrowserRouter} from 'react-router-dom';
import { observer } from "mobx-react-lite";

import AppRouter from "./components/AppRouter";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = observer(() => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
});

export default App;
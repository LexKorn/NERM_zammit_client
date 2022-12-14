import React, {useState, useContext} from 'react';

import ModalLogin from '../Modals/ModalLogin';
import { Context } from '../..';

import './footer.sass';


const Footer: React.FC = () => {
    const {admin} = useContext(Context);
    const [visible, setVisible] = useState<boolean>(false);

    const loginHandler = () => {
        if (!admin.isAuth) {
            setVisible(true);
        }        
    };

    return (
        <div className='footer'>
            <div onClick={() => loginHandler()}>ООО «Инженерное бюро Цаммит» с 2005г.</div>   
            <ModalLogin show={visible} onHide={() => setVisible(false)} />      
        </div>
    );
};

export default Footer;
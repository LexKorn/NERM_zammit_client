import React, {useState} from 'react';

import ModalLogin from '../Modals/ModalLogin';

import './footer.sass';


const Footer: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const loginHandler = () => {
        setVisible(true);
    };

    return (
        <div className='footer'>
            <div onClick={() => loginHandler()}>ООО «Инженерное бюро Цаммит» с 2005г.</div>   
            <ModalLogin show={visible} onHide={() => setVisible(false)} />      
        </div>
    );
};

export default Footer;
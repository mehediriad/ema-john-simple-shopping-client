import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../images/not-found.png';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="notFound">
                <div className="notFoundImg">
                    <img src={notFound} alt="Not-Found" />
                </div>
                <div>
                    <button onClick={()=>navigate('/shop')} className="continue-btn">Continue Shopping</button>
                </div>

            </div>
        </div>
    );
};

export default NotFound;
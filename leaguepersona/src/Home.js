import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Base.css';



const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <body>
                Hello World.
            </body>
        </div>
    );
}

export default Home;
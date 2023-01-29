import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './res/img/logo_.png';

import './Base.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <body>
                <div className="topContainer">
                    <div className="logo">LeaguePersona</div> 
                </div>
            </body>
        </div>
    );

}

export default Home;
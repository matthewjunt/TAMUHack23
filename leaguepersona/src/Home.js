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
                    <div className="subtitle">
                        Answer some questions and get a recommendation for your next League of Legends champion!
                    </div>
                </div>

                <div className="questionContainer">
                    <div className="question">
                        <div className="questionText">What career path do you feel most inclined to pursue?</div>
                        <div className="questionOptions">
                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0'>
                                Engineering
                            </div>
                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0'>
                                Medicine
                            </div>
                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0'>
                                Business
                            </div>
                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0'>
                                Arts
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    );

}

export default Home;
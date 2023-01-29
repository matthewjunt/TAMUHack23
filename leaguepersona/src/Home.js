import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './res/img/logo_.png';

import './Base.css';

var ss = 0;
var qa = 0;
var cal = 0;
var lin = 0;
var pas = 0;
var cac = 0;
var cam = 0;
var bad = 0;

function clicked(e) {
    var div = e.target;
    div.innerHTML = "New text";

}

const Home = () => {
    const navigate = useNavigate();
    
    
    const changeText = (e) => {
        var opt1 = document.getElementById("opt1");
        var opt2 = opt1.nextSibling;
        var opt3 = opt1.nextSibling.nextSibling;
        var opt4 = opt1.nextSibling.nextSibling.nextSibling;
        // console.log(opt1.innerHTML);
        // console.log(opt2.innerHTML);
        // console.log(opt3.innerHTML);
        // console.log(opt4.innerHTML);
        // opt1.innerHTML = "New text 1";
        // opt2.innerHTML = "New text 2";
        // opt3.innerHTML = "New text 3";
        // opt4.innerHTML = "New text 4";

        ss += parseInt(e.target.getAttribute('ss'));
        qa += parseInt(e.target.getAttribute('qa'));
        cal += parseInt(e.target.getAttribute('cal'));
        lin += parseInt(e.target.getAttribute('lin'));
        pas += parseInt(e.target.getAttribute('pas'));
        cac += parseInt(e.target.getAttribute('cac'));
        cam += parseInt(e.target.getAttribute('cam'));
        bad += parseInt(e.target.getAttribute('bad'));


        var clickedDiv = e.target;
        var text = clickedDiv.innerHTML;
        console.log(text);
        
    }

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
                        <div id="opt" className="questionOptions">
                            <div id="opt1" className="option" ss='3' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Engineering
                            </div>

                            <div className="option" ss='1' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Medicine
                            </div>
                            <div className="option" ss='2' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Business
                            </div>
                            <div className="option" ss='3' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
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
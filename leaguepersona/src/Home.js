import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './res/img/logo_.png';

import './Base.css';

function one() {
    //print the text that was clicked on 
    console.log("opt1");
    var div = document.getElementById("opt");
    var text = div.innerHTML;
    console.log(text);

}

function clicked(e) {
    var div = e.target;
    div.innerHTML = "New text";

}

const Home = () => {
    const navigate = useNavigate();
    
    const changeText = (e) => {
        var opt1 = document.getElementById("opt1");
        var opt2 = opt1.nextSibling.innerHTML;
        var op3 = opt1.nextSibling.nextSibling.innerHTML;
        var opt4 = opt1.nextSibling.nextSibling.nextSibling.innerHTML;
        console.log(opt1.innerHTML);
        console.log(opt2);
        console.log(op3);
        console.log(opt4);


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
                            <div id="opt1" className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Engineering
                            </div>

                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Medicine
                            </div>
                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Business
                            </div>
                            <div className="option" ss='0' qa='0' cal='0' lin='0' pas='0' cac='0' cam='0' bad='0' onClick={(e) => changeText(e)}>
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
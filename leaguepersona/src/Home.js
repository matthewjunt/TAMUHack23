import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './res/img/logo_.png';

import './Base.css';

var ss_total = 0;
var qa_total = 0;
var cal_total = 0;
var lin_total = 0;
var pas_total = 0;
var cac_total = 0;
var cam_total = 0;
var bad_total = 0;
var question_count = 0;

// Champion Array to Determine Scores
const champArray = [
    {
        name: "Aatrox",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Ahri",
        ss: 0,
        qa: 4,
        cal: 8,
        lin: 3,
        pas: 1,
        cac: 5,
        cam: 6,
        bad: 2
    },
    {
        name: "Akali",
        ss: 0,
        qa: 8,
        cal: 7,
        lin: 3,
        pas: 1,
        cac: 5,
        cam: 6,
        bad: 2
    },
    {
        name: "Alistar",
        ss: 2,
        qa: 4,
        cal: 5,
        lin: 3,
        pas: 8,
        cac: 5,
        cam: 2,
        bad: 1
    },
    {
        name: "Amumu",
        ss: 8,
        qa: 2,
        cal: 5,
        lin: 3,
        pas: 6,
        cac: 0,
        cam: 4,
        bad: 3
    },
    {
        name: "Annie",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 8,
        cam: 5,
        bad: 2
    },
    {
        name: "Azir",
        ss: 0,
        qa: 4,
        cal: 8,
        lin: 3,
        pas: 1,
        cac: 5,
        cam: 6,
        bad: 2
    },
    {
        name: "Bard",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Blitzcrank",
        ss: 3,
        qa: 6,
        cal: 5,
        lin: 4,
        pas: 8,
        cac: 2,
        cam: 4,
        bad: 1
    },
    {
        name: "Braum",
        ss: 5,
        qa: 4,
        cal: 6,
        lin: 3,
        pas: 8,
        cac: 2,
        cam: 1,
        bad: 3
    },
    {
        name: "Camille",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 3,
        pas: 2,
        cac: 4,
        cam: 5,
        bad: 5
    },
    {
        name: "Cho'Gath",
        ss: 8,
        qa: 2,
        cal: 6,
        lin: 4,
        pas: 5,
        cac: 0,
        cam: 3,
        bad: 1
    },
    {
        name: "Corki",
        ss: 2,
        qa: 4,
        cal: 6,
        lin: 8,
        pas: 3,
        cac: 5,
        cam: 1,
        bad: 0
    },
    {
        name: "Darius",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Dr. Mundo",
        ss: 2,
        qa: 5,
        cal: 6,
        lin: 8,
        pas: 3,
        cac: 1,
        cam: 4,
        bad: 0
    },
    {
        name: "Ekko",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Evelynn",
        ss: 0,
        qa: 5,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 4,
        cam: 8,
        bad: 3
    },
    {
        name: "Fiddlesticks",
        ss: 3,
        qa: 4,
        cal: 6,
        lin: 5,
        pas: 2,
        cac: 8,
        cam: 1,
        bad: 0
    },
    {
        name: "Fiora",
        ss: 0,
        qa: 8,
        cal: 5,
        lin: 3,
        pas: 2,
        cac: 4,
        cam: 6,
        bad: 7
    },
    {
        name: "Fizz",
        ss: 0,
        qa: 5,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 4,
        cam: 8,
        bad: 3
    },
    {
        name: "Galio",
        ss: 8,
        qa: 2,
        cal: 6,
        lin: 4,
        pas: 5,
        cac: 0,
        cam: 3,
        bad: 1
    },
    {
        name: "Garen",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Gragas",
        ss: 2,
        qa: 6,
        cal: 5,
        lin: 8,
        pas: 3,
        cac: 1,
        cam: 4,
        bad: 0
    },
    {
        name: "Graves",
        ss: 2,
        qa: 4,
        cal: 6,
        lin: 8,
        pas: 3,
        cac: 5,
        cam: 1,
        bad: 0
    },
    {
        name: "Heimerdinger",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Illaoi",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Irelia",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Janna",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Jarvan IV",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Jax",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Jayce",
        ss: 0,
        qa: 6,
        cal: 5,
        lin: 8,
        pas: 3,
        cac: 1,
        cam: 4,
        bad: 2
    },
    {
        name: "Jhin",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Jinx",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Kai'Sa",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Kalista",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Karma",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Karthus",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Kassadin",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Katarina",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kayle",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Kennen",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kha'Zix",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kindred",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Kled",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kog'Maw",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "LeBlanc",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Lee Sin",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Leona",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Lissandra",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Lucian",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Lulu",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Lux",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Malphite",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Malzahar",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Maokai",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Master Yi",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Miss Fortune",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Mordekaiser",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Morgana",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Nami",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Nasus",
        ss: 10,
        qa: 4,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Nautilus",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Nidalee",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Nocturne",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Nunu",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Olaf",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Orianna",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Pantheon",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Poppy",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Quinn",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Rakan",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Rammus",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Rek'Sai",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Renekton",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Rengar",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Riven",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Rumble",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Ryze",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Sejuani",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Shaco",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Shen",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Shyvana",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Singed",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Sion",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Sivir",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Skarner",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Sona",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Soraka",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Swain",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Syndra",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Tahm Kench",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Taliyah",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Talon",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Taric",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Teemo",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Thresh",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Tristana",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Trundle",
        ss: 3,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Tryndamere",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Twisted Fate",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Twitch",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Udyr",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Urgot",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Varus",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vayne",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Veigar",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vel'Koz",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vi",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Viktor",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vladimir",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Volibear",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Warwick",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Xayah",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Xerath",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Xin Zhao",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Yasuo",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Yorick",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zac",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zed",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Ziggs",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zilean",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zyra",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    }
];

// var questions = [{q: }]

// create an algorithm that finds which champions are the best match for the user
function championAlgorithm(ss, qa, cal, lin, pas, cac, cam, bad) {
    var closestChampArray = [];
    // Iterate through each champion in ChampArray and find the closest match
    // That is, find the champion with the smallest difference in each attribute
    for (var i = 0; i < champArray.length; i++) {
        var champ = champArray[i];
        var ssDiff = Math.abs(ss - champ.ss);
        var qaDiff = Math.abs(qa - champ.qa);
        var calDiff = Math.abs(cal - champ.cal);
        var linDiff = Math.abs(lin - champ.lin);
        var pasDiff = Math.abs(pas - champ.pas);
        var cacDiff = Math.abs(cac - champ.cac);
        var camDiff = Math.abs(cam - champ.cam);
        var badDiff = Math.abs(bad - champ.bad);
        var totalDiff = ssDiff + qaDiff + calDiff + linDiff + pasDiff + cacDiff + camDiff + badDiff;
        closestChampArray.push([champ.name, totalDiff]);
    }
    // Sort the array by the total difference
    closestChampArray.sort(function(a, b) {
        return a[1] - b[1];
    }
    );
    // Console.log the top 3 champions
    alert("The top 3 champions for you are: " + closestChampArray[0][0] + ", " + closestChampArray[1][0] + ", and " + closestChampArray[2][0] + ".")
    return [closestChampArray[0][0], closestChampArray[1][0], closestChampArray[2][0]];
}

// a function that applies the final animations to the page
function finalAnimations() {
    var championContainer = document.getElementsByClassName("championContainer")[0];
    var questionContainer = document.getElementsByClassName("questionContainer")[0];
    championContainer.style.display = "block";
    championContainer.style.animation = "slide_up 2s 1";
    questionContainer.style.animation = "slide_right 2s 1";
    setTimeout(function() {
        questionContainer.style.display = "none";
    }
    , 2000);
}


const Home = () => {
    const navigate = useNavigate();
    
    
    const changeText = (e) => {
        question_count++;
        if(question_count > 20){
            championAlgorithm(ss_total, qa_total, cal_total, lin_total, pas_total, cac_total, cam_total, bad_total);
            alert("Your results have been submitted. Thank you for taking the quiz!")
        }
        var opt1 = document.getElementById("opt1");
        var opt2 = document.getElementById("opt2");
        var opt3 = document.getElementById("opt3");
        var opt4 = document.getElementById("opt4");
        
        ss_total += parseInt(e.target.getAttribute('ss'));
        qa_total += parseInt(e.target.getAttribute('qa'));
        cal_total += parseInt(e.target.getAttribute('cal'));
        lin_total += parseInt(e.target.getAttribute('lin'));
        pas_total += parseInt(e.target.getAttribute('pas'));
        cac_total += parseInt(e.target.getAttribute('cac'));
        cam_total += parseInt(e.target.getAttribute('cam'));
        bad_total += parseInt(e.target.getAttribute('bad'));
        
        

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

                <div className="championContainer">
                    Your champions are: 
                    <div id="spacer">SPACER</div>
                    <div className="champImageContainer">
                        <div className="champImage">
                            <img id="img" src={require("./res/img/icons/aatrox.png")}></img>
                            <div className="champName">Aatrox</div>
                        </div>
                        <div className="champImage">
                            <img id="img" src={require("./res/img/icons/ahri.png")}></img>
                            <div className="champName">Ahri</div>
                        </div>
                        <div className="champImage">
                            <img id="img" src={require("./res/img/icons/akali.png")}></img>
                            <div className="champName">Akali</div>
                        </div>
                    </div>
                </div>

                {/* <div className="questionContainer" onClick={finalAnimations}>
                    hi -> FOR TESTING PURPOSES, click this to apply finalAniamtion
                </div> */}

                <div className="questionContainer">
                    Test the algorithm here!
                    <div className="question" onClick={()=>championAlgorithm(10,10,10,10,10,10,10,10)}>
                        Click on this.
                    </div>
                </div>
                
            </body>
        </div>
    );

}

export default Home;
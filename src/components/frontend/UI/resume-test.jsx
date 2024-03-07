import React, { useState, useEffect } from 'react';
import { Darklight } from './toggle/darklight';
import { useCookies } from 'react-cookie';

function ResumeTest() {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const script = document.createElement('script');
    
    script.src = '/public/resume/pdf2htmlEX.js';
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  const styles = (
    <style jsx>{`
        #sidebar {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 250px;
            padding: 0;
            margin: 0;
            overflow: auto;
        }

        #page-container {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            border: 0;
        }

        @media screen {
            #sidebar.opened+#page-container {
            left: 250px;
            }

            #page-container {
            bottom: 0;
            right: 0;
            overflow: auto;
            }

            .loading-indicator {
            display: none;
            }

            .loading-indicator.active {
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            top: 50%;
            left: 50%;
            margin-top: -32px;
            margin-left: -32px;
            }

            .loading-indicator img {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            }
        }

        @media print {
            @page {
            margin: 0;
            }

            html {
            margin: 0;
            }

            body {
            margin: 0;
            -webkit-print-color-adjust: exact;
            }

            #sidebar {
            display: none;
            }

            #page-container {
            width: auto;
            height: auto;
            overflow: visible;
            background-color: transparent;
            }

            .d {
            display: none;
            }
        }

        .pf {
            position: relative;
            background-color: white;
            overflow: hidden;
            margin: 0;
            border: 0;
        }

        .pc {
            position: absolute;
            border: 0;
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: block;
            transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
        }

        .pc.opened {
            display: block;
        }

        .bf {
            position: absolute;
            border: 0;
            margin: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        }

        .bi {
            position: absolute;
            border: 0;
            margin: 0;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        }

        @media print {
            .pf {
            margin: 0;
            box-shadow: none;
            page-break-after: always;
            page-break-inside: avoid;
            }

            @-moz-document url-prefix() {
            .pf {
                overflow: visible;
                border: 1px solid #fff;
            }

            .pc {
                overflow: visible;
            }
            }
        }

        .c {
            position: absolute;
            border: 0;
            padding: 0;
            margin: 0;
            overflow: hidden;
            display: block;
        }

        .t {
            position: absolute;
            white-space: pre;
            font-size: 1px;
            transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            -webkit-transform-origin: 0 100%;
            unicode-bidi: bidi-override;
            -moz-font-feature-settings: "liga" 0;
        }

        .t:after {
            content: '';
        }

        .t:before {
            content: '';
            display: inline-block;
        }

        .t span {
            position: relative;
            unicode-bidi: bidi-override;
        }

        ._ {
            display: inline-block;
            color: transparent;
            z-index: -1;
        }

        ::selection {
            background: rgba(127, 255, 255, 0.4);
        }

        ::-moz-selection {
            background: rgba(127, 255, 255, 0.4);
        }

        .pi {
            display: none;
        }

        .d {
            position: absolute;
            transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            -webkit-transform-origin: 0 100%;
        }

        .it {
            border: 0;
            background-color: rgba(255, 255, 255, 0.0);
        }

        .ir:hover {
            cursor: pointer;
        }

        @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        }

        @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        }

        @keyframes swing {
        0% {
            transform: rotate(0);
        }
        10% {
            transform: rotate(0);
        }
        90% {
            transform: rotate(720deg);
        }
        100% {
            transform: rotate(720deg);
        }
        }

        @-webkit-keyframes swing {
        0% {
            -webkit-transform: rotate(0);
        }
        10% {
            -webkit-transform: rotate(0);
        }
        90% {
            -webkit-transform: rotate(720deg);
        }
        100% {
            -webkit-transform: rotate(720deg);
        }
        }

        @media screen and (-webkit-min-device-pixel-ratio: 0) {
            .sc_ {
                -webkit-text-stroke: 0px transparent;
            }
            .sc2 {
                -webkit-text-stroke: 0.015em rgb(38, 38, 38);
                text-shadow: none;
            }
            .sc1 {
                -webkit-text-stroke: 0.015em rgb(0, 0, 0);
                text-shadow: none;
            }
            .sc0 {
                -webkit-text-stroke: 0.015em transparent;
                text-shadow: none;
            }
        }

        @media screen {
        #sidebar {
            background-color: #2f3236;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+");
        }

        #outline {
            font-family: Georgia, Times, "Times New Roman", serif;
            font-size: 13px;
            margin: 2em 1em;
        }

        #outline ul {
            padding: 0;
        }

        #outline li {
            list-style-type: none;
            margin: 1em 0;
        }

        #outline li>ul {
            margin-left: 1em;
        }

        #outline a,
        #outline a:visited,
        #outline a:hover,
        #outline a:active {
            line-height: 1.2;
            color: #e8e8e8;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-decoration: none;
            display: block;
            overflow: hidden;
            outline: 0;
        }

        #outline a:hover {
            color: #0cf;
        }

        #page-container {
            background-color: #9e9e9e;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
            -webkit-transition: left 500ms;
            transition: left 500ms;
        }

        .pf {
            margin: 13px auto;
            box-shadow: 1px 1px 3px 1px #333;
            border-collapse: separate;
        }

        .pc.opened {
            -webkit-animation: fadein 100ms;
            animation: fadein 100ms;
        }

        .loading-indicator.active {
            -webkit-animation: swing 1.5s ease-in-out .01s infinite alternate none;
            animation: swing 1.5s ease-in-out .01s infinite alternate none;
        }

        .checked {
            background: no-repeat url('/public/resume/images/checkmark.png');
        }

        .m0 {
            transform: matrix(0.25, 0, 0, 0.25, 0, 0);
            -ms-transform: matrix(0.25, 0, 0, 0.25, 0, 0);
            -webkit-transform: matrix(0.25, 0, 0, 0.25, 0, 0);
        }
        
        .v0 {
            vertical-align: 0;
        }
        
        .lsb {
            letter-spacing: -0.352px;
        }
        
        .ls9 {
            letter-spacing: -0.2284px;
        }
        
        .lse {
            letter-spacing: -0.1436px;
        }
        
        .lsa {
            letter-spacing: -0.02496px;
        }
        
        .ls7 {
            letter-spacing: 0;
        }
        
        .ls3 {
            letter-spacing: 0.128px;
        }
        
        .ls2 {
            letter-spacing: 0.2016px;
        }
        
        .lsc {
            letter-spacing: 0.2212px;
        }
        
        .ls1 {
            letter-spacing: 0.24px;
        }
        
        .ls0 {
            letter-spacing: 0.2516px;
        }
        
        .ls5 {
            letter-spacing: 0.2816px;
        }
        
        .ls8 {
            letter-spacing: 7.8px;
        }
        
        .lsd {
            letter-spacing: 8.04px;
        }
        
        .ls6 {
            letter-spacing: 8.256px;
        }
        
        .ls4 {
            letter-spacing: 42.68448px;
        }
        
        .sc_ {
            text-shadow: none;
        }
        
        .sc2 {
            text-shadow: -0.015em 0 rgb(38, 38, 38), 0 0.015em rgb(38, 38, 38), 0.015em 0 rgb(38, 38, 38), 0 -0.015em rgb(38, 38, 38);
        }
        
        .sc1 {
            text-shadow: -0.015em 0 rgb(0, 0, 0), 0 0.015em rgb(0, 0, 0), 0.015em 0 rgb(0, 0, 0), 0 -0.015em rgb(0, 0, 0);
        }
        
        .sc0 {
            text-shadow: -0.015em 0 transparent, 0 0.015em transparent, 0.015em 0 transparent, 0 -0.015em transparent;
        }

        .ws5 {
            word-spacing: -39.84px;
        }
        .ws9 {
            word-spacing: -18.3984px;
        }
        .ws3 {
            word-spacing: -11.45664px;
        }
        .ws1 {
            word-spacing: -10.61px;
        }
        .ws4 {
            word-spacing: -10.4864px;
        }
        .ws0 {
            word-spacing: -10.3584px;
        }
        .wsb {
            word-spacing: -10.2148px;
        }
        .ws7 {
            word-spacing: -10.13px;
        }
        .ws8 {
            word-spacing: -2.62944px;
        }
        .ws6 {
            word-spacing: -2.23104px;
        }
        .wsa {
            word-spacing: -2.11152px;
        }
        .wsc {
            word-spacing: 0;
        }
        .ws2 {
            word-spacing: 3.168px;
        }
        ._9 {
            margin-left: -1.069120px;
        }
        ._2 {
            width: 1.035840px;
        }
        ._5 {
            width: 8.047680px;
        }
        ._6 {
            width: 9.278720px;
        }
        ._4 {
            width: 11.040000px;
        }
        ._7 {
            width: 12.849120px;
        }
        ._8 {
            width: 13.928000px;
        }
        ._1 {
            width: 15.984000px;
        }
        ._3 {
            width: 17.376000px;
        }
        ._0 {
            width: 133.248000px;
        }
        .fc6 {
            color: transparent;
        }
        .fc1 {
            color: rgb(255, 0, 0);
        }
        .fc5 {
            color: rgb(128, 128, 128);
        }
        .fc4 {
            color: rgb(127, 127, 127);
        }
        .fc3 {
            color: rgb(38, 38, 38);
        }
        .fc2 {
            color: rgb(255, 255, 255);
        }
        .fc0 {
            color: rgb(0, 0, 0);
        }
        .fs7 {
            font-size: 20.160000px;
        }
        .fs1 {
            font-size: 39.840000px;
        }
        .fs5 {
            font-size: 44.160000px;
        }
        .fs0 {
            font-size: 48.000000px;
        }
        .fs2 {
            font-size: 75.840000px;
        }
        .fs4 {
            font-size: 135.840000px;
        }
        .fs3 {
            font-size: 152.160000px;
        }
        .fs6 {
            font-size: 192.000000px;
        }
        .y47 {
            bottom: -126.030000px;
        }
        .y46 {
            bottom: -112.950000px;
        }
        .y45 {
            bottom: -91.710000px;
        }
        .y96 {
            bottom: -72.980000px;
        }
        .y44 {
            bottom: -70.110000px;
        }
        .y95 {
            bottom: -59.400000px;
        }
        .y43 {
            bottom: -48.480000px;
        }
        .y94 {
            bottom: -42.720000px;
        }
        .y42 {
            bottom: -26.880000px;
        }
        .y93 {
            bottom: -26.160000px;
        }
        .y75 {
            bottom: -16.560000px;
        }
        .y78 {
            bottom: -15.960000px;
        }
        .y92 {
            bottom: -9.480000px;
        }
        .y87 {
            bottom: -8.880000px;
        }
        .y41 {
            bottom: -5.280000px;
        }
        .ya3 {
            bottom: -0.839970px;
        }
        .y0 {
            bottom: -0.500000px;
        }
        .y1 {
            bottom: 0.000000px;
        }
        .y7f {
            bottom: 0.120000px;
        }
        .y7a {
            bottom: 1.080000px;
        }
        .y74 {
            bottom: 2.640000px;
        }
        .y77 {
            bottom: 3.360000px;
        }
        .y49 {
            bottom: 3.600000px;
        }
        .y89 {
            bottom: 3.720000px;
        }
        .y7c {
            bottom: 4.080000px;
        }
        .y98 {
            bottom: 4.320000px;
        }
        .y72 {
            bottom: 5.040000px;
        }
        .y39 {
            bottom: 5.640000px;
        }
        .y4e {
            bottom: 5.880000px;
        }
        .y7e {
            bottom: 6.840000px;
        }
        .y91 {
            bottom: 7.080000px;
        }
        .y25 {
            bottom: 7.920000px;
        }
        .y40 {
            bottom: 8.400000px;
        }
        .y5e {
            bottom: 9.840000px;
        }
        .y2c {
            bottom: 10.200000px;
        }
        .y86 {
            bottom: 10.800000px;
        }
        .ya2 {
            bottom: 14.064000px;
        }
        .y4b {
            bottom: 16.920000px;
        }
        .y71 {
            bottom: 18.840000px;
        }
        .y37 {
            bottom: 19.200000px;
        }
        .y3f {
            bottom: 21.960000px;
        }
        .y4d {
            bottom: 22.200000px;
        }
        .y2b {
            bottom: 23.760000px;
        }
        .y85 {
            bottom: 24.384000px;
        }
        .ya1 {
            bottom: 27.624000px;
        }
        .y70 {
            bottom: 32.400000px;
        }
        .y5c {
            bottom: 32.880000px;
        }
        .y2a {
            bottom: 37.440000px;
        }
        .y84 {
            bottom: 38.064000px;
        }
        .y90 {
            bottom: 40.320000px;
        }
        .y3e {
            bottom: 41.640000px;
        }
        .ya0 {
            bottom: 44.304000px;
        }
        .y6f {
            bottom: 46.080000px;
        }
        .y5b {
            bottom: 49.800000px;
        }
        .y29 {
            bottom: 51.000000px;
        }
        .y83 {
            bottom: 51.624000px;
        }
        .y8f {
            bottom: 57.000000px;
        }
        .y9f {
            bottom: 57.864000px;
        }
        .y6e {
            bottom: 59.670000px;
        }
        .y3d {
            bottom: 61.200000px;
        }
        .y35 {
            bottom: 63.030000px;
        }
        .y28 {
            bottom: 64.680000px;
        }
        .y82 {
            bottom: 65.304000px;
        }
        .y5a {
            bottom: 66.870000px;
        }
        .y6d {
            bottom: 73.350000px;
        }
        .y8e {
            bottom: 73.560000px;
        }
        .y9e {
            bottom: 74.544000px;
        }
        .y27 {
            bottom: 78.240000px;
        }
        .y81 {
            bottom: 78.864000px;
        }
        .y3c {
            bottom: 80.880000px;
        }
        .y59 {
            bottom: 83.790000px;
        }
        .y9d {
            bottom: 88.104000px;
        }
        .y32 {
            bottom: 89.380000px;
        }
        .y34 {
            bottom: 89.430000px;
        }
        .y8d {
            bottom: 90.240000px;
        }
        .y80 {
            bottom: 92.544000px;
        }
        .y6c {
            bottom: 92.910000px;
        }
        .y3b {
            bottom: 94.440000px;
        }
        .y58 {
            bottom: 100.830000px;
        }
        .y9c {
            bottom: 104.780000px;
        }
        .y7d {
            bottom: 106.700000px;
        }
        .y8c {
            bottom: 106.830000px;
        }
        .y6b {
            bottom: 109.590000px;
        }
        .y31 {
            bottom: 114.940000px;
        }
        .y57 {
            bottom: 117.750000px;
        }
        .y9b {
            bottom: 118.340000px;
        }
        .y8b {
            bottom: 123.510000px;
        }
        .y6a {
            bottom: 124.590000px;
        }
        .y30 {
            bottom: 128.620000px;
        }
        .y5f {
            bottom: 131.060000px;
        }
        .y69 {
            bottom: 132.990000px;
        }
        .y4f {
            bottom: 134.300000px;
        }
        .y56 {
            bottom: 134.790000px;
        }
        .y9a {
            bottom: 135.020000px;
        }
        .y68 {
            bottom: 146.550000px;
        }
        .y99 {
            bottom: 148.580000px;
        }
        .y55 {
            bottom: 151.710000px;
        }
        .y2f {
            bottom: 154.180000px;
        }
        .y97 {
            bottom: 158.900000px;
        }
        .y67 {
            bottom: 160.230000px;
        }
        .y54 {
            bottom: 168.750000px;
        }
        .y66 {
            bottom: 173.790000px;
        }
        .y2e {
            bottom: 179.860000px;
        }
        .y53 {
            bottom: 185.670000px;
        }
        .y65 {
            bottom: 187.470000px;
        }
        .y64 {
            bottom: 201.030000px;
        }
        .y52 {
            bottom: 202.710000px;
        }
        .y63 {
            bottom: 214.710000px;
        }
        .y51 {
            bottom: 219.630000px;
        }
        .y62 {
            bottom: 228.270000px;
        }
        .y50 {
            bottom: 236.690000px;
        }
        .y61 {
            bottom: 247.970000px;
        }
        .y23 {
            bottom: 261.170000px;
        }
        .y60 {
            bottom: 264.530000px;
        }
        .y22 {
            bottom: 275.810000px;
        }
        .y21 {
            bottom: 290.450000px;
        }
        .y20 {
            bottom: 305.090000px;
        }
        .y1f {
            bottom: 319.730000px;
        }
        .y1e {
            bottom: 334.370000px;
        }
        .y1d {
            bottom: 349.010000px;
        }
        .ya4 {
            bottom: 360.190000px;
        }
        .y1c {
            bottom: 363.670000px;
        }
        .y1b {
            bottom: 378.310000px;
        }
        .y4c {
            bottom: 383.470000px;
        }
        .y1a {
            bottom: 392.950000px;
        }
        .y19 {
            bottom: 407.590000px;
        }
        .y48 {
            bottom: 408.550000px;
        }
        .y26 {
            bottom: 413.830000px;
        }
        .y18 {
            bottom: 422.230000px;
        }
        .y8a {
            bottom: 430.150000px;
        }
        .y17 {
            bottom: 436.990000px;
        }
        .y16 {
            bottom: 451.630000px;
        }
        .y15 {
            bottom: 466.270000px;
        }
        .y33 {
            bottom: 471.310000px;
        }
        .y2d {
            bottom: 471.360000px;
        }
        .y14 {
            bottom: 480.910000px;
        }
        .y13 {
            bottom: 495.550000px;
        }
        .y24 {
            bottom: 499.750000px;
        }
        .y12 {
            bottom: 510.190000px;
        }
        .y11 {
            bottom: 524.830000px;
        }
        .y10 {
            bottom: 539.500000px;
        }
        .yf {
            bottom: 554.140000px;
        }
        .y88 {
            bottom: 567.580000px;
        }
        .ye {
            bottom: 568.780000px;
        }
        .yd {
            bottom: 583.420000px;
        }
        .y3a {
            bottom: 584.140000px;
        }
        .yc {
            bottom: 598.060000px;
        }
        .y7b {
            bottom: 601.420000px;
        }
        .yb {
            bottom: 612.700000px;
        }
        .y79 {
            bottom: 623.500000px;
        }
        .ya {
            bottom: 627.340000px;
        }
        .y76 {
            bottom: 641.380000px;
        }
        .y9 {
            bottom: 642.100000px;
        }
        .y36 {
            bottom: 653.620000px;
        }
        .y8 {
            bottom: 656.740000px;
        }
        .y7 {
            bottom: 671.380000px;
        }
        .y73 {
            bottom: 676.780000px;
        }
        .y6 {
            bottom: 686.020000px;
        }
        .y38 {
            bottom: 692.740000px;
        }
        .y5 {
            bottom: 700.660000px;
        }
        .y5d {
            bottom: 713.520000px;
        }
        .y4 {
            bottom: 715.320000px;
        }
        .y4a {
            bottom: 716.400000px;
        }
        .y3 {
            bottom: 729.960000px;
        }
        .y2 {
            bottom: 744.600000px;
        }
        .h1d {
            height: 11.760000px;
        }
        .h1b {
            height: 13.320000px;
        }
        .h1c {
            height: 14.040000px;
        }
        .h1e {
            height: 14.760000px;
        }
        .h1a {
            height: 15.425156px;
        }
        .h10 {
            height: 16.440000px;
        }
        .h21 {
            height: 16.560000px;
        }
        .h23 {
            height: 17.160000px;
        }
        .hc {
            height: 18.624000px;
        }
        .h1f {
            height: 19.800000px;
        }
        .h4 {
            height: 20.760000px;
        }
        .h26 {
            height: 21.960000px;
        }
        .h7 {
            height: 30.521953px;
        }
        .ha {
            height: 32.040000px;
        }
        .h15 {
            height: 33.831562px;
        }
        .h25 {
            height: 34.242188px;
        }
        .h19 {
            height: 34.461600px;
        }
        .h13 {
            height: 35.040000px;
        }
        .hf {
            height: 36.000000px;
        }
        .h5 {
            height: 36.468750px;
        }
        .hd {
            height: 36.726562px;
        }
        .h2 {
            height: 47.742188px;
        }
        .h11 {
            height: 48.600000px;
        }
        .h3 {
            height: 49.148438px;
        }
        .h16 {
            height: 49.680000px;
        }
        .hb {
            height: 77.654531px;
        }
        .h6 {
            height: 88.920000px;
        }
        .h20 {
            height: 103.220000px;
        }
        .he {
            height: 105.120000px;
        }
        .h12 {
            height: 105.204375px;
        }
        .h17 {
            height: 132.750000px;
        }
        .h22 {
            height: 137.180000px;
        }
        .h24 {
            height: 159.260000px;
        }
        .h8 {
            height: 190.560000px;
        }
        .h9 {
            height: 190.580000px;
        }
        .h14 {
            height: 248.450000px;
        }
        .h18 {
            height: 275.210000px;
        }
        .h0 {
            height: 792.000000px;
        }
        .h1 {
            height: 792.500000px;
        }
        .w12 {
            width: 40.800000px;
        }
        .w11 {
            width: 41.520000px;
        }
        .w13 {
            width: 41.640000px;
        }
        .w10 {
            width: 42.240000px;
        }
        .we {
            width: 72.984000px;
        }
        .wd {
            width: 91.224000px;
        }
        .w18 {
            width: 95.304000px;
        }
        .w5 {
            width: 151.800000px;
        }
        .w6 {
            width: 151.850000px;
        }
        .w8 {
            width: 158.060000px;
        }
        .w3 {
            width: 172.820000px;
        }
        .w7 {
            width: 186.050000px;
        }
        .wc {
            width: 188.090000px;
        }
        .w17 {
            width: 189.170000px;
        }
        .w4 {
            width: 190.370000px;
        }
        .w14 {
            width: 294.050000px;
        }
        .w9 {
            width: 339.190000px;
        }
        .wa {
            width: 344.570000px;
        }
        .wf {
            width: 375.770000px;
        }
        .wb {
            width: 380.350000px;
        }
        .w15 {
            width: 388.150000px;
        }
        .w16 {
            width: 392.230000px;
        }
        .w2 {
            width: 611.999991px;
        }
        .w0 {
            width: 612.000000px;
        }
        .w1 {
            width: 612.500000px;
        }
        .xe {
            left: -1.800000px;
        }
        .x0 {
            left: 0.000000px;
        }
        .x5 {
            left: 7.200000px;
        }
        .x8 {
            left: 18.000000px;
        }
        .x4 {
            left: 20.640000px;
        }
        .x10 {
            left: 25.200000px;
        }
        .xc {
            left: 28.920000px;
        }
        .x1 {
            left: 35.999991px;
        }
        .x6 {
            left: 49.680000px;
        }
        .x2 {
            left: 52.319991px;
        }
        .x3 {
            left: 53.519991px;
        }
        .xd {
            left: 62.400000px;
        }
        .x7 {
            left: 100.700000px;
        }
        .x12 {
            left: 109.460000px;
        }
        .x9 {
            left: 214.850000px;
        }
        .xf {
            left: 217.370000px;
        }
        .xb {
            left: 218.570000px;
        }
        .x11 {
            left: 219.770000px;
        }
        .xa {
            left: 270.290000px;
        }
        
                
        @media print {
            .v0 {
                vertical-align: 0.000000pt;
            }
            .lsb {
                letter-spacing: -0.469333pt;
            }
            .ls9 {
                letter-spacing: -0.304533pt;
            }
            .lse {
                letter-spacing: -0.191467pt;
            }
            .lsa {
                letter-spacing: -0.033280pt;
            }
            .ls7 {
                letter-spacing: 0.000000pt;
            }
            .ls3 {
                letter-spacing: 0.170667pt;
            }
            .ls2 {
                letter-spacing: 0.268800pt;
            }
            .lsc {
                letter-spacing: 0.294933pt;
            }
            .ls1 {
                letter-spacing: 0.320000pt;
            }
            .ls0 {
                letter-spacing: 0.335467pt;
            }
            .ls5 {
                letter-spacing: 0.375467pt;
            }
            .ls8 {
                letter-spacing: 10.400000pt;
            }
            .lsd {
                letter-spacing: 10.720000pt;
            }
            .ls6 {
                letter-spacing: 11.008000pt;
            }
            .ls4 {
                letter-spacing: 56.912640pt;
            }
            .ws5 {
                word-spacing: -53.120000pt;
            }
            .ws9 {
                word-spacing: -24.531200pt;
            }
            .ws3 {
                word-spacing: -15.275520pt;
            }
            .ws1 {
                word-spacing: -14.146667pt;
            }
            .ws4 {
                word-spacing: -13.981867pt;
            }
            .ws0 {
                word-spacing: -13.811200pt;
            }
            .wsb {
                word-spacing: -13.619733pt;
            }
            .ws7 {
                word-spacing: -13.506667pt;
            }
            .ws8 {
                word-spacing: -3.505920pt;
            }
            .ws6 {
                word-spacing: -2.974720pt;
            }
            .wsa {
                word-spacing: -2.815360pt;
            }
            .wsc {
                word-spacing: 0.000000pt;
            }
            .ws2 {
                word-spacing: 4.224000pt;
            }
            ._9 {
                margin-left: -1.425493pt;
            }
            ._2 {
                width: 1.381120pt;
            }
            ._5 {
                width: 10.730240pt;
            }
            ._6 {
                width: 12.371627pt;
            }
            ._4 {
                width: 14.720000pt;
            }
            ._7 {
                width: 17.132160pt;
            }
            ._8 {
                width: 18.570667pt;
            }
            ._1 {
                width: 21.312000pt;
            }
            ._3 {
                width: 23.168000pt;
            }
            ._0 {
                width: 177.664000pt;
            }
            .fs7 {
                font-size: 26.880000pt;
            }
            .fs1 {
                font-size: 53.120000pt;
            }
            .fs5 {
                font-size: 58.880000pt;
            }
            .fs0 {
                font-size: 64.000000pt;
            }
            .fs2 {
                font-size: 101.120000pt;
            }
            .fs4 {
                font-size: 181.120000pt;
            }
            .fs3 {
                font-size: 202.880000pt;
            }
            .fs6 {
                font-size: 256.000000pt;
            }
            .y47 {
                bottom: -168.040000pt;
            }
            .y46 {
                bottom: -150.600000pt;
            }
            .y45 {
                bottom: -122.280000pt;
            }
            .y96 {
                bottom: -97.306667pt;
            }
            .y44 {
                bottom: -93.480000pt;
            }
            .y95 {
                bottom: -79.200000pt;
            }
            .y43 {
                bottom: -64.640000pt;
            }
            .y94 {
                bottom: -56.960000pt;
            }
            .y42 {
                bottom: -35.840000pt;
            }
            .y93 {
                bottom: -34.880000pt;
            }
            .y75 {
                bottom: -22.080000pt;
            }
            .y78 {
                bottom: -21.280000pt;
            }
            .y92 {
                bottom: -12.640000pt;
            }
            .y87 {
                bottom: -11.840000pt;
            }
            .y41 {
                bottom: -7.040000pt;
            }
            .ya3 {
                bottom: -1.119960pt;
            }
            .y0 {
                bottom: -0.666667pt;
            }
            .y1 {
                bottom: 0.000000pt;
            }
            .y7f {
                bottom: 0.160000pt;
            }
            .y7a {
                bottom: 1.440000pt;
            }
            .y74 {
                bottom: 3.520000pt;
            }
            .y77 {
                bottom: 4.480000pt;
            }
            .y49 {
                bottom: 4.800000pt;
            }
            .y89 {
                bottom: 4.960000pt;
            }
            .y7c {
                bottom: 5.440000pt;
            }
            .y98 {
                bottom: 5.760000pt;
            }
            .y72 {
                bottom: 6.720000pt;
            }
            .y39 {
                bottom: 7.520000pt;
            }
            .y4e {
                bottom: 7.840000pt;
            }
            .y7e {
                bottom: 9.120000pt;
            }
            .y91 {
                bottom: 9.440000pt;
            }
            .y25 {
                bottom: 10.560000pt;
            }
            .y40 {
                bottom: 11.200000pt;
            }
            .y5e {
                bottom: 13.120000pt;
            }
            .y2c {
                bottom: 13.600000pt;
            }
            .y86 {
                bottom: 14.400000pt;
            }
            .ya2 {
                bottom: 18.752000pt;
            }
            .y4b {
                bottom: 22.560000pt;
            }
            .y71 {
                bottom: 25.120000pt;
            }
            .y37 {
                bottom: 25.600000pt;
            }
            .y3f {
                bottom: 29.280000pt;
            }
            .y4d {
                bottom: 29.600000pt;
            }
            .y2b {
                bottom: 31.680000pt;
            }
            .y85 {
                bottom: 32.512000pt;
            }
            .ya1 {
                bottom: 36.832000pt;
            }
            .y70 {
                bottom: 43.200000pt;
            }
            .y5c {
                bottom: 43.840000pt;
            }
            .y2a {
                bottom: 49.920000pt;
            }
            .y84 {
                bottom: 50.752000pt;
            }
            .y90 {
                bottom: 53.760000pt;
            }
            .y3e {
                bottom: 55.520000pt;
            }
            .ya0 {
                bottom: 59.072000pt;
            }
            .y6f {
                bottom: 61.440000pt;
            }
            .y5b {
                bottom: 66.400000pt;
            }
            .y29 {
                bottom: 68.000000pt;
            }
            .y83 {
                bottom: 68.832000pt;
            }
            .y8f {
                bottom: 76.000000pt;
            }
            .y9f {
                bottom: 77.152000pt;
            }
            .y6e {
                bottom: 79.560000pt;
            }
            .y3d {
                bottom: 81.600000pt;
            }
            .y35 {
                bottom: 84.040000pt;
            }
            .y28 {
                bottom: 86.240000pt;
            }
            .y82 {
                bottom: 87.072000pt;
            }
            .y5a {
                bottom: 89.160000pt;
            }
            .y6d {
                bottom: 97.800000pt;
            }
            .y8e {
                bottom: 98.080000pt;
            }
            .y9e {
                bottom: 99.392000pt;
            }
            .y27 {
                bottom: 104.320000pt;
            }
            .y81 {
                bottom: 105.152000pt;
            }
            .y3c {
                bottom: 107.840000pt;
            }
            .y59 {
                bottom: 111.720000pt;
            }
            .y9d {
                bottom: 117.472000pt;
            }
            .y32 {
                bottom: 119.173333pt;
            }
            .y34 {
                bottom: 119.240000pt;
            }
            .y8d {
                bottom: 120.320000pt;
            }
            .y80 {
                bottom: 123.392000pt;
            }
            .y6c {
                bottom: 123.880000pt;
            }
            .y3b {
                bottom: 125.920000pt;
            }
            .y58 {
                bottom: 134.440000pt;
            }
            .y9c {
                bottom: 139.706667pt;
            }
            .y7d {
                bottom: 142.266667pt;
            }
            .y8c {
                bottom: 142.440000pt;
            }
            .y6b {
                bottom: 146.120000pt;
            }
            .y31 {
                bottom: 153.253333pt;
            }
            .y57 {
                bottom: 157.000000pt;
            }
            .y9b {
                bottom: 157.786667pt;
            }
            .y8b {
                bottom: 164.680000pt;
            }
            .y6a {
                bottom: 166.120000pt;
            }
            .y30 {
                bottom: 171.493333pt;
            }
            .y5f {
                bottom: 174.746667pt;
            }
            .y69 {
                bottom: 177.320000pt;
            }
            .y4f {
                bottom: 179.066667pt;
            }
            .y56 {
                bottom: 179.720000pt;
            }
            .y9a {
                bottom: 180.026667pt;
            }
            .y68 {
                bottom: 195.400000pt;
            }
            .y99 {
                bottom: 198.106667pt;
            }
            .y55 {
                bottom: 202.280000pt;
            }
            .y2f {
                bottom: 205.573333pt;
            }
            .y97 {
                bottom: 211.866667pt;
            }
            .y67 {
                bottom: 213.640000pt;
            }
            .y54 {
                bottom: 225.000000pt;
            }
            .y66 {
                bottom: 231.720000pt;
            }
            .y2e {
                bottom: 239.813333pt;
            }
            .y53 {
                bottom: 247.560000pt;
            }
            .y65 {
                bottom: 249.960000pt;
            }
            .y64 {
                bottom: 268.040000pt;
            }
            .y52 {
                bottom: 270.280000pt;
            }
            .y63 {
                bottom: 286.280000pt;
            }
            .y51 {
                bottom: 292.840000pt;
            }
            .y62 {
                bottom: 304.360000pt;
            }
            .y50 {
                bottom: 315.586667pt;
            }
            .y61 {
                bottom: 330.626667pt;
            }
            .y23 {
                bottom: 348.226667pt;
            }
            .y60 {
                bottom: 352.706667pt;
            }
            .y22 {
                bottom: 367.746667pt;
            }
            .y21 {
                bottom: 387.266667pt;
            }
            .y20 {
                bottom: 406.786667pt;
            }
            .y1f {
                bottom: 426.306667pt;
            }
            .y1e {
                bottom: 445.826667pt;
            }
            .y1d {
                bottom: 465.346667pt;
            }
            .ya4 {
                bottom: 480.253333pt;
            }
            .y1c {
                bottom: 484.893333pt;
            }
            .y1b {
                bottom: 504.413333pt;
            }
            .y4c {
                bottom: 511.293333pt;
            }
            .y1a {
                bottom: 523.933333pt;
            }
            .y19 {
                bottom: 543.453333pt;
            }
            .y48 {
                bottom: 544.733333pt;
            }
            .y26 {
                bottom: 551.773333pt;
            }
            .y18 {
                bottom: 562.973333pt;
            }
            .y8a {
                bottom: 573.533333pt;
            }
            .y17 {
                bottom: 582.653333pt;
            }
            .y16 {
                bottom: 602.173333pt;
            }
            .y15 {
                bottom: 621.693333pt;
            }
            .y33 {
                bottom: 628.413333pt;
            }
            .y2d {
                bottom: 628.480000pt;
            }
            .y14 {
                bottom: 641.213333pt;
            }
            .y13 {
                bottom: 660.733333pt;
            }
            .y24 {
                bottom: 666.333333pt;
            }
            .y12 {
                bottom: 680.253333pt;
            }
            .y11 {
                bottom: 699.773333pt;
            }
            .y10 {
                bottom: 719.333333pt;
            }
            .yf {
                bottom: 738.853333pt;
            }
            .y88 {
                bottom: 756.773333pt;
            }
            .ye {
                bottom: 758.373333pt;
            }
            .yd {
                bottom: 777.893333pt;
            }
            .y3a {
                bottom: 778.853333pt;
            }
            .yc {
                bottom: 797.413333pt;
            }
            .y7b {
                bottom: 801.893333pt;
            }
            .yb {
                bottom: 816.933333pt;
            }
            .y79 {
                bottom: 831.333333pt;
            }
            .ya {
                bottom: 836.453333pt;
            }
            .y76 {
                bottom: 855.173333pt;
            }
            .y9 {
                bottom: 856.133333pt;
            }
            .y36 {
                bottom: 871.493333pt;
            }
            .y8 {
                bottom: 875.653333pt;
            }
            .y7 {
                bottom: 895.173333pt;
            }
            .y73 {
                bottom: 902.373333pt;
            }
            .y6 {
                bottom: 914.693333pt;
            }
            .y38 {
                bottom: 923.653333pt;
            }
            .y5 {
                bottom: 934.213333pt;
            }
            .y5d {
                bottom: 951.360000pt;
            }
            .y4 {
                bottom: 953.760000pt;
            }
            .y4a {
                bottom: 955.200000pt;
            }
            .y3 {
                bottom: 973.280000pt;
            }
            .y2 {
                bottom: 992.800000pt;
            }
            .h1d {
                height: 15.680000pt;
            }
            .h1b {
                height: 17.760000pt;
            }
            .h1c {
                height: 18.720000pt;
            }
            .h1e {
                height: 19.680000pt;
            }
            .h1a {
                height: 20.566875pt;
            }
            .h10 {
                height: 21.920000pt;
            }
            .h21 {
                height: 22.080000pt;
            }
            .h23 {
                height: 22.880000pt;
            }
            .hc {
                height: 24.832000pt;
            }
            .h1f {
                height: 26.400000pt;
            }
            .h4 {
                height: 27.680000pt;
            }
            .h26 {
                height: 29.280000pt;
            }
            .h7 {
                height: 40.695937pt;
            }
            .ha {
                height: 42.720000pt;
            }
            .h15 {
                height: 45.108750pt;
            }
            .h25 {
                height: 45.656250pt;
            }
            .h19 {
                height: 45.948800pt;
            }
            .h13 {
                height: 46.720000pt;
            }
            .hf {
                height: 48.000000pt;
            }
            .h5 {
                height: 48.625000pt;
            }
            .hd {
                height: 48.968750pt;
            }
            .h2 {
                height: 63.656250pt;
            }
            .h11 {
                height: 64.800000pt;
            }
            .h3 {
                height: 65.531250pt;
            }
            .h16 {
                height: 66.240000pt;
            }
            .hb {
                height: 103.539375pt;
            }
            .h6 {
                height: 118.560000pt;
            }
            .h20 {
                height: 137.626667pt;
            }
            .he {
                height: 140.160000pt;
            }
            .h12 {
                height: 140.272500pt;
            }
            .h17 {
                height: 177.000000pt;
            }
            .h22 {
                height: 182.906667pt;
            }
            .h24 {
                height: 212.346667pt;
            }
            .h8 {
                height: 254.080000pt;
            }
            .h9 {
                height: 254.106667pt;
            }
            .h14 {
                height: 331.266667pt;
            }
            .h18 {
                height: 366.946667pt;
            }
            .h0 {
                height: 1056.000000pt;
            }
            .h1 {
                height: 1056.666667pt;
            }
            .w12 {
                width: 54.400000pt;
            }
            .w11 {
                width: 55.360000pt;
            }
            .w13 {
                width: 55.520000pt;
            }
            .w10 {
                width: 56.320000pt;
            }
            .we {
                width: 97.312000pt;
            }
            .wd {
                width: 121.632000pt;
            }
            .w18 {
                width: 127.072000pt;
            }
            .w5 {
                width: 202.400000pt;
            }
            .w6 {
                width: 202.466667pt;
            }
            .w8 {
                width: 210.746667pt;
            }
            .w3 {
                width: 230.426667pt;
            }
            .w7 {
                width: 248.066667pt;
            }
            .wc {
                width: 250.786667pt;
            }
            .w17 {
                width: 252.226667pt;
            }
            .w4 {
                width: 253.826667pt;
            }
            .w14 {
                width: 392.066667pt;
            }
            .w9 {
                width: 452.253333pt;
            }
            .wa {
                width: 459.426667pt;
            }
            .wf {
                width: 501.026667pt;
            }
            .wb {
                width: 507.133333pt;
            }
            .w15 {
                width: 517.533333pt;
            }
            .w16 {
                width: 522.973333pt;
            }
            .w2 {
                width: 815.999988pt;
            }
            .w0 {
                width: 816.000000pt;
            }
            .w1 {
                width: 816.666667pt;
            }
            .xe {
                left: -2.400000pt;
            }
            .x0 {
                left: 0.000000pt;
            }
            .x5 {
                left: 9.600000pt;
            }
            .x8 {
                left: 24.000000pt;
            }
            .x4 {
                left: 27.520000pt;
            }
            .x10 {
                left: 33.600000pt;
            }
            .xc {
                left: 38.560000pt;
            }
            .x1 {
                left: 47.999988pt;
            }
            .x6 {
                left: 66.240000pt;
            }
            .x2 {
                left: 69.759988pt;
            }
            .x3 {
                left: 71.359988pt;
            }
            .xd {
                left: 83.200000pt;
            }
            .x7 {
                left: 134.266667pt;
            }
            .x12 {
                left: 145.946667pt;
            }
            .x9 {
                left: 286.466667pt;
            }
            .xf {
                left: 289.826667pt;
            }
            .xb {
                left: 291.426667pt;
            }
            .x11 {
                left: 293.026667pt;
            }
            .xa {
                left: 360.386667pt;
            }
        }
    
        .ff0 {
            font-family: sans-serif;
            visibility: hidden;
        }

        .ff1 {
            font-family: ff1;
            line-height: 1.172852; 
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff2 {
            font-family: ff2;
            line-height: 1.035156;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }
        
        .ff3 {
            font-family: ff3;
            line-height: 0.969727;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff4 {
            font-family: ff4;
            line-height: 1.008301;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff5 {
            font-family: ff5;
            line-height: 1.005371;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff6 {
            font-family: ff6;
            line-height: 1.008301;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff7 {
            font-family: ff7;
            line-height: 0.773926;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff8 {
            font-family: ff8;
            line-height: 0.912109;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ff9 {
            font-family: ff9;
            line-height: 0.937988;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ffa {
            font-family: ffa;
            line-height: 0.910156;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ffb {
            font-family: ffb;
            line-height: 1.089;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .ffc {
            font-family: ffc;
            line-height: 0.919434;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }
        
        @font-face {
            font-family: ff1;
            src: url('/public/resume/fonts/oUnzLOSN.woff') format('woff');
        }
        
        @font-face {
            font-family: ff2;
            src: url('/public/resume/fonts/PHNR97h8.woff') format('woff');
        }

        @font-face {
            font-family: ff3;
            font-weight: normal;
            font-style: normal;
            src: url('/public/resume/fonts/hGt6WUe6.woff') format('woff');
        }

        @font-face {
            font-family: ff3;
            src: url('/public/resume/fonts/7l3mBMWO.woff') format('woff');
        }

        @font-face {
            font-family: ff4;
            src: url('/public/resume/fonts/Fkk98Ksc.woff') format('woff');
        }

        @font-face {
            font-family: ff5;
            src: url('/public/resume/fonts/t69ordDW.woff') format('woff');
        }

        @font-face {
            font-family: ff6;
            src: url('/public/resume/fonts/xRS2rGor.woff') format('woff');
        }

        @font-face {
            font-family: ff7;
            src: url('/public/resume/fonts/font7.woff') format('woff');
        }

        @font-face {
            font-family: ff8;
            src: url('/public/resume/fonts/font8.woff') format('woff');
        }

        @font-face {
            font-family: ff9;
            src: url('/public/resume/fonts/font9.woff') format('woff');
        }

        @font-face {
            font-family: ffa;
            src: url('/public/resume/fonts/fontA.woff') format('woff');
        }

        @font-face {
            font-family: ffb;
            src: url('/public/resume/fonts/fontB.woff') format('woff');
        }

        @font-face {
            font-family: ffc;
            src: url('/public/resume/fonts/fontC.woff') format('woff');
        }

    `}</style>
  );

  return (
        <>
        <div id="sidebar">
            <div id="outline">
            </div>
        </div>
        <div id="page-container">
            <div id="pf1" className="pf w0 h0" data-page-no="1">
                <div className="pc pc1 w0 h0">
                    <img className="bi x0 y0 w1 h1" alt="" src="/public/resume/template.png"/>
                    <div className="c x0 y1 w2 h0">
                    <div className="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls7 wsc"> 
                </div>
                <div className="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 ls7 wsc"></div>
                <div className="t m0 x1 h2 y4 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y5 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y6 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y7 ff1 fs0 fc0 sc0 ls7 wsc"> <span className="_ _0"> </span> <span className="_ _0"> </span> <span className="_ _0"> </span> <span className="_ _0"> </span> <span className="_ _0"> </span> <span className="_ _0"> </span> </div>
                <div className="t m0 x2 h2 y8 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x2 h2 y9 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x3 h2 ya ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x2 h2 yb ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 yc ff1 fs0 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x1 h2 yd ff1 fs0 fc1 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 ye ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 yf ff1 fs0 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x1 h2 y10 ff1 fs0 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x1 h2 y11 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y12 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y13 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y14 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y15 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y16 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y17 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y18 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y19 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y1a ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y1b ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y1c ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y1d ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y1e ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y1f ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y20 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y21 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h2 y22 ff1 fs0 fc0 sc0 ls7 wsc"> </div>
                <div className="t m0 x1 h3 y23 ff2 fs0 fc0 sc0 ls7 wsc"> </div>
            </div>
            <div className="c x4 y24 w3 h4">
                <div className="t m0 x5 h5 y25 ff3 fs0 fc2 sc0 ls7 wsc">O<span className="_ _1"> </span>B<span className="_ _1"> </span>J<span className="_ _1"> </span>E<span className="_ _1"> </span>C<span className="_ _1"> </span>T<span className="_ _1"> </span>I<span className="_ _1"> </span>V<span className="_ _1"> </span>E<span className="_ _1"> </span> 
                </div>
            </div>
            <div className="c x4 y26 w4 h6">
                <div className="t m0 x5 h7 y27 ff4 fs1 fc2 sc0 ls7 wsc">Seeking <span className="_ _2"></span>a dynamic role that </div>
                <div className="t m0 x5 h7 y28 ff4 fs1 fc2 sc0 ls7 wsc">capitalizes on my r<span className="_ _2"></span>esourcefulne<span className="_ _2"></span>ss to </div>
                <div className="t m0 x5 h7 y29 ff4 fs1 fc2 sc0 ls7 wsc">tackle challeng<span className="_ _2"></span>es, allowing<span className="_ _2"></span> me to </div>
                <div className="t m0 x5 h7 y2a ff4 fs1 fc2 sc0 ls7 wsc">continuously learn an<span className="_ _2"></span>d acquire<span className="_ _2"></span> </div>
                <div className="t m0 x5 h7 y2b ff4 fs1 fc2 sc0 ls7 wsc">valuable ex<span className="_ _2"></span>perience <span className="_ _2"></span>in a professional <div>
                <div className="t m0 x5 h7 y2c ff4 fs1 fc2 sc0 ls7 wsc">setting.  </div>
            </div>
            <div className="c x6 y2d w5 h8">
                <div className="t m0 x5 h7 y2e ff4 fs1 fc2 sc0 ls7 wsc">rileylawson00@g<span className="_ _2"></span>mail.com </div><div className="t m0 x5 h7 y2f ff4 fs1 fc2 sc0 ls7 ws0">515-<span className="ls0 ws1">657</span><span className="wsc">-3605 </span></div>
                <div className="t m0 x5 h7 y30 ff4 fs1 fc2 sc0 ls7 ws0">linkedin/in/rile<span className="_ _2"></span>y-lawson-</div>
                <div className="t m0 x5 h7 y31 ff4 fs1 fc2 sc0 ls7 wsc">a7a65b203<span className="_ _2"></span> </div>
                <div className="t m0 x5 h7 y32 ff4 fs1 fc2 sc0 ls7 ws0">github.com/tech<span className="_ _2"></span>180</div>
            </div>
            <div className="c x6 y33 w6 h9">
                <div className="t m0 x7 h2 y34 ff1 fs0 fc0 sc0 ls7 wsc">  </div>
                <div className="t m0 x5 h2 y35 ff1 fs0 fc2 sc0 ls7 wsc">riley.lawsonserver.org </div>
            </div>
            <div className="c x8 y36 w7 ha">
                <div className="t m0 x5 hb y37 ff3 fs0 fc2 sc0 ls7 ws2">C<span className="_"> </span>O<span className="_"> </span>N<span className="_"> </span>T<span className="_"> </span>A<span className="_"> </span>C<span className="_ _3"> </span>T<span className="_ _1"> </span><span className="ff2 fs2 wsc"> </span></div>
            </div>
            <div className="c x9 y38 w8 hc">
                <div className="t m0 x5 hd y39 ff5 fs0 fc0 sc1 ls7 wsc">E<span className="_"> </span>D<span className="_"> </span>U<span className="_ _4"> </span>C<span className="_"> </span>A<span className="_"> </span>T<span className="_ _4"> </span>I<span className="_"> </span>O<span className="_ _4"> </span>N<span className="_"> </span> </div>
            </div>
            <div className="c xa y3a w9 he">
                <div className="t m0 x5 h7 y3b ff4 fs1 fc3 sc0 ls7 wsc">I<span className="_ _5"> </span>O<span className="_ _5"> </span>W<span className="_ _5"> </span>A<span className="_ _5"> </span> <span className="_ _5"> </span>S<span className="_ _5"> </span>T<span className="_ _5"> </span>A<span className="_ _5"> </span>T<span className="_ _5"> </span>E<span className="_ _5"> </span> <span className="_ _5"> </span>U<span className="_ _5"> </span>N<span className="_ _5"> </span>I<span className="_ _5"> </span>V<span className="_ _5"> </span>E<span className="_ _5"> </span>R<span className="_ _5"> </span>S<span className="_ _5"> </span>I<span className="_ _5"> </span>T<span className="_ _5"> </span>Y<span className="_ _6"> </span> <span className="_ _5"> </span><span className="ls8">| </span><span className="fc4">A<span className="_ _2"></span>ugust 2019 <span className="ff6 ls1">–</span> Decembe<span className="_ _2"></span>r 2023</span>  </div>
                <div className="t m0 x5 h7 y3c ff4 fs1 fc4 sc0 ls7 wsc">B.S. Software Engine<span className="_ _2"></span>ering; <span className="_ _2"></span>Minor in Cybersec<span className="_ _2"></span>urity<span className="ls2">     </span>GPA: 2.73<span className="_ _2"></span><span className="fc3"> </span></div>
                <div className="t m0 x5 h7 y3d ff4 fs1 fc3 sc0 ls7 wsc">D<span className="_ _5"> </span>M<span className="_ _5"> </span>A<span className="_ _5"> </span>C<span className="_ _5"> </span>C<span className="_ _5"> </span> <span className="_ _5"> </span>|<span className="_ _5"> </span> <span className="_ _5"> </span><span className="fc4">July 2020 <span className="ff6 ls1">–</span> A<span className="_ _2"></span>ugust 2021 </span></div>
                <div className="t m0 x5 h7 y3e ff4 fs1 fc3 sc0 ls7 wsc">M<span className="_ _5"> </span>A<span className="_ _5"> </span>D<span className="_ _5"> </span>R<span className="_ _5"> </span>I<span className="_ _5"> </span>D<span className="_ _5"> </span> <span className="_ _5"> </span>H<span className="_ _5"> </span>I<span className="_ _5"> </span>G<span className="_ _5"> </span>H<span className="_ _5"> </span> <span className="_ _5"> </span>S<span className="_ _5"> </span>C<span className="_ _5"> </span>H<span className="_ _5"> </span>O<span className="_ _5"> </span>O<span className="_ _5"> </span>L<span className="_ _5"> </span> <span className="_ _6"> </span><span className="ls8">| </span><span className="fc4">Augus<span className="_ _2"></span>t <span className="ls9">2014 <span className="ff6 ls1">–</span></span> M<span className="_ _2"></span>ay 2019<span className="_ _2"></span></span> </div>
                <div className="t m0 x5 h7 y3f ff4 fs1 fc3 sc0 ls7 wsc">D<span className="_ _5"> </span>M<span className="_ _5"> </span>A<span className="_ _5"> </span>C<span className="_ _5"> </span>C<span className="_ _5"> </span> <span className="_ _5"> </span><span className="ls8">| <span className="_ _2"></span></span><span className="fc4">August 2017 <span className="ff6 ls1">–</span> May <span className="_ _2"></span>2019  </span></div>
                <div className="t m0 x5 h7 y40 ff4 fs1 fc4 sc0 ls7 wsc">Graduated high s<span className="_ _2"></span>chool with 18 colleg<span className="_ _2"></span>e credits<span className="_ _2"></span> </div>
                <div className="t m0 x5 h7 y41 ff4 fs1 fc4 sc0 ls7 wsc"> </div>
                <div className="t m0 x5 h7 y42 ff4 fs1 fc4 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 h7 y43 ff4 fs1 fc4 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 h7 y44 ff4 fs1 fc4 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 h7 y45 ff4 fs1 fc3 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 hf y46 ff7 fs0 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 hf y47 ff7 fs0 fc3 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
            </div>
            <div className="c x9 y48 wa h10">
                    <div className="t m0 x5 hd y49 ff5 fs0 fc0 sc1 ls7 wsc">E<span className="_"> </span>X<span className="_ _4"> </span>P<span className="_"> </span>E<span className="_"> </span>R<span className="_"> </span>I<span className="_ _4"> </span>E<span className="_"> </span>N<span className="_ _4"> </span>C<span className="_"> </span>E<span className="_"> </span> </div>
            </div>
            <div className="c xb y4a wb h11">
                <div className="t m0 xc h12 y4b ff8 fs3 fc0 sc0 ls7 wsc">R<span className="_ _4"></span>I<span className="_ _7"></span>L<span className="_ _4"></span>E<span className="_ _7"></span>Y<span className="_ _4"></span> <span className="_ _4"></span>J<span className="_ _7"></span>.<span className="_ _4"></span> <span className="_ _4"></span>L<span className="_ _7"></span>A<span className="_ _4"></span>W<span className="_ _7"></span>S<span className="_ _4"></span>O<span className="_ _7"></span>N<span className="_ _7"></span><span className="ff7 fs4"> </span></div>
            </div>
            <div className="c x4 y4c wc h13">
                <div className="t m0 x5 h5 y4d ff3 fs0 fc2 sc0 ls7 wsc">T<span className="_ _1"> </span>E<span className="_ _1"> </span>C<span className="_ _1"> </span>H<span className="_ _1"> </span>N<span className="_ _1"> </span>O<span className="_ _1"> </span>L<span className="_ _1"> </span>O<span className="_ _1"> </span>G<span className="_ _1"> </span>Y<span className="_ _1"> </span>/<span className="_ _1"> </span> </div>
                <div className="t m0 x5 h5 y4e ff3 fs0 fc2 sc0 ls7 wsc">L<span className="_ _1"> </span>A<span className="_ _1"> </span>N<span className="_ _1"> </span>G<span className="_ _1"> </span>U<span className="_ _1"> </span>A<span className="_ _1"> </span>G<span className="_ _1"> </span>E<span className="_ _1"> </span>S<span className="_ _1"> </span> </div>
            </div>
            <div className="c x4 y4f wd h14">
                <div className="t m0 x5 h15 y50 ff4 fs5 fc2 sc0 ls7 wsc">Linux </div>
                <div className="t m0 x5 h15 y51 ff4 fs5 fc2 sc0 ls7 wsc">Java </div>
                <div className="t m0 x5 h15 y52 ff4 fs5 fc2 sc0 ls7 wsc">Kotlin </div>
                <div className="t m0 x5 h15 y53 ff4 fs5 fc2 sc0 ls7 wsc">JavaScript </div>
                <div className="t m0 x5 h15 y54 ff4 fs5 fc2 sc0 ls7 wsc">React </div>
                <div className="t m0 x5 h15 y55 ff4 fs5 fc2 sc0 ls7 wsc">Node.js </div>
                <div className="t m0 x5 h15 y56 ff4 fs5 fc2 sc0 lsa ws3">C#<span className="ls7 wsc"> </span></div>
                <div className="t m0 x5 h15 y57 ff4 fs5 fc2 sc0 ls7 wsc">HTML/CSS </div>
                <div className="t m0 x5 h15 y58 ff4 fs5 fc2 sc0 ls7 wsc">Python </div>
                <div className="t m0 x5 h15 y59 ff4 fs5 fc2 sc0 ls7 wsc">Shell </div>
                <div className="t m0 x5 h15 y5a ff4 fs5 fc2 sc0 ls7 wsc">C </div>
                <div className="t m0 x5 h15 y5b ff4 fs5 fc2 sc0 ls7 wsc">SQL/mySQL </div>
                <div className="t m0 x5 h15 y5c ff4 fs5 fc2 sc0 ls7 wsc"> </div>
            </div>
            <div className="c xd y5d we h16">
                <div className="t m0 xe h17 y5e ff8 fs6 fc2 sc0 ls7 wsc">R|L </div>
            </div>
            <div className="c xf y5f wf h18">
                <div className="t m0 x5 h7 y60 ff5 fs1 fc3 sc2 ls7 wsc">S<span className="_ _5"> </span>o<span className="_ _5"> </span>f<span className="_ _5"> </span>t<span className="_ _5"> </span>w<span className="_ _5"> </span>a<span className="_ _5"> </span>r<span className="_ _5"> </span>e<span className="_ _5"> </span> <span className="_ _5"> </span>E<span className="_ _5"> </span>n<span className="_ _5"> </span>g<span className="_ _5"> </span>i<span className="_ _5"> </span>n<span className="_ _5"> </span>e<span className="_ _5"> </span>e<span className="_ _5"> </span>r<span className="_ _5"> </span>i<span className="_ _5"> </span>n<span className="_ _5"> </span>g<span className="_ _5"> </span> <span className="_ _5"> </span>I<span className="_ _5"> </span>n<span className="_ _5"> </span>t<span className="_ _5"> </span>e<span className="_ _5"> </span>r<span className="_ _5"> </span>n<span className="_"> </span><span className="ff4 sc0 ls2"> <span className="lsb">| <span className="fc4 ls7">iSO-FORM LLC<span className="fc0"> </span></span></span></span></div>
                <div className="t m0 x5 h7 y61 ff9 fs1 fc3 sc0 ls3 ws4">2022<span className="ls2 wsc"> - </span>2023<span className="ff4 fc0 ls7 wsc"> </span></div>
                <div className="t m0 x5 h7 y62 ff4 fs1 fc0 sc0 lsc wsc">A <span className="ls7">Company dedicated to c<span className="_ _2"></span>reating memor<span className="_ _2"></span>able, immersive<span className="_ _2"></span> <span className="_ _2"></span>medical </span></div>
                <div className="t m0 x5 h7 y63 ff4 fs1 fc0 sc0 ls7 wsc">experienc<span className="_ _2"></span>es through virtual reality, educ<span className="_ _2"></span>ational gaming<span className="_ _2"></span>, real<span className="_ _2"></span>-time 3D, and </div>
                <div className="t m0 x5 h7 y64 ff4 fs1 fc0 sc0 ls7 wsc">augmented reality<span className="_ _2"></span> </div>
                <div className="t m0 x5 h19 y65 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Created browser<span className="_ _2"></span>-based applic<span className="_ _2"></span>ations in both JavaSc<span className="_ _2"></span>ript and C#<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x5 h19 y66 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Working with g<span className="_ _2"></span>ame engines <span className="_ _2"></span>to create UX <span className="_ _2"></span>like expe<span className="_ _2"></span>riences utilizing<span className="_ _2"></span> Unity </span></span></div>
                <div className="t m0 x10 h7 y67 ff4 fs1 fc0 sc0 ls7 wsc">and PlayCanvas<span className="_ _2"></span> </div>
                <div className="t m0 x5 h19 y68 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Created an automated s<span className="_ _2"></span>creenshot c<span className="_ _2"></span>ontroller<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x5 h19 y69 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Team and client-bas<span className="_ _2"></span>ed collabora<span className="_ _2"></span>tion </span></span></div>
                <div className="t m0 x5 h1a y6a ff5 fs7 fc3 sc2 ls7 wsc"> </div>
                <div className="t m0 x5 h7 y6b ff5 fs1 fc3 sc2 ls7 ws6">F<span className="_"> </span>o<span className="_"> </span>u<span className="_"> </span>n<span className="_"> </span>d<span className="_"> </span>e<span className="_"> </span>r<span className="_"> </span><span className="ff4 sc0 wsc"> <span className="ls3">| </span><span className="ff6 fc4">Lawson’s Mowing<span className="_ _2"></span> Service</span><span className="fc0"> </span></span></div>
                <div className="t m0 x5 h7 y6c ff9 fs1 fc3 sc0 ls3 ws4">2012<span className="ls2 wsc"> - </span>2023<span className="ff4 fc0 ls7 wsc"> </span></div>
                <div className="t m0 x5 h7 y6d ff4 fs1 fc0 sc0 ls7 wsc">A skillful entre<span className="_ _2"></span>preneur of a small busines<span className="_ _2"></span>s with demonstrated abi<span className="_ _2"></span>lity to </div>
                <div className="t m0 x5 h7 y6e ff4 fs1 fc0 sc0 ls7 wsc">success<span className="_ _2"></span>fully own, grow, and operate a busine<span className="_ _2"></span>ss venture<span className="_ _2"></span> </div>
                <div className="t m0 x5 h19 y6f ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">High quality mowing<span className="_ _2"></span> services </span></span></div>
                <div className="t m0 x5 h19 y70 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Operation of and main<span className="_ _2"></span>tenance <span className="_ _2"></span>of lawn equipment<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x5 h19 y71 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Client account manageme<span className="_ _2"></span>nt<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x5 h19 y72 ffa fs1 fc0 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Delegation and direc<span className="_ _2"></span>tion to others<span className="_ _2"></span> </span></span></div>
                </div>
            <div className="c xb y73 w10 h1b">
                <div className="t m0 x5 h7 y74 ff4 fs1 fc3 sc0 ls9 ws7">20<span className="ls0 ws1">23<span className="ls7 wsc"> </span></span></div>
                <div className="t m0 x5 hf y75 ff7 fs0 fc3 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
            </div>
            <div className="c xb y76 w11 h1c">
                <div className="t m0 x5 h7 y77 ff4 fs1 fc3 sc0 ls9 ws7">20<span className="ls0 ws1">21<span className="ls7 wsc"> </span></span></div>
                <div className="t m0 x5 hf y78 ff7 fs0 fc3 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
            </div>
            <div className="c xb y79 w12 h1d">
                <div className="t m0 x5 hf y7a ff4 fs1 fc3 sc0 ls7 ws0">2019<span className="ff7 fs0 wsc"> </span></div>
            </div>
            <div className="c xb y7b w13 h1e">
                <div className="t m0 x5 hf y7c ff4 fs1 fc3 sc0 ls7 ws0">2019<span className="ff7 fs0 wsc"> </span></div>
            </div>
            <div className="c x9 y7d w14 h1f">
                <div className="t m0 x5 hd y7e ff5 fs0 fc0 sc1 ls7 wsc">E<span className="_"> </span>X<span className="_"> </span>T<span className="_ _4"> </span>R<span className="_"> </span>A<span className="_ _4"> </span> <span className="_"> </span>C<span className="_"> </span>U<span className="_"> </span>R<span className="_ _4"> </span>R<span className="_"> </span>I<span className="_"> </span>C<span className="_ _4"> </span>U<span className="_"> </span>L<span className="_ _4"> </span>A<span className="_"> </span>R<span className="_"> </span>/<span className="_ _4"> </span>L<span className="_"> </span>E<span className="_"> </span>A<span className="_ _4"> </span>D<span className="_"> </span>E<span className="_"> </span>R<span className="_ _4"> </span>S<span className="_"> </span>H<span className="_"> </span>I<span className="_ _4"> </span>P<span className="_ _8"> </span> </div>
            </div>
            <div className="c xf y7f w15 h20">
                <div className="t m0 x5 h19 y80 ffa fs1 fc3 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Computer Scienc<span className="_ _2"></span>e &amp; Software Enginee<span className="_ _2"></span>ring Club, Member<span className="_ _2"></span> <span className="_ _2"></span><span className="ls3">| </span>January 2021 <span className="ff6 ls1">–</span> </span></span></div>
                <div className="t m0 x10 h7 y81 ff4 fs1 fc3 sc0 ls7 wsc">December <span className="_ _2"></span>2023 </div>
                <div className="t m0 x5 h19 y82 ffa fs1 fc3 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Web Deve<span className="_ _2"></span>lopment Club, Member<span className="_ _2"></span> <span className="ls3">| </span>Aug<span className="_ _2"></span>ust 2021 <span className="ff6 ls1">–</span> Dec<span className="_ _2"></span>ember 2023 </span></span></div>
                <div className="t m0 x5 h19 y83 ffa fs1 fc3 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Ethics of Technology <span className="_ _2"></span>Club, Membe<span className="_ _2"></span>r <span className="ls3">| <span className="_ _2"></span></span>August 2021 <span className="ff6 ls1">–</span> May 2022<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x5 h19 y84 ffa fs1 fc3 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Linux Club, Member <span className="_ _2"></span><span className="ls3">| </span>August 2019 <span className="_ _2"></span><span className="ff6 ls1">–</span> May 2020 </span></span></div>
                <div className="t m0 x5 h19 y85 ffa fs1 fc3 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Pokémon Club, Treasure<span className="_ _2"></span>r | Aug<span className="_ _2"></span>ust 2019 - D<span className="_ _2"></span>ecember 2023 </span></span></div>
                <div className="t m0 x5 h19 y86 ffa fs1 fc3 sc0 ls7 ws5">•<span className="ffb ls4 wsc"> <span className="ff4 ls7">Iowa State Statesmen Cho<span className="_ _2"></span>ir <span className="_ _2"></span><span className="ls3">| </span>August 2019 <span className="ff6 ls1">–</span> May 2023<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x10 h7 y87 ff4 fs1 fc3 sc0 ls7 wsc"> </div>
            </div>
            <div className="c x9 y88 wa h21">
                <div className="t m0 x5 hd y89 ff5 fs0 fc0 sc1 ls7 wsc">P<span className="_"> </span>R<span className="_"> </span>O<span className="_ _4"> </span>J<span className="_"> </span>E<span className="_"> </span>C<span className="_ _4"> </span>T<span className="_"> </span>S<span className="_"> </span> </div>
            </div>
            <div className="c x11 y8a w16 h22">
                <div className="t m0 x5 h7 y8b ff5 fs1 fc3 sc2 ls7 wsc">A<span className="_ _5"> </span>u<span className="_ _5"> </span>t<span className="_ _5"> </span>o<span className="_ _5"> </span>n<span className="_ _5"> </span>o<span className="_ _5"> </span>m<span className="_ _5"> </span>o<span className="_ _5"> </span>u<span className="_ _5"> </span>s<span className="_ _5"> </span> <span className="_ _5"> </span>R<span className="_ _5"> </span>o<span className="_ _5"> </span>b<span className="_ _5"> </span>o<span className="_ _5"> </span>t<span className="_"> </span><span className="ff4 sc0"> <span className="_ _9"></span><span className="ls3">| <span className="fc4 ls7 ws0">Roomba<span className="fc0 wsc"> </span></span></span></span></div>
                <div className="t m0 x5 h7 y8c ff5 fs1 fc0 sc1 ls7 wsc">A<span className="_ _5"> </span>S<span className="_ _5"> </span>C<span className="_ _5"> </span>I<span className="_ _5"> </span>I<span className="_ _5"> </span> <span className="_ _5"> </span>C<span className="_ _5"> </span>a<span className="_ _5"> </span>n<span className="_ _5"> </span>v<span className="_ _5"> </span>a<span className="_ _5"> </span>s<span className="_ _6"> </span><span className="ff4 sc0"> <span className="ls3">| </span><span className="fc5">Art Canvas based on A<span className="_ _2"></span>SCII characters<span className="_ _2"></span> </span></span></div>
                <div className="t m0 x5 h7 y8d ff5 fs1 fc0 sc1 ls7 wsc">P<span className="_ _5"> </span>r<span className="_ _5"> </span>o<span className="_ _5"> </span>j<span className="_ _5"> </span>e<span className="_ _5"> </span>c<span className="_ _5"> </span>t<span className="_ _5"> </span> <span className="_ _5"> </span>R<span className="_ _5"> </span>e<span className="_ _5"> </span>l<span className="_ _5"> </span>i<span className="_ _5"> </span>n<span className="_ _5"> </span>e<span className="_"> </span><span className="ff4 sc0"> <span className="_ _9"></span><span className="ls3">| <span className="fc5 ls7">Smart phone App<span className="fc0"> </span></span></span></span></div>
                <div className="t m0 x5 h7 y8e ff5 fs1 fc0 sc1 ls7 wsc">B<span className="_ _5"> </span>a<span className="_ _5"> </span>n<span className="_ _5"> </span>k<span className="_ _5"> </span> <span className="_ _5"> </span>S<span className="_ _5"> </span>e<span className="_ _5"> </span>r<span className="_ _5"> </span>v<span className="_ _5"> </span>e<span className="_ _5"> </span>r<span className="_ _5"> </span><span className="ff4 sc0 ls2"> <span className="ls3">| <span className="fc5 ls7">Multi-<span className="_ _2"></span>threaded  </span></span></span></div>
                <div className="t m0 x5 h7 y8f ff5 fs1 fc0 sc1 ls7 wsc">V<span className="_ _5"> </span>e<span className="_ _5"> </span>h<span className="_ _5"> </span>i<span className="_ _5"> </span>c<span className="_ _5"> </span>l<span className="_ _5"> </span>e<span className="_ _5"> </span> <span className="_ _5"> </span>S<span className="_ _5"> </span>e<span className="_ _5"> </span>c<span className="_ _5"> </span>u<span className="_ _5"> </span>r<span className="_ _5"> </span>i<span className="_ _5"> </span>t<span className="_ _5"> </span>y<span className="_ _6"> </span><span className="ff4 sc0 ls5"> <span className="ls3">| <span className="fc5 ls7">Encrypting CAN Bus (Bac<span className="_ _2"></span>kwards Compatible with CAN<span className="_ _2"></span>FD) <span className="_ _2"></span> </span></span></span></div>
                <div className="t m0 x5 h7 y90 ff5 fs1 fc0 sc1 ls7 ws8">W<span className="_"> </span>e<span className="_"> </span>b<span className="_ _5"> </span>s<span className="_ _6"> </span>i<span className="_"> </span>t<span className="_"> </span>e<span className="_ _5"> </span><span className="ff4 sc0 ls2 wsc"> <span className="lsb">| <span className="_ _2"></span><span className="fc5 ls7">Developed<span className="_ _2"></span> with React  </span></span></span></div>
                <div className="t m0 x5 h7 y2b ff5 fs1 fc0 sc1 ls6">A<span className="lsd ws9">rc</span><span className="ls7 ws6">Z<span className="_"> </span>o<span className="_"> </span>n<span className="_"> </span>e<span className="_"> </span><span className="ff4 sc0 wsc"> <span className="ls3">| </span><span className="fc5">Arcade App<span className="_ _2"></span> configured with <span className="_ _2"></span>Google Firebase<span className="_ _2"></span> </span></span></span></div>
                <div className="t m0 x5 h7 y91 ff5 fs1 fc0 sc1 ls7 wsa">M<span className="_"> </span>u<span className="_"> </span>s<span className="_"> </span>i<span className="_"> </span>c<span className="_"> </span>i<span className="_"> </span>f<span className="_"> </span>y<span className="_"> </span><span className="ff4 sc0 ls2 wsc"> <span className="lsb">| <span className="fc5 ls7">Music App utilizing the <span className="_ _2"></span>Subsonic A<span className="_ _2"></span>PI  </span></span></span><div>
                <div className="t m0 x5 h7 y92 ff4 fs1 fc5 sc0 ls7 wsc"> </div>
                <div className="t m0 x5 h7 y93 ff4 fs1 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 h7 y94 ff4 fs1 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 h7 y95 ff4 fs1 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
                <div className="t m0 x5 h7 y96 ff4 fs1 fc0 sc0 ls7 wsc"><span className="fc6 sc0"> </span></div>
            </div>
            <div className="c x4 y97 w4 h23">
                <div className="t m0 x5 h5 y98 ff3 fs0 fc2 sc0 ls7 wsc">S<span className="_ _1"> </span>K<span className="_ _1"> </span>I<span className="_ _1"> </span>L<span className="_ _1"> </span>L<span className="_ _1"> </span>S<span className="_ _1"> </span> </div>
            </div>
            <div className="c x4 y1 w17 h24">
                <div className="t m0 x5 h7 y99 ff4 fs1 fc2 sc0 ls7 wsc">Strong analytical, tro<span className="_ _2"></span>ubleshooting<span className="_ _2"></span>, </div>
                <div className="t m0 x5 h7 y9a ff4 fs1 fc2 sc0 ls7 wsc">and problem-solving<span className="_ _2"></span> abilities<span className="_ _2"></span> </div>
                <div className="t m0 x5 h7 y9b ff4 fs1 fc2 sc0 ls7 wsc">Curious mindset<span className="_ _2"></span> with a commitment </div>
                <div className="t m0 x5 h7 y9c ff4 fs1 fc2 sc0 lse wsb">to<span className="ls7 wsc"> continuous <span className="_ _2"></span>learning<span className="_ _2"></span> </span></div>
                <div className="t m0 x5 h7 y9d ff4 fs1 fc2 sc0 ls7 wsc">Balanced blend<span className="_ _2"></span> of humility <span className="_ _2"></span>and </div>
                <div className="t m0 x5 h7 y9e ff4 fs1 fc2 sc0 ls7 wsc">confidence <span className="_ _2"></span>in decision-<span className="_ _2"></span>making </div>
                <div className="t m0 x5 h7 y9f ff4 fs1 fc2 sc0 ls7 wsc">Demonstrated re<span className="_ _2"></span>sponsibility <span className="_ _2"></span>and </div>
                <div className="t m0 x5 h7 ya0 ff4 fs1 fc2 sc0 ls7 wsc">reliability in previous<span className="_ _2"></span> roles </div>
                <div className="t m0 x5 h7 ya1 ff4 fs1 fc2 sc0 ls7 wsc">Energetic <span className="_ _2"></span>and hard-working<span className="_ _2"></span>, with </div>
                <div className="t m0 x5 h25 ya2 ff4 fs1 fc2 sc0 ls7 wsc">effective <span className="_ _2"></span>communication skill<span className="_ _2"></span>s<span className="fc0 ws0">,<span className="ffc fs0 wsc"> </span></span></div>
                <div className="t m0 x5 h25 ya3 ffc fs0 fc0 sc0 ls7 wsc">troubleshooting and problem </div>
            </div>
            <div className="c x12 ya4 w18 h26">
                <div className="t m0 x5 h15 y2c ff4 fs5 fc2 sc0 ls7 wsc">NixOS </div>
            </div>
            </div>
            <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
            </div>
        </div>
    </>
    </>
    </>
    </>
    </>

  );
}

export default ResumeTest;

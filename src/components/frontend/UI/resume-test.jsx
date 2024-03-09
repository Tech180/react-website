import React, { useState, useEffect } from 'react';
import { Darklight } from './toggle/darklight';
import { useCookies } from 'react-cookie';
import Background from './background';

function ResumeTest() {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  const styles = () => (
    <style jsx>{`  
        .pf {
            position: relative;
            margin: auto;
        }

        .c {
            position: absolute;
        }

        .t {
            position: absolute;
            white-space:pre;
            transform-origin: 0 100%;
        }
         
        .m0 {
            transform:matrix(0.25, 0, 0, 0.25, 0, 0);
        }

        .ff1 {
            font-family:ff1;
        }

        .ff2 {
            font-family:ff2;
        }

        .ff3 {
            font-family:ff3;
        }

        .ff4 {
            font-family:ff4;
        }

        .ff5 {
            font-family:ff5;
        }

        .ff6 {
            font-family:ff6;
        }  
        
        .ff7 {
            font-family:ff7;
        }
        
        .ff8 {
            font-family:ff8;
        }
        
        .ff9 {
            font-family:ff9;
        }      
        
        .ffa {
            font-family:ffa;
        }
        
        .ffb {
            font-family:ffb;
        }
        
        .ffc {
            font-family:ffc;
        }

        @font-face {
            font-family:ff1;
            src:url('/resume/fonts/font1.woff')format("woff");
        }

        @font-face {
            font-family:ff2;
            src:url('/resume/fonts/font2.woff')format("woff");
        }         
        
        @font-face {
            font-family:ff3;
            src:url('/resume/fonts/font3.woff')format("woff");
        }
        
        @font-face {
            font-family:ff4;
            src:url('/resume/fonts/font4.woff')format("woff");
        }            

        @font-face {
            font-family:ff5;
            src:url('/resume/fonts/font5.woff')format("woff");
        }
        
        @font-face {
            font-family:ff6;
            src:url('/resume/fonts/font6.woff')format("woff");
        }
        
        @font-face {
            font-family:ff7;
            src:url('/resume/fonts/font7.woff')format("woff");
        }
            
        @font-face {
            font-family:ff8;
            src:url('/resume/fonts/font8.woff')format("woff");
        }
            
        @font-face {
            font-family:ff9;
            src:url('/resume/fonts/font9.woff')format("woff");
        }  
        
        @font-face {
            font-family:ffa;
            src:url('/resume/fonts/fonta.woff')format("woff");
        }
        
        @font-face {
            font-family:ffb;
            src:url('/resume/fonts/fontb.woff')format("woff");
        }
        
        @font-face {
            font-family:ffc;
            src:url('/resume/fonts/fontc.woff')format("woff");
        }



        .fc5{
            color:rgb(128,128,128);
        }


        /* left sidebar */
        .fc2 {
            color:rgb(255,255,255);
        }

        /* all of them except technologies */
        .fs1 { 
            font-size: 40px;
        }


        .fs5 {
            font-size: 44px;
        }

        /* titles */
        .fs0 {
            font-size: 48px;
        }

        /* Header */
        .fs3{
            font-size: 153px;
        }

        /* logo */
        .fs6{
            font-size: 192px;
        }



        .y1{bottom:0px;}

        .y7f{bottom:0.120000px;}

        .y7a{bottom:1.080000px;}

        .y74{bottom:2.640000px;}

        .y77{bottom:3.360000px;}

        .y49{bottom:3.600000px;}

        .y89{bottom:3.720000px;}

        .y7c{bottom:4.080000px;}

        .y98{bottom:4.320000px;}

        .y72{bottom:5.040000px;}

        .y39{bottom:5.640000px;}

        .y4e{bottom:5.880000px;}

        .y7e{bottom:6.840000px;}

        .y91{bottom:7.080000px;}

        .y25{bottom:7.920000px;}

        .y40{bottom:8.400000px;}

        .y5e{bottom:9.840000px;}

        .y2c{bottom:10.200000px;}

        .y86{bottom:10.800000px;}

        .ya2{bottom:14.064000px;}

        .y4b{bottom:16.920000px;}

        .y71{bottom:18.840000px;}

        .y37{bottom:19.200000px;}

        .y3f{bottom:21.960000px;}

        .y4d{bottom:22.200000px;}

        .y2b{bottom:23.760000px;}

        .y85{bottom:24.384000px;}

        .ya1{bottom:27.624000px;}

        .y70{bottom:32.400000px;}

        .y5c{bottom:32.880000px;}

        .y2a{bottom:37.440000px;}

        .y84{bottom:38.064000px;}

        .y90{bottom:40.320000px;}

        .y3e{bottom:41.640000px;}

        .ya0{bottom:44.304000px;}

        .y6f{bottom:46.080000px;}

        .y5b{bottom:49.800000px;}

        .y29{bottom:51.000000px;}

        .y83{bottom:51.624000px;}

        .y8f{bottom:57.000000px;}

        .y9f{bottom:57.864000px;}

        .y6e{bottom:59.670000px;}

        .y3d{bottom:61.200000px;}

        .y35{bottom:63.030000px;}

        .y28{bottom:64.680000px;}

        .y82{bottom:65.304000px;}

        .y5a{bottom:66.870000px;}

        .y6d{bottom:73.350000px;}

        .y8e{bottom:73.560000px;}

        .y9e{bottom:74.544000px;}

        .y27{bottom:78.240000px;}

        .y81{bottom:78.864000px;}

        .y3c{bottom:80.880000px;}

        .y59{bottom:83.790000px;}

        .y9d{bottom:88.104000px;}

        .y32{bottom:89.380000px;}

        .y34{bottom:89.430000px;}

        .y8d{bottom:90.240000px;}

        .y80{bottom:92.544000px;}

        .y6c{bottom:92.910000px;}

        .y3b{bottom:94.440000px;}

        .y58{bottom:100.830000px;}

        .y9c{bottom:104.780000px;}

        .y7d{bottom:106.700000px;}

        .y8c{bottom:106.830000px;}

        .y6b{bottom:109.590000px;}

        .y31{bottom:114.940000px;}

        .y57{bottom:117.750000px;}

        .y9b{bottom:118.340000px;}

        .y8b{bottom:123.510000px;}

        .y6a{bottom:124.590000px;}

        .y30{bottom:128.620000px;}

        .y5f{bottom:131.060000px;}

        .y69{bottom:132.990000px;}

        .y4f{bottom:134.300000px;}

        .y56{bottom:134.790000px;}

        .y9a{bottom:135.020000px;}

        .y68{bottom:146.550000px;}

        .y99{bottom:148.580000px;}

        .y55{bottom:151.710000px;}

        .y2f{bottom:154.180000px;}

        .y97{bottom:158.900000px;}

        .y67{bottom:160.230000px;}

        .y54{bottom:168.750000px;}

        .y66{bottom:173.790000px;}

        .y2e{bottom:179.860000px;}

        .y53{bottom:185.670000px;}

        .y65{bottom:187.470000px;}

        .y64{bottom:201.030000px;}

        .y52{bottom:202.710000px;}

        .y63{bottom:214.710000px;}

        .y51{bottom:219.630000px;}

        .y62{bottom:228.270000px;}

        .y50{bottom:236.690000px;}

        .y61{bottom:247.970000px;}

        .y23{bottom:261.170000px;}

        .y60{bottom:264.530000px;}

        .y22{bottom:275.810000px;}

        .y21{bottom:290.450000px;}

        .y20{bottom:305.090000px;}

        .y1f{bottom:319.730000px;}

        .y1e{bottom:334.370000px;}

        .y1d{bottom:349.010000px;}

        .ya4{bottom:360.190000px;}

        .y1c{bottom:363.670000px;}

        .y1b{bottom:378.310000px;}

        .y4c{bottom:383.470000px;}

        .y1a{bottom:392.950000px;}

        .y19{bottom:407.590000px;}

        .y48{bottom:408.550000px;}

        .y26{bottom:413.830000px;}

        .y18{bottom:422.230000px;}

        .y8a{bottom:430.150000px;}

        .y17{bottom:436.990000px;}

        .y16{bottom:451.630000px;}

        .y15{bottom:466.270000px;}

        .y33{bottom:471.310000px;}

        .y2d{bottom:471.360000px;}

        .y14{bottom:480.910000px;}

        .y13{bottom:495.550000px;}

        .y24{bottom:499.750000px;}

        .y12{bottom:510.190000px;}

        .y11{bottom:524.830000px;}

        .y10{bottom:539.500000px;}

        .yf{bottom:554.140000px;}

        .y88{bottom:567.580000px;}

        .ye{bottom:568.780000px;}

        .yd{bottom:583.420000px;}

        .y3a{bottom:584.140000px;}

        .yc{bottom:598.060000px;}

        .y7b{bottom:601.420000px;}

        .yb{bottom:612.700000px;}

        .y79{bottom:623.500000px;}

        .ya{bottom:627.340000px;}

        .y76{bottom:641.380000px;}

        .y9{bottom:642.100000px;}

        .y36{bottom:653.620000px;}

        .y8{bottom:656.740000px;}

        .y7{bottom:671.380000px;}

        .y73{bottom:676.780000px;}

        .y6{bottom:686.020000px;}

        .y38{bottom:692.740000px;}

        .y5{bottom:700.660000px;}

        .y5d{bottom:713.520000px;}

        .y4{bottom:715.320000px;}

        .y4a{bottom:716.400000px;}

        .y3{bottom:729.960000px;}

        .y2{bottom:744.600000px;}



        

        .h1d{height:11.760000px;}

        .h1b{height:13.320000px;}

        .h1c{height:14.040000px;}

        .h1e{height:14.760000px;}

        .h1a{height:15.425156px;}

        .h10{height:16.440000px;}

        .h21{height:16.560000px;}

        .h23{height:17.160000px;}

        .hc{height:18.624000px;}

        .h1f{height:19.800000px;}

        .h4{height:20.760000px;}

        .h26{height:21.960000px;}

        .h7{height:30.521953px;}

        .ha{height:32.040000px;}

        .h15{height:33.831562px;}

        .h25{height:34.242188px;}

        .h19{height:34.461600px;}

        .h13{height:35.040000px;}

        .hf{height:36.000000px;}

        .h5{height:36.468750px;}

        .hd{height:36.726562px;}

        .h2{height:47.742188px;}

        .h11{height:48.600000px;}

        .h3{height:49.148438px;}

        .h16{height:49.680000px;}

        .hb{height:77.654531px;}

        .h6{height:88.920000px;}

        .h20{height:103.220000px;}

        .he{height:105.120000px;}

        .h12{height:105.204375px;}

        .h17{height:132.750000px;}

        .h22{height:137.180000px;}

        .h24{height:159.260000px;}

        .h8{height:190.560000px;}

        .h9{height:190.580000px;}

        .h14{height:248.450000px;}

        .h18{height:275.210000px;}

        .h0{height:792.000000px;}

        .h1{height:792.500000px;}

        .w12{width:40.800000px;}

        .w11{width:41.520000px;}

        .w13{width:41.640000px;}

        .w10{width:42.240000px;}

        .we{width:72.984000px;}

        .wd{width:91.224000px;}

        .w18{width:95.304000px;}

        .w5{width:151.800000px;}

        .w6{width:151.850000px;}

        .w8{width:158.060000px;}

        .w3{width:172.820000px;}

        .w7{width:186.050000px;}

        .wc{width:188.090000px;}

        .w17{width:189.170000px;}

        .w4{width:190.370000px;}

        .w14{width:294.050000px;}

        .w9{width:339.190000px;}

        .wa{width:344.570000px;}

        .wf{width:375.770000px;}

        .wb{width:380.350000px;}

        .w15{width:388.150000px;}

        .w16{width:392.230000px;}

        .w2{width:611.999991px;}

        .w0{width:612.000000px;}

        .w1{width:612.500000px;}

        .xe{left:-1.800000px;}

        .x0{left:0.000000px;}

        .x5{left:7.200000px;}

        .x8{left:18.000000px;}

        .x4{left:20.640000px;}

        .x10{left:25.200000px;}

        .xc{left:28.920000px;}

        .x1{left:35.999991px;}

        .x6{left:49.680000px;}

        .x2{left:52.319991px;}

        .x3{left:53.519991px;}

        .xd{left:62.400000px;}

        .x7{left:100.700000px;}

        .x12{left:109.460000px;}

        .x9{left:214.850000px;}

        .xf{left:217.370000px;}

        .xb{left:218.570000px;}

        .x11{left:219.770000px;}

        .xa{left:270.290000px;}
    `}</style>
  );

  return (
    <>
        <Background />
        {//styles()
        }
        {/*
        <div>
            <div id="pf1" className="pf w0 h0" data-page-no="1">
                <div className="w0 h0">
                    <img className="x0 y0 w1 h1" src="/resume/pictures/template.png"/>
                    <div className="c x4 y24 w3 h4">
                        <div className="t m0 x5 h5 y25 ff3 fs0 fc2 ">O B J E C T I V E</div>
                    </div>
                    <div className="c x4 y26 w4 h6">
                        <div className="t m0 x5 h7 y27 ff4 fs1 fc2">Seeking a dynamic role that </div>
                        <div className="t m0 x5 h7 y28 ff4 fs1 fc2">capitalizes on my resourcefulness to </div>
                        <div className="t m0 x5 h7 y29 ff4 fs1 fc2">tackle challenges, allowing me to </div>
                        <div className="t m0 x5 h7 y2a ff4 fs1 fc2">continuously learn and acquire </div>
                        <div className="t m0 x5 h7 y2b ff4 fs1 fc2">valuable experience in a professional </div>
                        <div className="t m0 x5 h7 y2c ff4 fs1 fc2">setting.  </div>
                    </div>
                    <div className="c x6 y2d w5 h8">
                        <div className="t m0 x5 h7 y2e ff4 fs1 fc2">rileylawson00@gmail.com </div>
                        <div className="t m0 x5 h7 y2f ff4 fs1 fc2">515-657-3605</div>
                        <div className="t m0 x5 h7 y30 ff4 fs1 fc2">linkedin/in/riley-lawson-</div>
                        <div className="t m0 x5 h7 y31 ff4 fs1 fc2">a7a65b203</div>
                        <div className="t m0 x5 h7 y32 ff4 fs1 fc2">github.com/tech180</div></div>
                        <div className="c x6 y33 w6 h9">
                            <div className="t m0 x5 h2 y35 ff1 fs0 fc2">riley.lawsonserver.org</div>
                        </div>
                        <div className="c x8 y36 w7 ha">
                            <div className="t m0 x5 hb y37 ff3 fs0 fc2">C O N T A C T <span className="ff2 fs2 "> </span></div>
                        </div>
                        <div className="c x9 y38 w8 hc">
                            <div className="t m0 x5 hd y39 ff5 fs0 fc0">E D U C A T I O N</div>
                        </div>
                        <div className="c xa y3a w9 he">
                            <div className="t m0 x5 h7 y3b ff4 fs1 fc3">I O W A   S T A T E   U N I V E R S I T Y   |  <span className="fc5">August 2019 – December 2023</span></div>
                            <div className="t m0 x5 h7 y3c ff4 fs1 fc5">B.S. Software Engineering; Minor in Cybersecurity  GPA: 2.73</div>
                            <div className="t m0 x5 h7 y3d ff4 fs1 fc3">D M A C C   |  <span className="fc5">July 2020 – August 2021 </span></div>
                            <div className="t m0 x5 h7 y3e ff4 fs1 fc3">M A D R I D   H I G H   S C H O O L | <span className="fc5">August 2014 – May 2019</span></div>
                            <div className="t m0 x5 h7 y3f ff4 fs1 fc3">D M A C C  | <span className="fc5">August 2017 – May 2019  </span></div>
                            <div className="t m0 x5 h7 y40 ff4 fs1 fc5">Graduated high school with 18 college credits </div>
                        </div>
                        <div className="c x9 y48 wa h10">
                            <div className="t m0 x5 hd y49 ff5 fs0 fc0">E X P E R I E N C E</div>
                        </div>

                        <div className="c xb y4a wb h11">
                            <div className="t m0 xc h12 y4b ff8 fs3 fc0">RILEY J. LAWSON</div>
                        </div>
                        <div className="c x4 y4c wc h13">
                            <div className="t m0 x5 h5 y4d ff3 fs0 fc2" style={{display: 'flex', flexDirection: 'column'}}>
                                <span>T E C H N O L O G Y /</span>
                                <span>L A N G U A G E S</span>
                            </div>

                        </div>
                        <div className="c x4 y4f wd h14">
                            <div className="t m0 x5 h15 y50 ff4 fs5 fc2" style={{display: 'flex', flexDirection: 'column'}}>
                                <span>Linux</span>
                                <span>Kotlin</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>C#</span>
                                <span>HTML/CSS</span>
                                <span>Python</span>
                                <span>Shell</span>
                                <span>C</span>
                                <span>SQL/mySQL</span>
                                <span>Test</span>
                                <span>Linux</span>
                                <span>Test</span>
                            </div>
                        </div>
                        <div className="c xd y5d we h16">
                            <div className="t m0 xe h17 y5e ff8 fs6 fc2">R|L </div>
                        </div>
                        <div className="c xf y5f wf h18">
                            <div className="t m0 x5 h7 y60 ff5 fs1 fc3   ">S o f t w a r e  E n g i n e e r i n g  I n t e r n<span className="ff4  ls2"> |  <span className="fc5 ">iSO-FORM LLC</span></span></div>
                            <div className="t m0 x5 h7 y61 ff9 fs1 fc3">2022<span className="ls2 "> - </span>2023</div>
                            <div className="t m0 x5 h7 y62 ff4 fs1 fc0">A Company dedicated to creating memorable, immersive medical </div>
                            <div className="t m0 x5 h7 y63 ff4 fs1 fc0">experiences through virtual reality, educational gaming, real<span className="_ _2"></span>-time 3D, and </div>
                            <div className="t m0 x5 h7 y64 ff4 fs1 fc0">augmented reality</div>
                            <div className="t m0 x5 h19 y65 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Created browser-based applications in both JavaScript and C#</span></span></div>
                            <div className="t m0 x5 h19 y66 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Working with game engines to create UX like experiences utilizing Unity </span></span></div>
                            <div className="t m0 x10 h7 y67 ff4 fs1 fc0">and PlayCanvas</div>
                            <div className="t m0 x5 h19 y68 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Created an automated screenshot controller</span></span></div>
                            <div className="t m0 x5 h19 y69 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Team and client-based collaboration </span></span></div>

                            

                            <div className="t m0 x5 h7 y6b ff5 fs1 fc3">F o u n d e r <span className="ff4  "> | <span className="ff6 fc5">Lawson’s Mowing<span className="_ _2"></span> Service</span><span className="fc0"> </span></span></div>
                            <div className="t m0 x5 h7 y6c ff9 fs1 fc3">2012<span className="ls2 "> - </span>2023<span className="ff4 fc0  "> </span></div>
                            <div className="t m0 x5 h7 y6d ff4 fs1 fc0">A skillful entrepreneur of a small business with demonstrated ability to </div>
                            <div className="t m0 x5 h7 y6e ff4 fs1 fc0">successfully own, grow, and operate a business venture</div>
                            <div className="t m0 x5 h19 y6f ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">High quality mowing services</span></span></div>
                            <div className="t m0 x5 h19 y70 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Operation of and maintenance of lawn equipment</span></span></div>
                            <div className="t m0 x5 h19 y71 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Client account management</span></span></div>
                            <div className="t m0 x5 h19 y72 ffa fs1 fc0">•<span className="ffb ls4 "> <span className="ff4 ">Delegation and direction to others</span></span></div>
                        </div>
                        <div className="c xb y73 w10 h1b">
                            <div className="t m0 x5 h7 y74 ff4 fs1 fc3">2023</div>
                            <div className="t m0 x5 hf y75 ff7 fs0 fc3"><span className="fc6 "> </span></div>
                        </div>
                        <div className="c xb y76 w11 h1c">
                            <div className="t m0 x5 h7 y77 ff4 fs1 fc3">2021</div>
                            <div className="t m0 x5 hf y78 ff7 fs0 fc3"><span className="fc6 "> </span></div>
                        </div>
                        <div className="c xb y79 w12 h1d">
                            <div className="t m0 x5 hf y7a ff4 fs1 fc3">2019</div>
                        </div>
                        <div className="c xb y7b w13 h1e">
                            <div className="t m0 x5 hf y7c ff4 fs1 fc3">2019</div>
                        </div>
                        <div className="c x9 y7d w14 h1f">
                            <div className="t m0 x5 hd y7e ff5 fs0 fc0">E X T R A  C U R R I C U L A R / L E A D E R S H I P</div>
                        </div>

                        <div className="c xf y7f w15 h20">
                            <div className="t m0 x5 h19 y80 ffa fs1 fc3">•<span className="ffb ls4 "> <span className="ff4 ">Computer Science &amp; Software Engineering Club, Member | January 2021 – </span></span></div>
                            <div className="t m0 x10 h7 y81 ff4 fs1 fc3">December 2023 </div>
                            <div className="t m0 x5 h19 y82 ffa fs1 fc3">•<span className="ffb ls4 "> <span className="ff4 ">Web Development Club, Member | August 2021 – December 2023 </span></span></div>
                            <div className="t m0 x5 h19 y83 ffa fs1 fc3">•<span className="ffb ls4 "> <span className="ff4 ">Ethics of Technology Club, Member | August 2021 – May 2022 </span></span></div>
                            <div className="t m0 x5 h19 y84 ffa fs1 fc3">•<span className="ffb ls4 "> <span className="ff4 ">Linux Club, Member | August 2019 – May 2020 </span></span></div>
                            <div className="t m0 x5 h19 y85 ffa fs1 fc3">•<span className="ffb ls4 "> <span className="ff4 ">Pokémon Club, Treasurer | August 2019 - December 2023 </span></span></div>
                            <div className="t m0 x5 h19 y86 ffa fs1 fc3">•<span className="ffb ls4 "> <span className="ff4 ">Iowa State Statesmen Choir | August 2019 – May 2023</span></span></div>
                        </div>
                        <div className="c x9 y88 wa h21">
                            <div className="t m0 x5 hd y89 ff5 fs0 fc0">P R O J E C T S</div>
                        </div>
                        <div className="c x11 y8a w16 h22">
                            <div className="t m0 x5 h7 y8b ff5 fs1 fc3">A u t o n o m o u s  R o b o t  |  <span className="fc5  ">Roomba</span></div>
                            <div className="t m0 x5 h7 y8c ff5 fs1 fc0">A S C I I  C a n v a s  |  <span className="fc5">Art Canvas based on ASCII characters </span></div>
                            <div className="t m0 x5 h7 y8d ff5 fs1 fc0">P r o j e c t  R e l i n e  |  <span className="fc5 ">Smart phone App<span className="fc0"> </span></span></div>
                            <div className="t m0 x5 h7 y8e ff5 fs1 fc0">B a n k  S e r v e r  |  <span className="fc5 ">Multi-threaded  </span></div>
                            <div className="t m0 x5 h7 y8f ff5 fs1 fc0">V e h i c l e  S e c u r i t y  | <span className="fc5 ">Encrypting CAN Bus (Backwards Compatible with CANFD)</span></div>
                            <div className="t m0 x5 h7 y90 ff5 fs1 fc0">W e b s i t e   |  <span className="fc5 ">Developed with React </span></div>
                            <div className="t m0 x5 h7 y2b ff5 fs1 fc0">A r c Z o n e  |  <span className="fc5">Arcade App configured with Google Firebase</span></div>
                            <div className="t m0 x5 h7 y91 ff5 fs1 fc0">M u s i c i f y  |   <span className="fc5 ">Music App utilizing the Subsonic API</span></div>
                        </div>
                        <div className="c x4 y97 w4 h23">
                            <div className="t m0 x5 h5 y98 ff3 fs0 fc2">S K I L L S</div>
                        </div>
                        <div className="c x4 y1 w17 h24">
                            <div className="t m0 x5 h7 y99 ff4 fs1 fc2">Strong analytical, troubleshooting, </div>
                            <div className="t m0 x5 h7 y9a ff4 fs1 fc2">and problem-solving abilities</div>
                            <div className="t m0 x5 h7 y9b ff4 fs1 fc2">Curious mindset with a commitment </div>
                            <div className="t m0 x5 h7 y9c ff4 fs1 fc2">to continuous learning</div>
                            <div className="t m0 x5 h7 y9d ff4 fs1 fc2">Balanced blend of humility and </div>
                            <div className="t m0 x5 h7 y9e ff4 fs1 fc2">confidence in decision-making </div>
                            <div className="t m0 x5 h7 y9f ff4 fs1 fc2">Demonstrated responsibility and </div>
                            <div className="t m0 x5 h7 ya0 ff4 fs1 fc2">reliability in previous roles </div>
                            <div className="t m0 x5 h7 ya1 ff4 fs1 fc2">Energetic and hard-working, with </div>
                            <div className="t m0 x5 h25 ya2 ff4 fs1 fc2">effective communication skills ,</div>
                            <div className="t m0 x5 h25 ya3 ffc fs0 fc0">troubleshooting and problem </div>
                        </div>
                        <div className="c x12 ya4 w18 h26">
                            <div className="t m0 x5 h15 y2c ff4 fs5 fc2">NixOS </div>
                        </div>
                    </div>
                </div>
            </div>
  */}
    </>
    
  );
}

export default ResumeTest;

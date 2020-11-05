import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import React from 'react';
import '../realhomestyle.css';

function Realhome() {
   const wrapper = document.querySelector(".wrapper");
        const header = document.querySelector(".header");

        const [dark, setdark]=React.useState(false);
         // var test = [
         //    {id : "job1", label : "All", number : 56, },
         //    {id : "job2", label : "C", number : 43},
         //    {id : "job3", label : "C++", number : 24},
         //    {id : "job4", label : "Javascript", number : 27},
         //    {id : "job5", label : "Java", number : 30},
         // ]

      const testClick = (e,number) => {
         e.preventDefault();
         alert(number);
      }
    return (
        <div classNameName="body">
            <div className="job">
                <div className="header">
                    <div className="logo">
                        <img src="img/PNU_Logo.jpg" alt="Logo"></img>
                        Pnu Coding Academy
                    </div>
                    <div className="header-menu">
                        <a href="#" className="active">Coding</a>
                        <a href="code">Code Review</a>
                        <a href="#">Q & A</a>
                    </div>
                    <div className="user-settings">
                        <div className={dark ? "dark-mode" :"dark-light"} onClick={e => {e.preventDefault(); setdark(!dark)}}>
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                </div>
                <div className="user-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNameName="feather feather-square">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
                </div>
                <img className="user-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt=""></img>
              <div className="user-name">David Jang</div>
             </div>
            </div>
            <div className="wrapper">
             <div className="search-menu">
              <div className="search-bar">
               <input type="text" className="search-box" autofocus />
               <div className="search item">C++
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
                 <path d="M18 6L6 18M6 6l12 12" /></svg>
               </div> 
                <div className="search item">Javascript
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
                 <path d="M18 6L6 18M6 6l12 12" /></svg>
               </div> 
               
               
              </div>
              
              <div className="search-job">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
               <input type="text" placeholder="Code Lauguages"/>
              </div>
              
              <button className="search-button">Search</button>
             </div>

             <div className="main-container">
              <div className="search-type">
               <div className="alert">
                <div className="alert-title">Create Q&A Alert</div>
                <div className="alert-subtitle">코드 관련 질문과 답변 알림을 놓치지 말고 받아보세요 </div>
                <input type="text" placeholder="Enter Code keyword"/>
                <button className="search-buttons">Create code Alerts</button>
               </div>
               <div className="job-time">
                <div className="job-time-title">Type of Code Lauguages</div>
                <div className="job-wrapper">
                 <div className="type-container">
                  <input type="checkbox" id="job1" className="job-style" checked/>
                  <label for="job1">All</label>
                  <span className="job-number">56</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job2" className="job-style"/>
                  <label for="job2">C</label>
                  <span className="job-number">43</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job3" className="job-style"/>
                  <label for="job3">C++</label>
                  <span className="job-number">24</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job4" className="job-style"/>
                  <label for="job4">Javascript</label>
                  <span className="job-number">27</span>
                 </div>
                 
                 <div className="type-container">
                    <input type="checkbox" id="job4" className="job-style"/>
                    <label for="job4">Java</label>
                    <span className="job-number">30</span>
                   </div>
                 <div className="type-container">
                  <input type="checkbox" id="job5" className="job-style"/>
                  <label for="job5">Python</label>
                  <span className="job-number">76</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job6" className="job-style"/>
                  <label for="job6">Kotlin</label>
                  <span className="job-number">28</span>
                 </div>
                </div>
               </div>
               <div className="job-time">
                <div className="job-time-title">Coding Level</div>
                <div className="job-wrapper">
                 <div className="type-container">
                  <input type="checkbox" id="job7" className="job-style"/>
                  <label for="job7">Start Level</label>
                  <span className="job-number">98</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job8" className="job-style"/>
                  <label for="job8">Entry Level</label>
                  <span className="job-number">44</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job9" className="job-style" checked/>
                  <label for="job9">Mid Level</label>
                  <span className="job-number">35</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job10" className="job-style" checked/>
                  <label for="job10">Senior Level</label>
                  <span className="job-number">29</span>
                 </div>
                 <div className="type-container">
                  <input type="checkbox" id="job11" className="job-style"/>
                  <label for="job11">Directors</label>
                  <span className="job-number">26</span>
                 </div>
                </div>
               </div>
        
              </div>
              <div className="searched-jobs">
               <div className="searched-bar">
                <div className="searched-show">Showing Code </div>
               </div>
               <div className="job-cards">
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="/img/C++_Logo.svg" alt="C++ LOGO"/>
                    <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">C++</div>
                 <div className="job-card-subtitle">
                    C언어 기반으로 발전한 프로그래밍 언어로 객체 지향 및 일반화 프로그래밍과 같은 멀티 패러다임을 지원하는 프로그래밍 언어이다. C언어의 문법과 기능을 모두 사용할 수 있다
                 </div>
                 <div className="job-detail-buttons">
                  <button className="search-buttons detail-button">Full Time</button>
                  <button className="search-buttons detail-button">Senior Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/JS_Logo.png" alt="JS LOGO"/>
                  <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">Javascript</div>
                 <div className="job-card-subtitle">
                    JS는 가벼운 인터프리터 또는 JIT 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다. 웹 페이지의 스크립트 언어로서 제일 유명하며 Java 프로그래밍 언어와 다릅니다.
                 </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Full Time</button>
                  <button className="search-buttons detail-button">Senior Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/Python_Logo.png" alt="Python LOGO"/>
                    <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">Python</div>
                 <div className="job-card-subtitle">
                    파이썬은 초보자부터 전문가까지 사용자층을 보유하고 있다. 다양한 프로그래밍 패러다임을 지원하는 언어로 객체 지향 프로그래밍과 구조적 프로그래밍을 완벽하게 지원하며 함수형 프로그래밍, 관점 지향 프로그래밍 등도 주요 기능에서 지원 된다.
                    
                 </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Min. 5 소요</button>
                  <button className="search-buttons detail-button">Start Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/Kotlin_Logo.png" alt="kotlin LOGO"/>
                  <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">Kotlin</div>
                 <div className="job-card-subtitle">
                    코틀린은 안드로이드 스튜디오 개발사인 Jet Brains에서 공개한 언어로 JVM에서 구동되는 언어로 자바와 상호운용할 수 있도록 만들어졌다. 자바를 완전히 대체할 수 있는 언어가 되는 것이 코틀린의 주목적이다. 
                 </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Min. 25 소요</button>
                  <button className="search-buttons detail-button">Mid Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/C_Logo.png" alt="C LOGO"/>
                    
                <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">C Lauguages</div>
                 <div className="job-card-subtitle">
                    C언어는 유닉스 운영 체제에서 사용하기 위해 개발한 프로그래밍 언어로, 속도가 빠르고 바이너리 크기도 작아 속도가 중요한 임베디드 혹은 모바일 계열, 또는 시스템 프로그래밍 등에서 주로 사용된다.
        
                 </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Full Time</button>
                  <button className="search-buttons detail-button">Senior Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/Java_Logo.png" alt="JAVA LOGO"/>
                    <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">JAVA</div>
                 <div className="job-card-subtitle">
                    C언어에 객체 지향적 기능을 추가하여 만든 C++과는 달리, 처음부터 객체 지향 언어로 개발된 프로그래밍 언어입니다. 운영체제와는 독립적으로 동작하기때문에 자바는 어느 운영체제에서나 같은 형태로 실행될 수 있습니다.
                 </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Min. 10 소요</button>
                  <button className="search-buttons detail-button">Entry Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>     
                 <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/C++_Logo.svg" alt="C++ LOGO"/>
                  <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">C++</div>
                 <div className="job-card-subtitle">
                    C언어 기반으로 발전한 프로그래밍 언어로 객체 지향 및 일반화 프로그래밍과 같은 멀티 패러다임을 지원하는 프로그래밍 언어이다. C언어의 문법과 기능을 모두 사용할 수 있다
                </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Min. 15 소요</button>
                    <button className="search-buttons detail-button">Mid Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
        
                </div>
                <div className="job-card">
                 <div className="job-card-header">
                    <img src="img/JS_Logo.png" alt="JS LOGO"/>  
                    <div className="menu-dot"></div>
                 </div>
                 <div className="job-card-title">Javascript</div>
                 <div className="job-card-subtitle">
                    JS는 가벼운 인터프리터 또는 JIT 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다. 웹 페이지의 스크립트 언어로서 제일 유명하며 Java 프로그래밍 언어와 다릅니다.
                 </div>
                 <div className="job-detail-buttons">
                    <button className="search-buttons detail-button">Min. 5 소요</button>
                    <button className="search-buttons detail-button">Start Level</button>
                 </div>
                 <div className="job-card-buttons">
                  <button className="search-buttons card-buttons">Challenge Now</button>
                  <button className="search-buttons card-buttons-msg">Messages</button>
                 </div>
                </div>
                
               </div>
               <div className="job-overview">
                <div className="job-overview-cards">
                 <div className="job-overview-card">
                  <div className="job-card overview-card">
                   <div className="overview-wrapper">
                    <img src="img/C++_Logo.svg" alt="C++ LOGO"/>
                    
                    <div className="overview-detail">
                     <div className="job-card-title">C++</div>
                     <div className="job-card-subtitle">
                        C언어 기반으로 발전한 프로그래밍 언어로 C언어의 문법과 기능을 모두 사용 가능하다.
                     </div>
                    </div>
                    <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                     <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                   </div>
                   <div className="job-overview-buttons">             
                    
                        <div className="search-buttons level-button">Start</div>
                        <div className="search-buttons level-button">Entry</div>
                        <div className="search-buttons level-button">Mid</div>
                        <div className="search-buttons level-button">Senior</div>
                    
                   
                    
                    
                    <div className="job-stat">New</div>
                    <div className="job-day">4d</div>
                   </div>
        
                   <div className="job-overview-buttons" >
                    <div className="search-buttons level-button">Project</div>
                    <div className="search-buttons level-button">Random</div>
                </div>
                
                    
                
                  </div>
        
                   
                 </div>
                 <div className="job-overview-card">
                  <div className="job-card overview-card">
                   <div className="overview-wrapper">
                    <img src="img/JS_Logo.png" alt="JS LOGO"/>            
                    <div className="overview-detail">
                     <div className="job-card-title">Javascript</div>
                     <div className="job-card-subtitle">
                        가벼운 인터프리터 또는 JIT 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다.
                     </div>
                    </div>
                    <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                        <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                      </div>
                   <div className="job-overview-buttons">
                    
                    <div className="search-buttons level-button">Senior Level</div>
                    <div className="job-stat">New</div>
                    <div className="job-day">4d</div>
                   </div>
                  </div>
                 </div>
                 <div className="job-overview-card">
                  <div className="job-card overview-card">
                   <div className="overview-wrapper">
                               <img src="img/Python_Logo.png" alt="Python LOGO"/>
                                <div className="overview-detail">
                     <div className="job-card-title">Python</div>
                     <div className="job-card-subtitle">
                        배우기 쉬우며 풍부한 라이브러리를 가진 인터프리터 언어입니다.
                     </div>
                    </div>
                    <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                     <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                   </div>
                   <div className="job-overview-buttons">
                    <div className="search-buttons time-button">Full Time</div>
                    <div className="search-buttons level-button">Senior Level</div>
                    <div className="job-stat">New</div>
                    <div className="job-day">4d</div>
                   </div>
                  </div>
                 </div>
                 <div className="job-overview-card">
                  <div className="job-card overview-card">
                   <div className="overview-wrapper">
                    <img src="img/Kotlin_Logo.png" alt="kotlin LOGO"/>
                    <div className="overview-detail">
                     <div className="job-card-title">Kotlin</div>
                     <div className="job-card-subtitle">
                        안드로이드 공식 언어로 채택된 JVM에서 동작하는 프로그래밍 언어입니다.
                     </div>
                    </div>
                    <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                     <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                   </div>
                   <div className="job-overview-buttons">
                    <div className="search-buttons time-button">Full Time</div>
                    <div className="search-buttons level-button">Senior Level</div>
                    <div className="job-stat">New</div>
                    <div className="job-day">4d</div>
                   </div>
                  </div>
                 </div>
                 <div className="job-overview-card">
                  <div className="job-card overview-card">
                   <div className="overview-wrapper">
                    <img src="img/C_Logo.png" alt="C LOGO"/>
                    <div className="overview-detail">
                     <div className="job-card-title">C Lauguages</div>
                     <div className="job-card-subtitle">
                      2711 Ash Dr. San Jose, South Dark.
                     </div>
                    </div>
                    <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                     <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                   </div>
                   <div className="job-overview-buttons">
                    <div className="search-buttons time-button">Full Time</div>
                    <div className="search-buttons level-button">Senior Level</div>
                    <div className="job-stat">New</div>
                    <div className="job-day">4d</div>
                   </div>
                  </div>
                 </div>
                 <div className="job-overview-card">
                  <div className="job-card overview-card">
                   <div className="overview-wrapper">
                    <img src="img/Java_Logo.png" alt="JAVA LOGO"/>
                    <div className="overview-detail">
                     <div className="job-card-title">JAVA</div>
                     <div className="job-card-subtitle">
                        오크(Oak)라는 이름으로 시작하여 전 세계에서 가장 많이 사용하는 프로그래밍 언어 중 하나입니다.
                     </div>
                    </div>
                    <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                     <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                   </div>
                   <div className="job-overview-buttons">
                    <div className="search-buttons level-button">Senior Level</div>
                    <div className="job-stat">New</div>
                    <div className="job-day">4d</div>
                   </div>
                  </div>
                 </div>
                 
                </div>
                <div className="job-explain">
                 <img className="job-bg" alt=""/>
                 <div className="job-logos">
                               </div>
                 <div className="job-explain-content">
                 <div className="job-title-wrapper">
                  <div className="job-card-title">UI /UX Designer</div>
                  <div className="job-action">
                   <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                     <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
                  </div>
                  
                  </div>
                  <div className="job-subtitle-wrapper">
                   <div className="company-name">Patreon <span className="comp-location">Londontowne, MD.</span></div>
                   <div className="posted">Posted 8 days ago<span className="app-number">98 Application</span></div>
                  </div>
                  <div className="explain-bar">
                   <div className="explain-contents">
                   <div className="explain-title">Experience</div>
                   <div className="explain-subtitle">Minimum 1 Year</div>
                    </div>
                   <div className="explain-contents">
                   <div className="explain-title">Coding Level</div>
                   <div className="explain-subtitle">Senior level</div>
                    </div>
                   <div className="explain-contents">
                   <div className="explain-title">Code Type</div>
                   <div className="explain-subtitle">High level required</div>
                    </div>
                   
                  </div>
                  <div className="overview-text">
                   <div className="overview-text-header">Overview</div>
                   <div className="overview-text-subheader">프로그래밍 학습은 단단한 기초로 부터 시작 됩니다.언어가 바뀌어도 잘 다져진 기반이 존재한다면 반복되는 패턴 속에서 코드를 변화시켜 활용하는 능력을 키우게 되고, 자기 발전의 수단으로 자신의 가치를 높일 수 있는 좋은 기회가 되어줍니다. 단계별로 언어에 대한 학습과 함께 CCM 교육을 활용한다면, 프로그래밍 실력 향상에 큰 도움이 될것 입니다. 언어에 대한 흥미와 이해를 발전 시킬 수 있는 좋은 과정이 되길 바랍니다.</div>
                  </div>
                  <div className="overview-text">
                   <div className="overview-text-header">Code Stage</div>
                   <div className="overview-text-item">연산자 및 변수 선언</div>
                   <div className="overview-text-item">제어문 활용</div>
                   <div className="overview-text-item">반복문 활용</div>
                   <div className="overview-text-item">함수 생성</div>
                   <div className="overview-text-item">파일 입출력</div>
                   <div className="overview-text-item">프로젝트 실행</div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
            </div>                
    );
}

export default Realhome;
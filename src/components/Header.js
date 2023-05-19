import React, { Fragment,useRef } from 'react'; 
import { IoSearch } from "react-icons/io5";
import "../css/header.css"

const Header = () => {
  const popRef = useRef(null);
  const genreList = ["드라마","판타지","서부","공포","멜로/로맨스","모험,스릴러"
  ,"느와르","다큐멘터리","코미디","가족","미스터리","전쟁","애니메이션","범죄"
  ,"뮤지컬","SF","액션","무협","서스펜스","서사","공연실황"]
  const result2 = genreList.map((list,index)=>(<span key={index} className='genreItems'
  onClick={()=>{window.location.href="http://localhost:3000/intro"}}>
    {list}</span>))

  return (
    <Fragment>
      <div id="pop_back" ref={popRef}>        
        <section id="pop_genre">      
        <span id='close' onClick={()=>{popRef.current.style.display="none"}}>X</span>    
          <div id='all_category_list_wrap'>
            <h1>전체 카테고리</h1>
            {result2}
          </div>
        </section>
      </div>  
      <div id='header'>
        <nav id='gnbTop'>
          <ul id='gnb1'>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </nav>
        <nav id='gnbBtm'>
          <img onClick={()=>{window.location.href="http://localhost:3000"}} src="/image/logo.png" alt="logo" title="메인페이지로 이동합니다."/>
          <ul id='gnb2'>
            <li onClick={()=>{window.location.href="http://localhost:3000/intro"}}>소개</li>
            <li onClick={() => {popRef.current.style.display="block";}}>카테고리</li>
            <li onClick={()=>{window.location.href="http://localhost:3000/my"}}>MY</li>
            <li onClick={()=>{window.location.href="http://localhost:3000/recommend"}}>추천</li>
          </ul>
          <IoSearch id="searchIcon" size="25" color='white'/>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
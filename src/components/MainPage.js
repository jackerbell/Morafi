import React, { Fragment } from 'react';
import Slide from './Slide';
import MainList from './MainList';
import '../css/mainPage.css'

const MainPage = (props) => {
  const listIdx = [
    {number:1,division:"인증된 것들 중 최신!"},
    {number:2,division:"유저들이 인증한 높은 평점의 영화들"},
    {number:3,division:"고전 명작 스폐셜!"},
    {number:4,division:"여러 국가가 참여한 영화들"}
  ]
  console.log(props.moviedb)
  const result = listIdx.map((data,index)=>(<MainList 
    key={data.number + index} number={data.number}
    division={data.division}/>))
  return(
    <Fragment>
      <Slide slidedb={props.moviedb}></Slide>
      {result}
    </Fragment>
  );
};

export default MainPage;
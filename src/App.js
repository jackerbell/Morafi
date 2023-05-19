import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Intro from './components/Intro';
import My from './components/My';
import Recommend from './components/Recommend';
import Category from './components/Category';

const App = () => {

  
  const [movieDB,setMovieDB] = useState([])
  useEffect(
    ()=>{
      (async()=>{
        const result = await axios.get('./movie')
        console.log(result.data)
        setMovieDB({movieDB:result})
      })();
      console.log(movieDB)
    }
  ,[]);

  

  return (
    <Fragment>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage moviedb={movieDB}></MainPage>}></Route>
          <Route path='/intro' element={<Intro></Intro>}></Route>
          <Route path='/category' element={<Category></Category>}></Route>
          <Route path='/my' element={<My></My>}></Route>
          <Route path='/recommend' element={<Recommend></Recommend>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>      
    </Fragment>
  );
};

export default App;
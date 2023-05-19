import React from 'react';
import '../css/list.css';

const MainList = (props) => {
  return (
    <div className='listWrap'>
      <div className="title">
        <h1>{props.division}</h1>
        <span>더 보기&gt;</span>
      </div>
      <div className='imgList'>
        <img src="/image/logo.png" alt="예비" title='예비용이미지' />
        <img src="/image/logo.png" alt="예비" title='예비용이미지' />
        <img src="/image/logo.png" alt="예비" title='예비용이미지' />
        <img src="/image/logo.png" alt="예비" title='예비용이미지' />
        <img src="/image/logo.png" alt="예비" title='예비용이미지' />
      </div>
    </div>
  );
};

export default MainList;
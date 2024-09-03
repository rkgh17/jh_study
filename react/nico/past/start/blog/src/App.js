/* eslint-disable */
import React, {useState, useTransition} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','파이썬 독학']);

  let [좋아요,좋아요변경] = useState(0);

  let [좋아요2,좋아요변경2] = useState(0);

  function like(){
    좋아요변경2(좋아요2+1);
  }



  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className='list'>
        <h3> {글제목[0]} <span onClick={ ()=>{  좋아요변경(좋아요+ 1)  }  }>👍</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3> {글제목[1]} <span onClick={ like }>👍</span> {좋아요2} </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3> {글제목[2]} </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      {/* React 문법 -  Modal UI 디자인하기 */}
      <Modal/>

    </div>
  );
}

function Modal(){ // 1. 이름은 대문자로 2. return()안에 있는건 태그 하나로 묶어야 함
  return(
    // 아래는 fragment 문법 : 전체를 하나로 감쌀때
    <>
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;

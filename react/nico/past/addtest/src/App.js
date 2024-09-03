import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  // 검색값 관리
  const [inputSearch, setInputSearch] = useState("");
  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  }

  const handleOnKeyPress = (e) => {

    // 검색 수행
    if(e.key === 'Enter'){
      // console.log("엔터누름")

      // 카카오 키워드 검색 API axios
      axios
        .get("https://dapi.kakao.com/v2/local/search/keyword.json", {
          params : { query : inputSearch},
          headers : {Authorization : "KakaoAK bbc0593ca1fbd88db71ccfdd5421ef1e"}
        }
        )
        .then((res) =>{
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })

    }
  }

  return (
    <div className="App">
      <div className=''>
          <input 
            placeholder='검색창' 
            name='inputSearch' 
            value={inputSearch} 
            onChange={handleInputSearch}
            onKeyDown={handleOnKeyPress}></input>
      </div>
    </div>
  );
}

export default App;

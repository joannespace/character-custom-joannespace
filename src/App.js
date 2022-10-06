import React, {useEffect, useState} from 'react'
import './App.css'
import Form from './components/Form';
import Result from './components/Result';
import {bodyData, eyesData, eyebrowsData, hairData, mouthsData, noseData, hatsData, clothesData, totalDataArray, getInitialState} from './components/utils/Data'

getInitialState(totalDataArray);

function App() {
  const [customizeResult, setCustomizeResult] = useState(getInitialState(totalDataArray));

  const handleClick = (e) => {
    //Get the object {} of the <Input>
    const newResult = e.target["_wrapperState"].initialValue;

    // Get the name attribute of Input to compare the customizeResult[index].cat if it has the same value
    let result = customizeResult.map((objCustomItem, index) => {
      if (objCustomItem.cat === e.target.name) {
        return newResult;
      } else {
        return objCustomItem;
      } 
    })

    //Assign new array result to setCustomizeResult
    setCustomizeResult(result);
  }

  const getRandomResult = (totalDataArray) => {
    let result = totalDataArray.map(arrCat => {
      let indexRandom = Math.floor(Math.random() * arrCat.length);
      return arrCat[indexRandom];
    })
    setCustomizeResult(result);
  }

  return (
    <div className="App">
      <header id="header">
        <div className='title'>CHARACTER</div>
        <div className='subtitle'>🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
      </header>

      <main id="container">
        {/* CHARACTER CUSTOMIZATION RESULT DISPLAY */}
        <div id="char-display">
          <Result customizeResult={customizeResult} getRandomResult={() => getRandomResult(totalDataArray)} />
        </div>
        
        {/* CATEGORY BOX RENDERING */}
        <div id="adjust-box">
          <Form arrayItem={bodyData} handleClick={handleClick} />
          <Form arrayItem={eyesData} handleClick={handleClick} />
          <Form arrayItem={eyebrowsData} handleClick={handleClick} />
          <Form arrayItem={hairData} handleClick={handleClick} />
          <Form arrayItem={mouthsData} handleClick={handleClick} />
          <Form arrayItem={noseData} handleClick={handleClick} />
          <Form arrayItem={hatsData} handleClick={handleClick} />
          <Form arrayItem={clothesData} handleClick={handleClick} />
        </div>

      </main>
    </div>
  )
}

export default App

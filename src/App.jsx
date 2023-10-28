import React from 'react'
import './App.css'

function App() {

  return (
    <>
        <div class="calc">
        <h3>Calculadora</h3>
        <div class="operations">
            <div id="previusOperation"></div>
            <div id="currentOperation"></div>
        </div>
        <div id="buttonsContainer">
            <button>CE</button>
            <button>C</button>
            <button>DEL</button>
            <button>/</button>
            <button class="numbersBtn">7</button>
            <button class="numbersBtn">8</button>
            <button class="numbersBtn">9</button>
            <button>*</button>
            <button class="numbersBtn">4</button>
            <button class="numbersBtn">5</button>
            <button class="numbersBtn">6</button>
            <button>-</button>
            <button class="numbersBtn">1</button>
            <button class="numbersBtn">2</button>
            <button class="numbersBtn">3</button>
            <button>+</button>
            <button class="numbersBtn">0</button>
            <button class="numbersBtn">.</button>
            <button class="equalBtn">=</button>
        </div>
    </div>
    </>
  )
}

export default App

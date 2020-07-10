import React from 'react';
import Article from './Article';

function Body(){
    return (

      <body className="View" id="article">
        <Article judul="Apa itu Kalori?" text="Halo halo halo halo oooooooooooo ooooooooooooooo" />

        <div className="counter" id="counter">
          <div className="counter-left">
            <h1> Calories Calculator </h1>
            <p>Enter your gender, age, weight, height, and activity level.</p>
          </div>
          <div className="counter-right">
            <form>
              {/* Input Form */}
              <h1>Body Parameter
                <div className="gender">
                  <input type="radio" name="radio" id="opt1"/>
                  <label for="opt1" className="option1">
                    <span>MAN</span>
                  </label>
                  <input type="radio" name="radio" id="opt2"/>
                  <label for="opt2" className="option2">
                    <span>WOMEN</span>
                  </label>
                </div>
              </h1>
  
  
              <div className="cek">
                <input type="number" id="usia" placeholder="Usia"></input>
                <input type="number" id="berat" placeholder="Berat Badan"></input>
                <input type="number" id="tinggi" placeholder="Tinggi Badan"></input>
              </div>
  
                  
              {/* Activity Level */}
              <div className="activity">
                <h2>Activity Level</h2>
                <p>Teks</p>
                <div className="level">
                  <input type="radio" name="radio" id="low"/>
                  <label for="low" className="lowOpt">
                    <span>LOW</span>
                  </label>
                  <input type="radio" name="radio" id="middle"/>
                  <label for="middle" className="middleOpt">
                    <span>MIDDLE</span>
                  </label>
                  <input type="radio" name="radio" id="high"/>
                  <label for="high" className="highOpt">
                    <span>HIGH</span>
                  </label>
                </div>
                
              </div>
  
  
              {/* Submit button */}
              <button>Clear</button>
              <button>Calculate</button>
            </form>
          </div>
          
        </div>
      </body>
    )
  }

  export default Body;
import React from 'react';
import Article from './Article';
import Converter from './Converter';
import CalculateForm from './Form';

function CounterLeft() {
  return(
    <div className="counter-left">
      <h1> Calories Calculator </h1>
      <p>Enter your gender, age, weight, height, and activity level.</p>
    </div>
  )
}

function Body(){

    return (
      <body className="View" id="article">
        <Article judul="Berapa Banyak Kalori yang Anda Butuhkan Per Hari?" text="Jika Anda pernah memperhatikan tabel informasi nilai gizi pada kemasan makanan, maka Anda akan sering menemukan kalimat “Persen AKG berdasarkan kebutuhan energi 2000 kkal. Kebutuhan energi Anda mungkin lebih tinggi atau lebih rendah.” Ini berarti kebutuhan kalori Anda per hari tidaklah sama dengan orang lain, karena banyak faktor yang dapat mempengaruhi kebutuhan kalori Anda. Sebetulnya bagaimana cara menghitung kebutuhan kalori sehari-hari?" />
        
        <div className="counter" id="counter">
          <div className="left-addition"></div>
          <CounterLeft/>
          <CalculateForm/>
        </div>
        
        <Converter />
      </body>
      
    );
}

export default Body;
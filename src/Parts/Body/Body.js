import React from 'react';
import Article from './Article';
import Converter from './Converter';

function Hasil(props) {
  return(
    <div className="hasil">
      <p>Skor kamu :</p>
      <h1>{props.total}</h1>
    </div>
  )
}

function CounterLeft() {
  return(
    <div className="counter-left">
      <h1> Calories Calculator </h1>
      <p>Enter your gender, age, weight, height, and activity level.</p>
    </div>
  )
}

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gender: '',
      usia:'',
      berat:'',
      tinggi: '',
      level: 'Low',
      total: 0
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.genderChange = this.genderChange.bind(this);
    this.levelChange = this.levelChange.bind(this);
  }

  genderChange(event) {
    this.setState({
      gender:event.target.value
    })
  }

  levelChange(event) {
    this.setState({
      level:event.target.value
    })
  }

  onSubmit(event) {
    const {gender, usia, berat, tinggi, level} = this.state;
    let total = (gender==="Laki-Laki") ? (66.5 + (13*berat) + (5*tinggi))/(5.8*usia) : (65.51 + (9.6*berat) + (1.9*tinggi))/(4.7*usia);
    let total2 = (level === "Low") ? total*1.2 : (level === "Middle") ? total*1.3 : (level === "High") ? total*1.4 : total*1.6;
    this.setState({total: total2});
    event.preventDefault();
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render(){
    const { usia, berat, tinggi } = this.state;
    return (
      <body className="View" id="article">
        <Article judul="Berapa Banyak Kalori yang Anda Butuhkan Per Hari?" text="Jika Anda pernah memperhatikan tabel informasi nilai gizi pada kemasan makanan, maka Anda akan sering menemukan kalimat “Persen AKG berdasarkan kebutuhan energi 2000 kkal. Kebutuhan energi Anda mungkin lebih tinggi atau lebih rendah.” Ini berarti kebutuhan kalori Anda per hari tidaklah sama dengan orang lain, karena banyak faktor yang dapat mempengaruhi kebutuhan kalori Anda. Sebetulnya bagaimana cara menghitung kebutuhan kalori sehari-hari?" />

        <div className="counter" id="counter">
          <div className="left-addition"></div>
          <CounterLeft/>
          <div className="counter-right">
            <form onSubmit={this.onSubmit}>
              <h1>Body Parameters<br/>
                <div className="gender">Jenis Kelamin<br/>
                  <label><input type="radio" name="gender" value="Laki-laki" onChange={this.genderChange} checked={this.state.gender === "Laki-laki"}/>Laki-Laki</label>
                  <label><input type="radio" name="gender" value="Perempuan" onChange={this.genderChange} checked={this.state.gender === "Perempuan"}/>Perempuan</label>
                </div>
                
                <div className="masukan">
                  <input type="number" id="usia" name="usia" value={usia} placeholder="Usia" onChange={this.onChange}/><br/>
                  <input type="number" id="berat" name="berat" value={berat} placeholder="Berat Badan" onChange={this.onChange}/><br/>
                  <input type="number" id="tinggi" name="tinggi" placeholder="Tinggi Badan" value={tinggi} onChange={this.onChange}/><br/>
                </div>


                <div className="activity">Activity Level<br/>
                  {this.state.level === 'Low' ?
                    <p><span>Low : </span>Aktivitas hidup utama seperti istirahat, kerja kantoran atau menyetir. Kemungkinan melibatkan pekerjaan rumah moderat dan berdiri tetapi tidak ada latihan ringan yang dilakukan.</p>:
                  this.state.level === 'Middle' ?
                    <p><span>Middle : </span> Disamping kegiatan sehari-hari, melakukan kegiatan yang lebih berat, seperti berdiri lebih lama atau pekerjaan rumah. Beberapa bentuk latihan dilakukan, seperti jalan pelan, bersepeda santai atau berkebun. </p> :
                  this.state.level === 'High' ?
                    <p> <span>High : </span> Sedikit duduk / istirahat dan kemungkinan bekerja dilingkungan yang membutuhkan berdiri dan/atau sedikit kerja fisik. Secara teratur melakukan olahraga ringan, seperti menari, jalan cepat atau berenang.</p> :
                    <p><span>Very High : </span>Lingkungan kerja fisik intensif seperti konstruksi dan / atau melakukan kegiatan yang berat banyak hari dalam seminggu, seperti jogging, menggunakan peralatan olahraga atau berpartisipasi dalam olahraga fisik.</p> }
                  <label><input type="radio" name="level" value="Low" onChange={this.levelChange} checked={this.state.level === "Low"}/>Low</label>
                  <label><input type="radio" name="level" value="Middle" onChange={this.levelChange} checked={this.state.level === "Middle"}/>Middle</label>
                  <label><input type="radio" name="level" value="High" onChange={this.levelChange} checked={this.state.level === "High"}/>High</label>
                  <label><input type="radio" name="level" value="Very High" onChange={this.levelChange} checked={this.state.level === "Very High"}/>Very High</label>
                </div>
                <button type="submit">Calculate</button>
              </h1>
            </form>
          </div>
        </div>
        { this.state.total > 0 ? <Hasil total={this.state.total}/> : <div></div>}
        <Converter />
      </body>
      
    );
  }
}

export default Body;
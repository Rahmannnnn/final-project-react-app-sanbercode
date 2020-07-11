import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class CalculateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          gender: '',
          usia:'',
          berat:'',
          tinggi: '',
          level: 'Low',
          total: 0,
          show: false
        }
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.levelChange = this.levelChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose = () => this.setState({ show: false});
    handleShow = () => this.setState({show: true});
  
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
        const { usia, berat, tinggi, show, total } = this.state;

        return(
            <>
            <Modal
                show={show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Hasil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {total}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

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
                    <button type="submit" onClick={this.handleShow}>Calculate</button>
                    </h1>
                </form>
            </div>
            </>
        );
    }
}

export default CalculateForm;
import React, {useState} from 'react';

class InputConvert extends React.Component {
  _changeHandler = (e) => {
    this.props.onChange(e.target.value);
  }

  render(){
    const { satuanLabel, satuan} = this.props;
    return(
      <>
        <label >
          { satuanLabel === 'kkal' ? 'Kkal : ' : 'Kilojoules : '} <br/>
          <input type="number" value={satuan} onChange={this._changeHandler} />
        </label>
        <br/>
      </>
    );
  }
}

function Converter() {

  const [ kkal, setKkal ] = useState(0);
  const [ kilojoule, setKj ] = useState(0);

  const onChangeKkal = (kkal) => {
    let kilojoule = (parseFloat(kkal) * 4.184).toString();
    setKkal(kkal);
    setKj(kilojoule);
  }

  const onChangeKilo = (kilojoule) => {
    let kkal = (parseFloat(kilojoule) / 4.184).toString();
    this.setState({ kkal, kilojoule });
    setKkal(kkal);
    setKj(kilojoule);
  }

    return (
      <>
      <div className="Artikel" id="converter">
        <div className="garis"></div>
        <h1> Convert Energy </h1>
        <div className="satuan">
          <InputConvert satuanLabel="kkal" satuan={kkal} onChange={onChangeKkal} className="a" /> 
          <InputConvert satuanLabel="kilojoule" satuan={kilojoule} onChange={onChangeKilo} className="b" />
        </div>
      </div>
      </>
    );
}

export default Converter;
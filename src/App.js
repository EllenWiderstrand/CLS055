import './App.css';
import logo from './KeepUp.png';
import Process from './Process';
import Background from './Background';
import Result from './Result';
import Design from './Design';
import Resources from './Resources';

function App() {
  return (
    <div className="App">
      <div className="content">
        <img alt="Logo for KeepUp" className="logo" src={logo} />
        <p>
          By <a href="https://www.linkedin.com/in/kajsabjarang/" target="blank">Kajsa Bjäräng</a>, <a href="https://www.linkedin.com/in/viktoriaenderstein/" target="blank">Viktoria Enderstein</a> and <a href="https://www.linkedin.com/in/ellenwiderstrand/" target="blank">Ellen Widerstrand</a>
        </p>
        <div className="video">
          <iframe src="https://www.youtube.com/embed/_WGUXtaoLok" title="KeepUp" frameBorder="0" allow="accelerometer; autoplay;" allowFullScreen></iframe>
        </div>
        <Background />
        <Design />
        <Process/>
        <Result />
        <Resources />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import logo from './KeepUp.png';
import Process from './Process';

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
        <h2 className="heading">Background</h2>
        <p>There are millions of applications on the market but there are only a handful of them that millions of people around the world use on a daily basis [1, [2]. 
          The companies that have created those applications are huge and keep growing at a rapid speed which makes it very difficult for new applications to trend.  
          Something that has the potential to become successful and popular, however, is applications that support the already widely used applications [1]. 
          KeepUp is a new platform that has the potential to become the next big thing that people use to keep track of their social media. 
          Instead of having to check several different applications that notify you at different times and in different ways, KeepUp lets you view all content in one place. 
          All recent updates are gathered in one place which lets you keep up with all your favourite accounts, no matter which platform they are from. There is, therefore, 
          no need to jump between platforms to get all updates, KeepUp will do it for you. </p>

        <p>The application consists of a dashboard that the user can customize by choosing what social media to connect to the platform. KeepUp has two major perks compared 
          to other social media applications. One of them is that it collects all content in one application which limits the number of applications that will be used. 
          The other is that it aims to not be as addictive as other applications often are. People statically check their phones at least 52 times per day and receive even 
          more notifications per day which might increase people's stress levels [2].  People do not often actively change or remove the default notifications which 
          constantly reminds users to check different platforms [3].  This has resulted in many people being addicted and KeepUp aims to keep social media fun and stop 
          it from being an addiction.</p>
          
        <h2 className="heading">The Design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="heading">Design Process</h2>
        <Process/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="heading">Result</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default App;

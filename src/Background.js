import './App.css';
import statistics1 from './images/stats.png';
import statistics2 from './images/stats2.png';

function Background() {
  return (
    <div className="wrapper">
        <h2 className="heading">Background</h2>
        <p>There are millions of applications on the market but there is only a handful of them that millions of people around the world use on a daily basis [1], [2]. 
          The companies that have created those applications are huge and keep growing at a rapid speed which makes it very difficult for new applications to trend.  
          Something that has the potential to become successful and popular, however, is applications that support the already widely used applications [1]. 
          KeepUp is a new platform that has the potential to become the next big thing that people use to keep track of their social media. 
          Instead of having to check several different applications that notify you at different times and in different ways, KeepUp lets you view all content in one place. 
          All recent updates are gathered in one place which lets you keep up with all your favourite accounts, no matter which platform they are from. There is, therefore, 
          no need to jump between platforms to get all updates, KeepUp will do it for you. </p>
        
        <div className="statisticsWrapper">
          <img alt="Application statistics1" className="statisticsImg" src={statistics1} />
          <img alt="Application statistics2" className="statisticsImg" src={statistics2} />
        </div>
        <p className="figureText">Figure 1: Statistics from <i>Mobile App Download Statistics & Usage Statistics</i> [1]</p>
         
        <p>The application consists of a dashboard that the user can customize by choosing what social media to connect to the platform. KeepUp has two major perks compared 
          to other social media applications. One of them is that it collects all content in one application which limits the number of applications that will be used. 
          The other is that it aims to not be as addictive as other applications often are. People statically check their phones at least 52 times per day and receive even 
          more notifications per day which might increase people's stress levels [2].  People do not often actively change or remove the default notifications which 
          constantly reminds users to check different platforms [3].  This has resulted in many people being addicted and KeepUp aims to keep social media fun and stop 
          it from being an addiction.
        </p>
    </div>
  );
}

export default Background;

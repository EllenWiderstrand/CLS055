import './App.css';
import logo from './KeepUp.png';
import statistics1 from './stats.png';
import statistics2 from './stats2.png';
import application from './applications.png';
import settings from './settings.png';
import feedStart from './feedstart.png';
import feedEnd from './feedEnd.png';
import feedOld from './feedOld.png';
import design from './theDesign.png';
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
        
        <img alt="Application statistics1" className="statistics1" src={statistics1} />
        <img alt="Application statistics2" className="statistics2" src={statistics2} />
         
        <p>The application consists of a dashboard that the user can customize by choosing what social media to connect to the platform. KeepUp has two major perks compared 
          to other social media applications. One of them is that it collects all content in one application which limits the number of applications that will be used. 
          The other is that it aims to not be as addictive as other applications often are. People statically check their phones at least 52 times per day and receive even 
          more notifications per day which might increase people's stress levels [2].  People do not often actively change or remove the default notifications which 
          constantly reminds users to check different platforms [3].  This has resulted in many people being addicted and KeepUp aims to keep social media fun and stop 
          it from being an addiction.</p>
          
        <img alt="Logo for KeepUp" className="design" src={design} />
        <h2 className="heading">Design Process</h2>
        <Process/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="heading">Result</h2>
        <p>
        KeepUps original purpose is to take control and collect all social media content into one platform and thereby reduce stress and addiction to social media. 
        The interview of peoples use of social media  resulted in all the interviewees practically using the exact same applications on a daily basis, see figure 4.1.  
        These statistics correlate quite well with the Statistics stated in “Mobile App Download Statistics and Usage Statistics“ [2]. KeepUp therefore gives the user 
        the possibility to decide what media to include which make it as suitable as possible for all the users. Hopefully KeepUp then achieves the main core of the purpose 
        of letting the user take control and gather all social media.  
        </p>

        <img alt="Application statistics1" className="statistics1" src={application} />

        <p>
        The purpose of KeepUp is also to try to reduce stress and addiction to social media. KeepUp includes features such as per default the setting is that the user 
        will not get any notification when anything new has been added or uploaded. KeepUp lets the user actively decide whether or not he or she wants to get notifications
        instead of forcing the user to actively remove the notifications. With this feature the goal is to reduce some of the stress created by social media, see figure 4.2
        </p>
        
        <img alt="Application statistics1" className="statistics1" src={settings} />

        <p>
        Social media and the addictive features of likes have been removed with KeepUp. Again per default the user only sees that people like different posts but could never 
        see by how many. Similarly this feature could be changed but then the user has to actively go in and add the feature instead of remove it, see figure 4.3. The feed of 
        KeepUp also differs from common feeds on the social media market. It is common to include an infinite scrolling possibility but with KeepUp the user is clearly 
        informed of what is new or not, see figure 4.3 [4]. When the user has scroll through all the new posts the feed ends and the user actively has to click to show all 
        the old posts in the feed, see figure 4.5. Keep Up therefore gives the user immediately information about how many posts exactly the user has missed but also gives 
        the user closure with a clear and distinct end of the feed.
        </p>

        <img alt="Application statistics1" className="statistics1" src={feedStart} />
        <img alt="Application statistics1" className="statistics1" src={feedEnd} />
        <img alt="Application statistics1" className="statistics1" src={feedOld} />

        <p>
        During the ideation phase we started exploring different colour schemes. Every palette had one core aspect in mind; to be calming. One colour palette was towards a blue 
        scale, see figure 4.6, and the two other towards a purple/brown/beige scheme, see figure 4.7 and 4.8. Since two of the color palettes were quite similar we made a mix of 
        the two purple/brown/beige palette. With the new two  color schemes we asked several people what they felt about them. This resulted in people liking that both schemes 
        focused on natural colours which was appreciated since that radiated calmness. Due to the earthy colors in the purple/brown/beige scheme and some more people who preferred 
        it we continued with it. In this phase the color scheme didn’t have so much contrast the scheme was updated a little with help of the website called webaim to check how 
        good or bad the contrast was and based on that updated. The final colour scheme was highly appreciated by one person and he/she said it gave a calming and relaxing feeling. 
        </p>
        </div>
    </div>
  );
}

export default App;

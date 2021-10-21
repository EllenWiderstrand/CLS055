import './App.css';
import application from './images/applications.png';
import settings from './images/settings.png';
import feedStart from './images/feedstart.png';
import feedEnd from './images/feedEnd.png';
import feedOld from './images/feedOld.png';

function Result () {
    return(
        <div className="wrapper"> 
            <h2 className="heading">Result</h2>
            <p>
                KeepUps original purpose is to take control and collect all social media content into one platform and thereby reduce stress and addiction to social media. 
                The interview of peoples use of social media  resulted in all the interviewees practically using the exact same applications on a daily basis, see figure 4.1.  
                These statistics correlate quite well with the Statistics stated in “Mobile App Download Statistics and Usage Statistics“ [2]. KeepUp therefore gives the user 
                the possibility to decide what media to include which make it as suitable as possible for all the users. Hopefully KeepUp then achieves the main core of the purpose 
                of letting the user take control and gather all social media.  
            </p>

            <img alt="Logos for different social media." className="icons" src={application} />
            <p className="figureText">Figure 4.1: Social media applications used by the interviewees.</p>

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
    )
}

export default Result;
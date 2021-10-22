import './App.css';
import application from './images/applications.png';
import settings from './images/settings.png';
import likes from './images/likes.png';
import updates from './images/Updates.png';
import morePosts from './images/MorePosts.png';
import colour1 from './images/Colour1.png';
import finalColour from './images/finalColour.png';

function Result () {
    return(
        <div className="wrapper"> 
            <h2 className="heading">Result</h2>
            <p>
                KeepUp's main purpose is to let users take control over their social media usage and collect all content in one platform and, 
                thereby, reduce stress and addiction to social media. The interviews that were held regarding peoples use of social media, 
                showed that all interviewees use the same applications daily. Figure 4.1 shows which social media they use. These statistics 
                correlate quite well with the statistics stated in “Mobile App Download Statistics and Usage Statistics“ [2]. KeepUp, therefore,
                 gives the user the possibility to decide which social media to include which makes it tailored for the users. Thereby, KeepUp 
                 hopefully achieves the main core of the purpose by letting the user take control and gather all social media on one website.
            </p>

            <img alt="Logos for different social media." className="icons" src={application} />
            <p className="figureText">Figure 4.1: Social media applications used by the interviewees.</p>

            <p>
                The purpose of KeepUp is also to reduce stress and addiction to social media. The settings have, therefore, been configured 
                in a way to cause the user as little stress as possible. One such setting is notifications, where the default setting is to 
                have them turned off since they can be stressful [2]. By forcing the user to actively turn them on if they want notifications, they are less likely to have 
                them on. Another common feature on social media is to show the number of likes a post gets. Likes are known to be stressful, especially for younger people, 
                and the stress has even been linked to increased anxiety and depression for some people [4]. In KeepUp, the default settings 
                for likes is, therefore, to not show the number. The user can still see that people have liked or reacted to the post but can not see 
                how many likes/reactions the post has got. Both of these settings can be seen in Figure 4.2 and a post where the number of 
                likes is hidden can be seen in Figure 4.3.
            </p>
      
            <div className="twoCols">
                <div className="alignCenter">
                    <img alt="Settings in KeepUp." className="settingsImg" src={settings} />
                    <p className="figureText">Figure 4.2: Settings for an account in KeepUp.</p>
                </div>
                <div className="alignCenter">
                    <img alt="A post in KeepUp's feed." className="wrapper" src={likes} />
                    <p className="figureText">Figure 4.3: A post that does not show the number of likes.</p>
                </div>
            </div>

            <p>
                Another feature where KeepUp differs from common feeds on the social media market is that the feed does not include 
                infinite scrolling since it can be very addictive [5]. When a user opens KeepUp, it is clearly stated how many new 
                updates there are, as shown in Figure 4.4. When the user has scrolled through all new posts, the feed ends and the 
                user is faced with a button that has to be actively clicked on to show previously viewed posts. The button can be 
                seen in Figure 4.5. With KeepUp, it is, therefore, less likely that the user keeps scrolling past the new posts as 
                it gives the user closure with a clear and distinct end of the feed.
            </p>

            <img alt="The number of new updates in the feed" className="computer" src={updates} />
            <p className="figureText">Figure 4.4: The number of new updates in the feed.</p>

            <img alt="Button for showing more posts" className="computer" src={morePosts} />
            <p className="figureText">Figure 4.5: The end of the feed for new posts with containing a button to show more posts.</p>

            <p>
                Colours can create different feelings and it was, therefore, important to find colours that did not feel stressful, 
                but rather gave a calming impression for the users [6]. The final colour scheme used for KeepUp is a result of three different 
                palettes, as seen in Figure 4.6, that was scaled down to two which finally resulted in one after feedback had been 
                received. One person said that the chosen colours gave a calming and relaxing feeling and they were appreciated by 
                everyone who gave feedback. The chosen palette was slightly altered to create a higher contrast between the colours and 
                the result is seen in Figure 4.7. It is important that KeepUp is as accessible as possible so that as many people as 
                possible can use it and one way of making it more accessible was to use high contrast between text and background [7].  
            </p>

            <div className="twoCols">
                <div className="alignCenter">
                    <img alt="First colour schemes" className="settingsImg" src={colour1} />
                    <p className="figureText">Figure 4.6: The first three colour schemes.</p>
                </div>
                <div className="alignCenter">
                    <img alt="Final colour scheme" className="settingsImg" src={finalColour} />
                    <p className="figureText">Figure 4.7: The final colour scheme.</p>
                </div>
            </div>
        </div>
    )
}

export default Result;
import './App.css';
import design from './images/theDesign.png';

function Design() {
  return (
    <div className="wrapper">
      <h2 className="heading">The Design</h2>
        <p>This section presents screenshots of the final design and explanations of functionalities and details. 
          Arrows and numbers are added to get an understanding of the users flow. 
          Additionally, a storyboard of the usage are added at the end of this section.</p>
        <img alt="The design" className="design" src={design} />
    </div>
  );
}

export default Design;

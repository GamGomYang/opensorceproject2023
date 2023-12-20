import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './MidBanner.css';
import image1 from './images/banner/topbanner.jpg';
import image2 from './images/banner/topbanner2.png';



function App() {
  return (
    <div className="App">
      <div className="top-banner">

        <img src={image2} alt="Image 2" />
        <img src={image1} alt="Image 1" />

      </div>
    </div>


  )
}

export default App;


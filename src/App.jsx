import BladeRunner from '../src/shared/components/BladeRunner/BladeRunner';
import Brain from '../src/shared/components/Brain/Brain';
import Man from '../src/shared/components/Man/Man';
import SlideFive from '../src/shared/components/Slides/SlideFive/SlideFive';
import SlideFour from '../src/shared/components/Slides/SlideFour/SlideFour';
import SlideOne from '../src/shared/components/Slides/SlideOne/SlideOne';
import SlideThree from '../src/shared/components/Slides/SlideThree/SlideThree';
import SlideTwo from '../src/shared/components/Slides/SlideTwo/SlideTwo';
import Video from '../src/shared/components/Video/Video';
import VideoTwo from '../src/shared/components/Video/VideoTwo/VideoTwo';
import './App.scss';
import Slider from './widgets/Slider/Slider';

const slidesArrayOne = [SlideOne, Video, SlideTwo, Brain, VideoTwo, SlideThree, BladeRunner, SlideFour, Man, SlideFive]
const slidesArrayTwo = [Man, Brain, BladeRunner]
const slidesArrayThree = [Video, VideoTwo]
const slidesArrayFour = [Man, Video, Brain, VideoTwo, BladeRunner]


function App() {
  return (
    <div className="App">
      <h2>Слайдер 1: Общий</h2>
      <Slider slidesArray={slidesArrayOne} />
      <h2>Слайдер 2: Картинки + Видео</h2>
      <Slider slidesArray={slidesArrayFour} />
      <h2>Слайдер 3: Картинки</h2>
      <Slider slidesArray={slidesArrayTwo} />
      <h2>Слайдер 4: Видео</h2>
      <Slider slidesArray={slidesArrayThree} />
    </div>
  );
}

export default App;

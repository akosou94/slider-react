import Slider from './widgets/Slider/Slider';
import SlideOne from '../src/shared/components/Slides/SlideOne/SlideOne';
import SlideTwo from '../src/shared/components/Slides/SlideTwo/SlideTwo';
import SlideThree from '../src/shared/components/Slides/SlideThree/SlideThree';
import SlideFour from '../src/shared/components/Slides/SlideFour/SlideFour';
import SlideFive from '../src/shared/components/Slides/SlideFive/SlideFive';
import VideoOne from './shared/components/Video/VideoOne/VideoOne';
import VideoTwo from '../src/shared/components/Video/VideoTwo/VideoTwo';
import BladeRunner from '../src/shared/components/BladeRunner/BladeRunner';
import Images from './shared/components/Images/Images';
import Man from '../src/shared/components/Man/Man';
import './App.scss';

const slidesArrayOne = [SlideOne, Images, SlideTwo, VideoOne, SlideThree, BladeRunner, VideoTwo, SlideFour, Man, SlideFive]
const slidesArrayTwo = [Man, Images, BladeRunner]
const slidesArrayThree = [VideoOne, VideoTwo]
const slidesArrayFour = [Man, VideoOne, Images, VideoTwo, BladeRunner]
const slidesArrayFive = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive]


function App() {
  return (
    <div className="app">
      <h2 className='title'>Слайдер 1: Все виды слайдов + вся навигация</h2>
      <Slider slidesArray={slidesArrayOne} buttons dotted />
      <h2 className='title'>Слайдер 1.1: Текст + частичная навигация</h2>
      <Slider slidesArray={slidesArrayFive} dotted />
      <h2 className='title'>Слайдер 2: Картинки + Видео + частичная навигация</h2>
      <Slider slidesArray={slidesArrayFour} dotted />
      <h2 className='title'>Слайдер 3: Картинки + частичная навигация</h2>
      <Slider slidesArray={slidesArrayTwo} buttons />
      <h2 className='title'>Слайдер 4: Видео + частичная навигация</h2>
      <Slider slidesArray={slidesArrayThree} buttons />
    </div>
  );
}

export default App;

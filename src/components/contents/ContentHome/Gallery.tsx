import photo1 from '@/assets/imgs/photo1.png'
import photo2 from '@/assets/imgs/photo2.png'
import photo3 from '@/assets/imgs/photo3.png'
import photo4 from '@/assets/imgs/photo4.png'
import photo5 from '@/assets/imgs/photo5.png'
import photo6 from '@/assets/imgs/photo6.png'
import photo7 from '@/assets/imgs/photo7.png'
import photo8 from '@/assets/imgs/photo8.png'
import photo9 from '@/assets/imgs/photo9.png'
import photo10 from '@/assets/imgs/photo10.png'
import photo11 from '@/assets/imgs/photo11.png'
import photo12 from '@/assets/imgs/photo12.png'
import photo13 from '@/assets/imgs/photo13.png'


export default function Gallery() {

  return (
    <>
      <div className="grid grid-gallety" >
        <div className="grid-item grid-item--width2">
          <img src={photo1.src} alt="retrato" className='photo' />
          <img src={photo3.src} alt="retrato" className='photo' />
          <img src={photo5.src} alt="retrato" className='photo' />
        </div>
        <div className="grid-item grid-item--width2 img-right" >
          <img src={photo2.src} alt="retrato" className='photo' />
          <img src={photo4.src} alt="retrato" className='photo' />
          <img src={photo6.src} alt="retrato" className='photo' />
        </div>
      </div>
      <img src={photo7.src} alt="retrato" className='photo' />
      <div className='container-h2'>
        <h2 className='landing-h2'>Visual Explorations</h2>
      </div>
      <div className="grid" >
        <div className="grid-item grid-item--width2">
          <img src={photo8.src} alt="retrato" className='photo' />
          <img src={photo11.src} alt="retrato" className='photo' />
        </div>
        <div className="grid-item grid-item--width2 img-right" >
          <img src={photo9.src} alt="retrato" className='photo' />
          <img src={photo12.src} alt="retrato" className='photo' />
        </div>
        <div className="grid-item grid-item--width2 img-right" >
          <img src={photo10.src} alt="retrato" className='photo' />
          <img src={photo13.src} alt="retrato" className='photo' />
        </div>
      </div>
    </>
  );
}

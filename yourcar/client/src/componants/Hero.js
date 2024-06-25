
import heroImage from '../hero1.jpg';
import '../Hero.css';
import { Link } from 'react-router-dom';




export default function Hero() {

  return (
    <>
      <div className='heroImg'>
        <img src={heroImage} alt="" />
        <h1 className='heading'>Welcome to YOurcAR</h1>
        <p className='des'>Find the best car according to your requirements & which suits you and your family, Happy hunting :)</p>
        <Link to='/form' className="button-33">Get Started</Link>
      </div>
      <div className="note">
        <p>If you already have an account you can login directly.</p>
      </div>
    </>
  )
}

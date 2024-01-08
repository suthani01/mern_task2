import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import "./NavigationBar.css";
const NavigationBar = () => {
  return <nav>
    <a href="/">To keep connected with us please login!!</a>
    <div>
        <p>Heyy, <span>WELcOme</span></p>
        <FontAwesomeIcon icon={faFaceSmile} />
    </div>
  </nav>;
};
export default NavigationBar;
import { Link } from 'react-router-dom';
import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="base-btn-card btn-card-home">
      <div className="btn-content-container">
        <div>
          <Link to="/products">
            <button className="btn base-button">
              <h6>VER CATÁLOGO</h6>
            </button>
          </Link>
        </div>
        <div>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonIcon;
import './styles.css';

const ButtonSearch = () => {
  return (
    <>
      <div className="base-btn-card card-container-search">
        <div className="btn-content-cantainer-search">
          <div className="car-search-form">
            <form action="" className="car-filter-form">
              <input type="text" placeholder="Digite sua busca"></input>
              <button className="btn base-button btn-search">
                <h6>BUSCAR</h6>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonSearch;

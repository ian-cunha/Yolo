import example from "../assets/example.png";

function PageVideo() {
  return (
    <div className="video" id="videos">
      <div className="d-flex flex-column justify-content-between align-items-center p-5">
        <div>

          <div id="carouselMod" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={example} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={example} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={example} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMod" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselMod" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageVideo
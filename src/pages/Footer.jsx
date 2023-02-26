import logo from "/public/logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center p-5">
        <div>
          <img src={logo} width="100px" alt="Logo" />
        </div>
        <div className="text-center">
          <h4 className="text-footer">Viver é a melhor experiência.</h4>
          <p className="copy">@ 2023 Yolo Coliving</p>
        </div>
        <div>
          <a className="btn-redes"><i className="bi bi-instagram"></i></a>
          <a className="btn-redes"><i className="bi bi-facebook"></i></a>
          <a className="btn-redes"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
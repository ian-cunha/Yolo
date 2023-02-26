import mE from "../assets/movimentoEstrategico.svg";

function PageFive() {
  return (
    <div className="page5" id="mov">
      <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center p-5">
        <div>
          <h2 className="text-mE text-center">Movimento<br/>estratégico</h2>
          <hr className="line" />
        </div>
        <div>
          <img className="img-mE" src={mE} />
        </div>
      </div>
    </div>
  )
}

export default PageFive
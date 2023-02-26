import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";

function PageFour() {
  return (
    <div className="page4" id="obras">
      <div className="d-flex flex-column justify-content-between align-items-center p-3">
        <div>
          <h2 className="textObras text-center">Obras</h2>
          <hr className="line" />
        </div>

        <div className="text-center">
          <div className="row">
            <div className="col p-0">
              <img src={one} width="100%" />
            </div>
            <div className="col p-0">
              <img src={two} width="100%" />
            </div>
          </div>
          <div className="row">
            <div className="col p-0">
              <img src={three} width="100%" />
            </div>
            <div className="col p-0">
              <img src={four} width="100%" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PageFour
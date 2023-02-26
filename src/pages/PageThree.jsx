import iconDna from "../assets/iconDna.svg";

function PageThree() {
  return (
    <div className="page3" id="dna">
      <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center p-5">
        <div>
          <h2 className="textDna text-center">DNA</h2>
          <hr className="lineDna" />
          <ul className="list-dna list-group-flush">
            <li>INOVAÇÃO</li>
            <li>DISRUPÇÃO</li>
            <li>COLABORAÇÃO</li>
            <li>INTERAÇÃO</li>
            <li>TRANSFORMAÇÃO</li>
            <li>PIONEIRISMO</li>
          </ul>
        </div>
        <div>
          <img className="iconDna" src={iconDna} />
        </div>
      </div>
    </div>
  )
}

export default PageThree
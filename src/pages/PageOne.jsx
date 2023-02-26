import invImg from "../assets/objImg.png";

function PageOne() {
  return (
    <div className="page1" id="objetivo">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center p-5">
        <div>
          <h2 className="textObj">Objetivo</h2>
          <hr className="lineObj" />
          <h5 className="subObj col-9">Transformar o YOLO na maior referência de coliving do Brasil, criando
            uma nova visão e cultura sobre moradia no país, conectadas às principais tendências globais de economia criativa e mais colaborativa, despertando o interesse de investidores e construindo uma comunidade de yolovers.
          </h5>
          <button className="btnObj">Saiba mais <i class="bi bi-arrow-right-short"></i></button>
        </div>
        <div>
        <img src={invImg} className="objImg" />
        </div>
      </div>
    </div>
  )
}

export default PageOne
import invImg from "../assets/invImg.png";

function PageTwo() {
  return (
    <div className="page2" id="investimento">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center p-5">
        <div className="contInv">
          <h2 className="textInvest">Investimento</h2>
          <hr className="lineInv" />
          <h5 className="inv2 col-9">O gestor do Opportunity explica que o fundo resolveu investir nesse modelo por entender que é preciso oferecer soluções eficientes de moradia, com serviços e conveniências para que o morador e o investidor estejam seguros de que fizeram uma excelente aquisição.
          </h5>
          <p className="invP">Matéria I O Globo I 04.07.2021</p>
        </div>
        <img src={invImg} className="invImg" />
      </div>
    </div>
  )
}

export default PageTwo
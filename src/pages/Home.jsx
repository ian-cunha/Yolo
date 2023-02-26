function Home() {
  return (
    <div className="home" id="home">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center p-5">
        <div></div>
        <div className="card text-center p-3 cta">
          <div className="card-body">
            <h2 className="card-title">Conheça Yolo</h2>
            <p className="mb-4">Basta preencher o formulário</p>

            <form method="post" action="#" name="formContato">
            <div class="mb-3">
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" required />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
              </div>
              <div class="mb-3">
                <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="Contato" required />
              </div>
              <button type="submit" class="btn-send">Enviar</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
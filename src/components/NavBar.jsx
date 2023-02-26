import logo from "/public/logo.svg";

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width="100px" alt="Logo" />
          </a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex" role="search">

                  <div class="dropdown dropstart">
                    <button class="btcolor border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-list"></i> Menu
                    </button>
                    <ul class="dropdown-menu menuDrop">
                      <li><a href="#home" class="dropdown-item" type="button">Início</a></li>
                      <li><a href="#objetivo" class="dropdown-item" type="button">Objetivo</a></li>
                      <li><a href="#investimento" class="dropdown-item" type="button">Investimento</a></li>
                      <li><a href="#dna" class="dropdown-item" type="button">DNA</a></li>
                      <li><a href="#obras" class="dropdown-item" type="button">Obras</a></li>
                      <li><a href="#mov" class="dropdown-item" type="button">Mov. estratégico</a></li>
                      <li><a href="#videos" class="dropdown-item" type="button">Videos</a></li>
                    </ul>
                  </div>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
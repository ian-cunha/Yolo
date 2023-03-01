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
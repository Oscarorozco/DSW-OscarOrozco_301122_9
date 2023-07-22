import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MockupImagen from './MockUpPaginaWeb.JPG';


function App() {
  useEffect(() => {
    document.title = "Proyecto Web"
  }, []);



  return (
    <Router>
    <div>
      <header>
        <div className="container">
          <div className="contenedor-grid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">Diseño Paginas Web</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Tema seleccionado</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Mockup</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Acerca de</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/formulario">Formulario</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="simple-admin">
        <div data-component="sidebar">
          <div className="sidebar">
            <ul className="list-group flex-column d-inline-block first-menu">
            <li className="list-group-item py-2">
               <a href="./index.html">
                  <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495392326/Reporting_hj9z0i.png" 
                  height="40" 
                  className="mr-4"
                  alt=''
                  /><span>Inicio</span>
                </a>

                <ul className="list-group flex-column d-inline-block submenu svg-submenu">
                <li className="list-group-item">
                    <a href="./tema.html">
                      <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495403294/Dashboard_kcz278.svg" 
                      height="32" 
                      width="40" 
                      className="ml-2 mr-4 d-inline-block"
                      alt=''
                      />
                      <div className="text d-inline-block align-middle">
                        SelectoresCSS
                      </div>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://surfer141978.github.io/DSW-EdgarMartinez-F2/index.html">
                      <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495403294/Dashboard_kcz278.svg" 
                      height="32" 
                      width="40" 
                      className="ml-2 mr-4 d-inline-block"
                      alt=''
                      />
                      <div className="text d-inline-block align-middle">
                          Grid CSS
                      </div>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="./Temasfase4Grupal.html">
                      <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495403294/Dashboard_kcz278.svg" 
                      height="32" 
                      width="40" 
                      className="ml-2 mr-4 d-inline-block"
                      alt=''
                      />
                      <div className="text d-inline-block align-middle">
                          Temas Fase 4
                      </div>
                    </a>
                  </li>
                </ul>
              </li> 
              
              <li className="list-group-item py-2">
                <a href="./nosotros.html">
                  <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495397501/Lead_Manager_zt3anl.png" 
                  height="40"
                  className="mr-4"
                  alt=''/><span>Nosotros</span>
                </a>

                <ul className="list-group flex-column d-inline-block submenu svg-submenu">
                  <li className="list-group-item">
                    <a href="./nosotros.html">
                      <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495405179/Comments_axmnrq.svg" 
                      height="32" 
                      width="40" 
                      className="ml-2 mr-4 d-inline-block"
                      alt=''/>
                      <div className="text d-inline-block align-middle">
                        Grupo 301122_9
                      </div>
                    </a>
                  </li>
                </ul>
              </li> 
              
              <li className="list-group-item py-2">
                <a href="./audio.html">
                  <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495397541/Media_ngp1vn.png" 
                  height="40" 
                  className="mr-4"
                  alt=''
                  /><span>Audios</span>
                </a>
                 <ul className="list-group flex-column d-inline-block submenu svg-submenu">
                  <li className="list-group-item">
                    <a href="./audio.html">
                      <img src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495405613/Media_Library_qsttfw.svg" 
                      height="32" 
                      width="40" 
                      className="ml-2 mr-4 d-inline-block"
                      alt=''
                      />
                      <div className="text d-inline-block align-middle">
                        Audios
                      </div>
                    </a>
                  </li>
                </ul>
              </li>           
            </ul>
          </div> 
        </div>
      </div>

      <div className="container">
        <section id="inicio">
          <p>Los selectores css son una parte fundamental de CSS. Permiten seleccionar uno o varios elementos HTML para aplicarles estilos específicos. En esta página mostraremos los diferentes tipos de selectores y cómo utilizarlos para dar estilo a las páginas web.</p>
        </section>
        <section id="tema-seleccionado">
          <div>
            <h2>Selector de tipo</h2>
            <p>El selector de tipo se utiliza para aplicar estilos a todos los elementos HTML del mismo tipo. Por ejemplo, el selector "p" se aplicará a todos los párrafos en la página.</p>
            <h2>Selector de clase</h2>
            <p>El selector de clase se utiliza para aplicar estilos a elementos HTML específicos que tienen una clase determinada. Por ejemplo, el selector ".clase" se aplicará a todos los elementos que tienen la clase "clase".</p>
            <h2>Selector de ID</h2>
            <p>Selecciona un elemento basándose en el valor de su atributo id. Solo puede haber un elemento con un determinado ID dentro de un documento.</p>
            <h2>Selector universal</h2>
            <p>Selecciona todos los elementos. Opcionalmente, puede estar restringido a un espacio de nombre específico o a todos los espacios de nombres.</p>
            <h2>Selector de atributo</h2>
            <p>Selecciona elementos basándose en el valor de un determinado atributo.</p>
          </div>
        </section>
        <section id="mockup">
          <div>
            <h2>Mockup</h2>
            <p>Aquí puedes ver una vista Mockup del sitio web.</p>
            <img src={MockupImagen} alt=''/>
          </div>
        </section>
        <section id="acerca-de">
          <div>
            <h2>Acerca de</h2>
            <p>Página exploratoria para los temas del curso Diseño de sitios web. Realizada por un estudiante de Ingeniería de Sistemas.</p>
          </div>
        </section>
      </div>
      
      <footer className="footer">
        <div>
          <p>&copy; 2023 Estudiante de Ingeniería de Sistemas Oscar Leonardo Orozco. Todos los derechos reservados.</p>
          <br/>
          <p>Última actualización: Mayo 29, 2023.</p>
        </div>
      </footer>
    </div>
    
    
  </Router>
  );
}

export default App;
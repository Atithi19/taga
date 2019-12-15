import React from 'react'

export default function Navigation() {
    return (
        <div>

            <header className="header">
              <div className="header_inner d-flex flex-row align-items-center justify-content-start">
                <div className="logo"><a href="#">Wish</a></div>
                <nav className="main_nav">
                  <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="categories.html">clothes</a></li>
                    <li><a href="categories.html">accessories</a></li>
                    <li><a href="categories.html">lingerie</a></li>
                    <li><a href="contact.html">contact</a></li>
                  </ul>
                </nav>
                <div className="header_content ml-auto">
                  <div className="search header_search">
                    <form action="#">
                      <input type="search" className="search_input" required="required"/>
                      <button type="submit" id="search_button" className="search_button"><img src="images/magnifying-glass.svg" alt=""/></button>
                    </form>
                  </div>
                  <div className="shopping">
                    <a href="#">
                      <div className="cart">
                        <img src="images/shopping-bag.svg" alt=""/>
                        <div className="cart_num_container">
                          <div className="cart_num_inner">
                            <div className="cart_num">1</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="star">
                        <img src="images/star.svg" alt=""/>
                        <div className="star_num_container">
                          <div className="star_num_inner">
                            <div className="star_num">0</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="avatar">
                        <img src="images/avatar.svg" alt=""/>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="burger_container d-flex flex-column align-items-center justify-content-around menu_mm"><div></div><div></div><div></div></div>
              </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>

                    <div className="home">
            

            <div className="home_slider_container">
              <div className="owl-carousel owl-theme home_slider">
                
                <div className="owl-item">
                  <div className="home_slider_background"><img src="images/banner1.jpg" alt=""/></div>
                  <div className="home_slider_content">
                    <div className="home_slider_content_inner">
                      <div className="home_slider_subtitle">Promo Prices</div>
                      <div className="home_slider_title">New Collection</div>
                    </div>	
                  </div>
                </div>

                <div className="owl-item">
                  <div className="home_slider_background"><img src="images/banner2.jpg" alt=""/></div>
                  <div className="home_slider_content">
                    <div className="home_slider_content_inner">
                      <div className="home_slider_subtitle">Promo Prices</div>
                      <div className="home_slider_title">New Collection</div>
                    </div>	
                  </div>
                </div>

                <div className="owl-item">
                  <div className="home_slider_background"> <img src="images/banner1.jpg" alt=""/></div>
                  <div className="home_slider_content">
                    <div className="home_slider_content_inner">
                      <div className="home_slider_subtitle">Promo Prices</div>
                      <div className="home_slider_title">New Collection</div>
                    </div>	
                  </div>
                </div>

              </div>
              

              <div className="home_slider_next d-flex flex-column align-items-center justify-content-center"><img src="images/arrow_r.png" alt=""/></div>


              <div className="home_slider_dots_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_slider_dots">
                        <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                          <li className="home_slider_custom_dot active">01.<div></div></li>
                          <li className="home_slider_custom_dot">02.<div></div></li>
                          <li className="home_slider_custom_dot">03.<div></div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>		
              </div>
            </div>
          </div> 
            
</div>
    )
}

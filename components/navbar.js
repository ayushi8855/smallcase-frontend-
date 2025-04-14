function navbar(){
    return `<nav class="navbar navbar-expand-lg navbar-light mb-0 pb-0 fixed-top bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand text-primary" href="#">
        <div class="d-flex mt-2">
          <img style="width: 100%; height: 40px;" src="https://smallcases.upstox.com/assets/favicon/ms-icon-310x310.png"
            alt="logo">
          <p>smallcase</p>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="discover-collection.html">Discover</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Watchlist</a>
            </li>
          </ul>
        </div>

        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">For Business</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                More
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <p class="dropdown-item mb-0"><small>Account</small></p>
                </li>
                <li><a class="dropdown-item" href="#">Open Broker Account</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <p class="dropdown-item mb-0"><small>Support</small></p>
                </li>
                <li><a class="dropdown-item" href="#">FAQs</a></li>
                <li><a class="dropdown-item" href="#">Chat With Us</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <p class="dropdown-item mb-0"><small>Company</small></p>
                </li>
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">Career</a></li>
              </ul>
            </li>
          
              <!-- <div class="d-flex gap-2">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Login/Register</button>
                  </ul>
              </div> -->
              <div class="d-flex gap-2">
                
                <button  class="btn btn-outline-primary" onclick="window.location.href = 'login.html'">Login</button>
                <button  class="btn btn-outline-primary" onclick="window.location.href = 'register.html'">Registration</button>
                  </ul>
              </div>
        </div>
      </div>
    </div>
  </nav>`
}

function footer (){
    return `<div id="footer" class="pb-4 pt-4" style="background-color: rgb(247,248,247);">
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row">
        <div class="col-12 mb-3">
          <i class="fa-solid fa-house me-2"></i>
          <i class="fa-solid fa-chevron-right mx-2"></i>
          <span>Watchlist</span>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="row mb-5">
        <!-- Left Column -->
        <div class="col-12 col-lg-5 mb-4 mb-lg-0">
          <img class="mb-3 img-fluid" src="https://www.smallcase.com/static/svgs/smallcase-logo-with-text.svg" alt="Smallcase Logo">
          <p>smallcase Technologies builds platforms & investment products to invest better in Indian equities. A smallcase is a basket of stocks/ETFs weighted intelligently to reflect an idea</p>
          <p class="fw-bold">Get weekly market insights and facts right in your inbox</p>

          <form class="row g-2">
            <div class="col-12 col-sm-auto">
              <input type="email" class="form-control" placeholder="Email Address">
            </div>
            <div class="col-12 col-sm-auto">
              <button class="btn btn-primary w-100">Subscribe</button>
            </div>
          </form>
        </div>

        <!-- Right Column: Links -->
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-6 col-md-4 mb-3">
              <p class="fw-bold">Company</p>
              <a href="about.html" class="text-dark text-decoration-none d-block">About</a>
              <a href="Aman.html" class="text-dark text-decoration-none d-block">For Businesses</a>
              <p class="m-0">Blog</p>
              <p class="m-0">Press</p>
              <p class="m-0">Careers</p>
            </div>
            <div class="col-6 col-md-4 mb-3">
              <p class="fw-bold">Products</p>
              <p class="m-0">Publisher</p>
              <p class="m-0">Share</p>
              <p class="m-0">Gateway</p>
              <p class="m-0">Brokers</p>
              <p class="m-0">Tickertape</p>
            </div>
            <div class="col-12 col-md-4">
              <p class="fw-bold">Fine Print</p>
              <p class="m-0">Privacy</p>
              <p class="m-0">Disclosures</p>
              <p class="m-0">Definitions</p>
              <p class="m-0">Investment Tools</p>
              <p class="m-0">Return Calculation Methodology</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- Bottom Info -->
      <div class="row text-center text-lg-start">
        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <p class="small">
            smallcase Technologies Private Limited<br>
            #51, 3rd Floor, Le Parc Richmonde,<br>
            Richmond Road, Shanthala Nagar,<br>
            Richmond Town, Bangalore - 560025
          </p>
        </div>

        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <p class="small">Contact us: <a href="mailto:help@smallcase.com">help@smallcase.com</a></p>
          <p class="small mb-1">Find us on:</p>
          <div class="d-flex justify-content-center justify-content-md-start gap-3 fs-5">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>

        <div class="col-12 col-md-4 text-center text-md-start">
          <p class="small mb-2">Help & Support</p>
          <img src="https://www.smallcase.com/static/images/25-social-trust.png" alt="Trust Badge" class="img-fluid" style="max-width: 150px;">
        </div>
      </div>
    </div>
  </div>`
}

export {navbar,footer};
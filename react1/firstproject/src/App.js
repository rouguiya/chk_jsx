import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import maison from "./img/maison1.jpg"
import maison1 from "./img/maison2.jpg"
import maison2 from "./img/maison3.jpg"
const  App = () => { 
  return( 
  <>
  {/* --------------------------Navbar---------------------*/}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* --------------------------carte---------------------*/}
<h1 className="text-center text-success my-5"> Bootstrap Cards</h1>
<div className='container'>
  <div className="row">
    <div className="col-md-3"> 
   <div class="card">
  <img src={maison} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Ma maison1</h5>
    <p class="card-text">Cette maison est uniquement réservé aux personnes déminue  qui n'ont pas de toit </p>
    <a href="#d" class="btn btn-primary">logement pauvre </a>
   </div>
</div>
</div>
<div className="col-md-3">
<div class="card" >
  <img src={maison1} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Ma maison2 </h5>
    <p class="card-text">Cette maison est uniquement réservé aux orphelins </p>
    <a href="#" class="btn btn-primary">logement pauvre </a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card" >
  <img src={maison2} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Ma maison3</h5>
    <p class="card-text">Cette maison est uniquement réservé aux andicapé </p>
    <a href="#" class="btn btn-primary">logement pauvre </a>
  </div>
</div>
</div>
</div>
</div>

    </>
  )
}
export default App;

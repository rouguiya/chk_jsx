import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Product from "./Product.js";
import Description from "./components/Description";
import Prix from "./components/Prix";
import Nom from "./components/Nom";
import Image from "./components/Image";

const prenom  = "ROUGUIYATOU"

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , flexDirection:'column' }}>
    <Card style={{ width: '20rem' , backgroundColor:'grey' , display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white' }}>
      <Card.Body style={{borderRadius:'5px' , margin:'40px'}}>
        <Nom  nom={Product.Nom} />
        <Prix prix={Product.Prix} />
        <Description description={Product.Description} />
        <Image image={Product.Image} />
      </Card.Body>
    </Card>
    <p>Bonjour, {prenom ? prenom : 'there'}!</p>
   </div>
  );
}

export default App;

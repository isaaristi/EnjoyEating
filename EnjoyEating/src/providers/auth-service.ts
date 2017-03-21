import { Injectable } from '@angular/core';

@Injectable()
export class RestauranteService {

  data: Restaurante[];

  constructor() {
    this.data = [];
    let m1: Restaurante = new Restaurante();
    m1.nombre = "El Quijote Terraza Barbacoa";
    m1.logo = "../assets/icon/quijotelogo.jpg";
    m1.direccion = "Calle 10 #9-17";
    m1.imagen = "../assets/icon/popayanelquijote.jpg";
    m1.telefono = 8234104;
    m1.tipo = "Restaurante tradicional";

    let m2: Restaurante = new Restaurante();
    m2.nombre = "Carantanta";
    m2.logo = "../assets/icon/carantantalogo.jpg";
    m2.direccion = "Cra 9 # 11N-18";
    m2.imagen = "../assets/icon/carantantaimagen.jpg";
    m2.telefono = 8367977;
    m2.tipo = "restaurante tradicional";

    let m3: Restaurante = new Restaurante();
    m3.nombre = "La Cosecha Parrillada";
    m3.logo = "../assets/icon/cosechalogo.jpeg";
    m3.direccion = "Avenida El Papódromo # 18 N -20";
    m3.imagen = "../assets/icon/cosechaimagen.jpg";
    m3.telefono = 8236799;
    m3.tipo = "Restaurante tradicional";

    let m4: Restaurante = new Restaurante();
    m4.nombre = "Corrales y Peroles";
    m4.logo = "../assets/icon/corraleslogo.jpeg";
    m4.direccion = "Km 3 Vía A Cali Popayán, Vereda Rio Blanco";
    m4.imagen = "../assets/icon/corralesimagen.jpg";
    m4.telefono = 8246747;
    m4.tipo = "Restaurante tradicional";

    let m5: Restaurante = new Restaurante();
    m5.nombre = "Pio Pio";
    m5.imagen = "../assets/icon/piopiologo.jpg";
    m5.direccion = "Calle 6 #8-67";
    m5.imagen = "../assets/icon/piopioimagen.jpg";
    m5.telefono = 8243859;
    m5.tipo = "Asaderos de Pollo";

    let m6: Restaurante = new Restaurante();
    m6.nombre = "Mora Castilla";
    m6.imagen = "../assets/icon/moralogo.jpg";
    m6.direccion = "Calle 2 #4-42";
    m6.imagen = "../assets/icon/moraimagen.jpg";
    m6.telefono = 3006159425;
    m6.tipo = "Comida típica";


    this.data.push(m1);
    this.data.push(m2);
    this.data.push(m3);
    this.data.push(m4);
    this.data.push(m5);
    this.data.push(m6);
  }

  insert(m: Restaurante) {
    this.data.push(m);
  }

  delete(pos: number) {
    this.data.splice(pos, 1);
  }

}

export class Restaurante {
  nombre: string;
  imagen: string;
  direccion: string;
  logo: string;
  telefono: number;
  mapa: string;
  tipo: string;
}


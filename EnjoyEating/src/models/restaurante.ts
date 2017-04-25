import { Menu } from '../models/menu';

export class Restaurante {
  id: string;
  placeid: string;
  nombre: string;
  logo: string;
  imagen: string;
  direccion: string;
  telefono: number;
  menu: Menu[];
  tipo: string;
}
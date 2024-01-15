import {Categorie} from "./categorie";

export class Terrain{
  id!:number;
  nom!:string;
  description!:string;
  surface!:number;
  categorie?:Categorie
}

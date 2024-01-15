import {Taux} from "./taux";

export class Categorie{
  id!:number;
  libelle!:string;
  description!:string;
  taux?: Taux
}

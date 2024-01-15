// taxetnb.model.ts
import { Terrain } from './terrain';

export class TaxeTnb {
  id!: number;
  label!: string;
  description!: string;
  montant!: number;
  tnbYear!: number;
  paid!: boolean;
  terrain?: Terrain;
}

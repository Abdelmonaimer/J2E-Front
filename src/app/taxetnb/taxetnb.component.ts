// taxetnb.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaxeTnb } from "../model/taxeTnb";
import { TaxeTnbService } from "../services/taxe-tnb.service";

@Component({
  selector: 'app-taxetnb',
  templateUrl: './taxetnb.component.html',
  styleUrls: ['./taxetnb.component.css']
})
export class TaxeTnbComponent implements OnInit {

  taxeTnbs: TaxeTnb[] = [];
  cin: string = '';
  terrainNom: string = '';

  constructor(
    private route: ActivatedRoute,
    private taxeTnbService: TaxeTnbService
  ) { }

  ngOnInit(): void {
    // Get cin from localStorage
    const authDataString = localStorage.getItem('auth_data');
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      if (authData && authData.cin) {
        this.cin = authData.cin;
      }
    }

    // Extract the terrain name from the route parameters
    this.terrainNom = this.route.snapshot.params['nom'];

    // Fetch the list of TaxeTNB by terrain name
    this.fetchTaxeTNBs();
  }

  private fetchTaxeTNBs(): void {
    this.taxeTnbService.getTaxeTnbsByTerrain(this.terrainNom).subscribe(
      (data: TaxeTnb[]) => {
        this.taxeTnbs = data;
      },
      error => {
        console.error('Error loading TaxeTNBs:', error);
      }
    );
  }

  payTaxeTNB(taxeTnb: TaxeTnb): void {
    if (!taxeTnb.paid) {
      // Call the service to pay the tax
      this.taxeTnbService.calculateTaxeTNB(this.cin, this.terrainNom, taxeTnb.id).subscribe(
        () => {
          console.log(this.cin + ' ' + this.terrainNom + ' '+ taxeTnb.id);
          console.log('TaxeTNB paid successfully!');
          // Reload the TaxeTNBs
          this.fetchTaxeTNBs();
        },
        error => {
          console.error('Error paying TaxeTNB:', error);
          // Handle the error or show a notification to the user
        }
      );
    }
  }
}

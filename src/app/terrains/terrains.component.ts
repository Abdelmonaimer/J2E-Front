// terrains.component.ts

import { Component, OnInit } from '@angular/core';
import { TerrainService } from "../services/terrain.service";
import { Terrain } from "../model/terrain";
import { Router } from "@angular/router";

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.component.html',
  styleUrls: ['./terrains.component.css']
})
export class TerrainsComponent implements OnInit {
  terrains: Terrain[] = [];

  constructor(private service: TerrainService, private router: Router) {
  }

  ngOnInit(): void {
    // Load terrains by stored CIN from auth_data in local storage
    this.loadTerrainsByStoredCin();
  }

  loadTerrainsByStoredCin(): void {
    // Get the auth_data from local storage
    const authDataString = localStorage.getItem('auth_data');

    if (authDataString) {
      // Parse the auth_data JSON string
      const authData = JSON.parse(authDataString);

      // Check if CIN exists in auth_data
      if (authData && authData.cin) {
        // Fetch terrains by CIN
        this.service.getTerrainsByCin(authData.cin).subscribe(
          (data: Terrain[]) => {
            this.terrains = data;
          },
          error => {
            console.error('Error loading terrains by CIN:', error);
          }
        );
      }
    }
  }

  navigateToTaxeTnb(terrainNom: string): void {
    // Navigate to the TaxeTNB details page with the terrain name as a route parameter
    this.router.navigate(['/taxetnb', terrainNom]);
  }
}

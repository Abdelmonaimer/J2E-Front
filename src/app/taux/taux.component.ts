import { Component, OnInit } from '@angular/core';
import {TauxService} from "../services/taux.service";
import {Taux} from "../model/taux"; // Updated import statement

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements OnInit {
  tauxList: Taux[] = [];
  selectedCategory: string = '';

  constructor(private tauxService: TauxService) { }

  ngOnInit(): void {
    this.loadAllTaux();
  }

  loadAllTaux(): void {
    this.tauxService.getAllTaux().subscribe(
      (data: Taux[]) => {
        this.tauxList = data;
      },
      error => {
        console.error('Error loading Taux:', error);
      }
    );
  }

  filterByCategory(): void {
    if (this.selectedCategory) {
      this.tauxService.getTauxByCategorie(this.selectedCategory).subscribe(
        (data: Taux[] | Taux) => {
          if (Array.isArray(data)) {
            this.tauxList = [...data]; // Spread the array to create a new reference
          } else if (data instanceof Object) {
            this.tauxList = [data]; // Wrap the single object in an array
          } else {
            console.error('Invalid data received from API:', data);
          }
        },
        error => {
          console.error('Error filtering Taux by category:', error);
        }
      );
    }
  }


}

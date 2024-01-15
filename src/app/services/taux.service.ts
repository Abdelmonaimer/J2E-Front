import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taux } from '../model/taux';

@Injectable({
  providedIn: 'root'
})
export class TauxService {
  private apiUrl = 'http://localhost:8888/TAXE-SERVICE/api/taux';

  constructor(private http: HttpClient) { }

  getAllTaux(): Observable<Taux[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Taux[]>(url);
  }

  getTauxByCategorie(libelle: string): Observable<Taux[]> {
    const url = `${this.apiUrl}/categorie/${libelle}`;
    return this.http.get<Taux[]>(url);
  }
}

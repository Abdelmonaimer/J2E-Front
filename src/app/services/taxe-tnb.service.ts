// taxetnb.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TaxeTnb} from "../model/taxeTnb";

@Injectable({
  providedIn: 'root'
})
export class TaxeTnbService {

  private apiUrl = 'http://localhost:8888/TAXE-SERVICE/api/taxe-tnb';

  constructor(private http: HttpClient) { }

  getTaxeTnbById(id: number): Observable<TaxeTnb> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TaxeTnb>(url);
  }

  getTaxeTnbsByTerrain(nom: string): Observable<TaxeTnb[]> {
    const url = `${this.apiUrl}/terrain/${nom}`;
    return this.http.get<TaxeTnb[]>(url);
  }

  calculateTaxeTNB(cin: string, terrainNom: string, taxeTnbId: number): Observable<number> {
    const url = `${this.apiUrl}/calculate/${cin}/${terrainNom}/${taxeTnbId}`;
    return this.http.get<number>(url);
  }

  payTaxeTNB(cin: string, terrainNom: string, taxeTnbId: number): Observable<void> {
    const url = `${this.apiUrl}/calculate/${cin}/${terrainNom}/${taxeTnbId}`;
    return this.http.get<void>(url);
  }
}

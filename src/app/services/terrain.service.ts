// terrain.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Terrain } from "../model/terrain";

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  url: string = "http://localhost:8888/TAXE-SERVICE/api/terrains";

  constructor(private http: HttpClient) { }

  getTerrains(): Observable<Terrain[]> {
    return this.http.get<Terrain[]>(this.url);
  }

  getTerrainsByCin(cin: string): Observable<Terrain[]> {
    const url = `${this.url}/user/${cin}`;
    return this.http.get<Terrain[]>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TormentaCatalog } from './tormenta-catalog';

@Injectable({ providedIn: 'root' })
export class TormentaDataService {
  catalog!: TormentaCatalog;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this.catalog = await this.http.get<TormentaCatalog>('/api/tormenta').toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { TormentaCatalog } from './tormenta-catalog';

@Injectable({ providedIn: 'root' })
export class TormentaDataService {
  catalog!: TormentaCatalog;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this.catalog = await forkJoin({
      database: this.getResource('database'),
      pericias: this.getResource('pericias'),
      magics: this.getResource('magics'),
      char_export: this.getResource('char_export'),
      armor: this.getResource('armor'),
      weapons: this.getResource('weapons'),
      attributes: this.getResource('attributes'),
    }).toPromise();
  }

  private getResource<K extends keyof TormentaCatalog>(resource: K) {
    return this.http.get<TormentaCatalog[K]>(`/api/tormenta/${resource}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { TormentaDataService } from './tormenta-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  loaded = false;
  loading = false;
  error = '';

  constructor(private data: TormentaDataService) {}

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      await this.data.load();
      this.loaded = true;
    } catch {
      this.error = 'Não foi possível carregar os dados. Verifique se a API está disponível.';
    } finally {
      this.loading = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeituraSolo } from '../interfaces/sensores.interface';

@Component({
  selector: 'app-container-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-tabela.component.html',
  styleUrls: ['./container-tabela.component.css']
})
export class ContainerTabelaComponent implements OnInit {
  titulo: string = 'Painel de Monitoramento IoT - Sensores de Solo';
  fazenda: string = 'Fazenda Modelo UniRV - Setor de Irrigacao 04';

  leituras: LeituraSolo[] = [
    { data: '04/11/2026 08:00', n: 150, p: 110, k: 125, umidade: 0.55, status: 'Ideal' },
    { data: '04/11/2026 09:30', n: 142, p: 105, k: 118, umidade: 0.48, status: 'Alerta' },
    { data: '04/11/2026 11:00', n: 130, p: 98, k: 110, umidade: 0.38, status: 'Critico' },
    { data: '04/11/2026 12:30', n: 155, p: 112, k: 130, umidade: 0.60, status: 'Ideal' }
  ];

  constructor() { }

  ngOnInit(): void { }

  get totalSensores(): number {
    return this.leituras.length;
  }

  get totalIdeal(): number {
    return this.leituras.filter(s => s.status?.toLowerCase().includes('ideal')).length;
  }

  get totalAlerta(): number {
    return this.leituras.filter(s => s.status?.toLowerCase().includes('alerta')).length;
  }

  get totalCritico(): number {
    return this.leituras.filter(s => s.status?.toLowerCase().includes('critico')).length;
  }

  formatUmidade(umidade: number): number {
    return Math.round(umidade * 100);
  }
}

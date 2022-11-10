import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if (this.bmi >= 25) {
      this.resultado = 'Exceso de Peso';
      this.interpretacion =
        'Tiene un peso por encima de lo indicado. Debería bajarle a la comida o hacer más ejercicios';
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Peso Normal';
      this.interpretacion =
        'Tiene un peso normal. No hay problemas con su peso';
    } else {
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'Tiene muy poco peso. Debería comer más';
    }
  }
}

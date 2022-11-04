import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

}

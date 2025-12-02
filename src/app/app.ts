import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './model/direccion';
import { FormsModule } from '@angular/forms';
import { Alumno } from './model/alumno';
import { dir } from 'console';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('Boletin2POO');
  public direccion: Direccion = new Direccion(1,41510, "Sevilla", "Mairena del alcor", "Sevilla");
  public alumno: Alumno = new Alumno("12345678p", "Pepe", "Viyuela", new Date(), this.direccion);
}

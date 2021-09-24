import { Component } from '@angular/core';

@Component({
	selector: 'persona',
	template: '<table border="1"><thead><tr align="center"><th colspan="3">Alumno</th></tr><tr><th>Código</th><th>Nombre</th><th>Apellido</th></tr></thead><tbody><tr><td>{{codigo}}</td><td>{{nombre}}</td><td>{{apellido}}</td></tr></tbody></table>'
})

export class Alumno {
	public nombre: string;
	public apellido: string;
	public codigo: number;

	constructor(){
		this.nombre = "Jorge";
		this.apellido = "Montaño";
		this.codigo = 11223344;
	}
}
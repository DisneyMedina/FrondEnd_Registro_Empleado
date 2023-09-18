import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddempleadoComponent {

    lstPais : Pais[] = [];

    objEmpleado: Empleado = {
          nombres :  "",
          fechaNacimiento :  new Date("2023-09-17"),
          pais:{
            idPais:-1,
          } 
    };

    constructor(private paisService: PaisService, private empleadoService:EmpleadoService){

          this.paisService.listaPais().subscribe(
                data => this.lstPais = data
          );
    }

    inserta(){
          this.empleadoService.registraEmpleado(this.objEmpleado).subscribe(
                x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro - Dmedina',text: x.errores}) 
          );
    }    
}

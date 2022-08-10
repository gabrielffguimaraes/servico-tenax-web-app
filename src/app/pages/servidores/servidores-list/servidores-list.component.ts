import { Component, OnInit } from '@angular/core';
import { ServidorService } from "../shared/servidor.service";
import { Servidor } from "../shared/servidor.model";

@Component({
  selector: 'app-servidores-list',
  templateUrl: './servidores-list.component.html',
  styleUrls: ['./servidores-list.component.css']
})
export class ServidoresListComponent implements OnInit {
  servidores!: Servidor[] ;
  constructor(private servidorService:ServidorService) { }

  ngOnInit(): void {
    this.servidorService.getAll().subscribe(
      servidores => this.servidores = servidores,
      error => console.log(error)
    )
  }
  deleteServidor(servidor:Servidor) {
    if(confirm("Deseja realmente excluir este Servidor ?")) {
      this.servidorService.delete(servidor.id).subscribe(
        () => this.servidores = this.servidores.filter(element => element != servidor),
        () => alert("Erro ao deletar servidor")
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
constructor(private servicioFavoritos:ServicioDeFavoritosService){}
public listdeVideos:Array<any>=[];

  ngOnInit(): void {
    
    this.servicioFavoritos.disparadorDeFavoritos.subscribe((data: any)=>{
this.listdeVideos.push(data);
    });
  }



}

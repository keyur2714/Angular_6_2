import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Server } from './server.model';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: Server = new Server();  
 
  @Output("getServer")
  getServerEvent = new EventEmitter<Server>();
  constructor() { }

  ngOnInit() {
  }

  addServer(){
    console.log("======1");
    this.getServerEvent.emit(this.server);
  }

}

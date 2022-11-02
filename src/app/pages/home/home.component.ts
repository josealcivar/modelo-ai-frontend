import { Component, OnInit } from '@angular/core';
import { ApiModeloService } from '../../services/api-modelo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public  _apiModeloService : ApiModeloService
  ) { }
  
  async ngOnInit() {
    (await this._apiModeloService.getUsers('2', 'Norte', 'tienda', '')).subscribe(res=>{
      console.log('res');
      console.log(res);
    });
    ;
  }

}

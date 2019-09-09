import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private Http: HttpService
  ) {
    this.Http.getCurrentUser().subscribe(res=>{
      console.log(res)
    })
   }

  ngOnInit() {
  
  }

}

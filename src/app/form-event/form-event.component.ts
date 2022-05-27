import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';



@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {

  @ViewChild('validate')
  validate : ElementRef;

getData: any;



  constructor() { }

  ngOnInit(): void {
  

  }
  rxjsEventObservable(){
    const btnObservable$ = fromEvent(this.validate?.nativeElement , 'click');
    btnObservable$.subscribe(data => {     
      console.log(data);
      
    })
    }
  


}

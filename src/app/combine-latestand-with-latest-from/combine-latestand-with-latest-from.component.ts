import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { fromEvent, map, take, withLatestFrom } from 'rxjs';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latestand-with-latest-from',
  templateUrl: './combine-latestand-with-latest-from.component.html',
  styleUrls: ['./combine-latestand-with-latest-from.component.css']
})
export class CombineLatestandWithLatestFromComponent implements OnInit {

  nameSource = ['Biman', 'Maggie', 'Ballu', 'Sanchita', 'Sumna', 'Khan', 'Maity', 'Prakash', 'Shayon', 'Arnab'];

  colourSource = ['green', 'yellow', 'pink', 'red', 'orange', 'violet', 'blue', 'purple'];


  //Template Referance
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;



  ngAfterViewInit() {

    const nameObs$ = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value), take(3))

    const colorObs$ = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value), take(3))


    //  EX-1 combineLatest
    combineLatest(nameObs$, colorObs$).subscribe(([name, color]) => {
      this.zipText(name, color, 'elContainer');
      console.log(name, color);
    })


    //Example-2  WithLatest
    nameObs$.pipe(withLatestFrom(colorObs$)).subscribe(([name, color]) => {
      this.zipText(name, color, 'elContainer2');
      console.log(name, color);
    })
  }


  constructor() { }

  ngOnInit(): void {
  }

  zipText(name: any, colour: any, ContainerId: any) {
    const finalname = name;
    const finalcolor = colour;
    const combo = name + "  " + colour;
    let el = document.createElement('div');
    el.className = 'styleDemo';
    el.classList.add('styleDemo2');
    el.innerText = combo;
    document.getElementById(ContainerId)?.appendChild(el);
  }
}



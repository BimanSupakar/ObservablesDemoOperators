import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, take, zip } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-zip-and-fork-join',
  templateUrl: './zip-and-fork-join.component.html',
  styleUrls: ['./zip-and-fork-join.component.css']
})
export class ZipAndForkJoinComponent implements OnInit {

  nameSource = ['Biman', 'Maggie', 'Ballu', 'Sanchita', 'Sumna', 'Khan', 'Maity', 'Prakash', 'Shayon', 'Arnab'];

  colourSource = ['green', 'yellow', 'pink', 'red', 'orange', 'violet', 'blue', 'purple'];



  //Template Referance
  @ViewChild('name') name: ElementRef;
  @ViewChild('colour') colour: ElementRef;


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const nameObs$ = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value), take(5))

    const colourObs$ = fromEvent<any>(this.colour.nativeElement, 'change').pipe(
      map(event => event.target.value), take(4))


    zip(nameObs$, colourObs$).subscribe(([name, colour]) => {
      this.zipText(name, colour, 'elContainer');
      console.log(name, colour);
    })

    forkJoin(nameObs$, colourObs$).subscribe(([name, colour]) => {
      this.zipText(name, colour, 'elContainer2');
      console.log(name, colour);

    })
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

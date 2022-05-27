import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
 
  public consoleMessages: string[] = [];
  public userQuestion: string;
  userQuestionUpdate = new Subject<string>();

  constructor() { 
    this.userQuestionUpdate.pipe(
      debounceTime(3000),
      distinctUntilChanged())
      .subscribe(value => {
        this.consoleMessages.push(value);
      });
  }

  ngOnInit(): void {
    
  }


}

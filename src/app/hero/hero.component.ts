import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent implements OnChanges, OnDestroy, OnInit {
  @Input () name: string;
  // @Output() liked = new EventEmitter();
  @Output() liked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }

  ngOnChanges(changes: SimpleChanges){
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    if(!hero.isFirstChange()){
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }
}

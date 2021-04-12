import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;

  // @Output() liked = new EventEmitter();

  @Output() liked = new EventEmitter<boolean>();
}

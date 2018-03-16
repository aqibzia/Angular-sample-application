import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./Star.component.css']
})

export class StarComponent {
  @Input() rating: number;
  startWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>;

  ngOnChnages(): void {
    this.startWidth = this.rating * 86/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }
}

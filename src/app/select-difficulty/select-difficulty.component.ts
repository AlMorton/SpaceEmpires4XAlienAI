import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Difficulty } from '../enums/Difficulty.';

@Component({
  selector: 'app-select-difficulty',
  templateUrl: './select-difficulty.component.html',
  styleUrls: ['./select-difficulty.component.scss']
})
export class SelectDifficultyComponent implements OnInit {

  difficultyEnum = Difficulty; 
  
  public options: Array<string>;

  constructor() {
    
   }

  ngOnInit() {
  }

}

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe
implements PipeTransform
{
  transform(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }  
}

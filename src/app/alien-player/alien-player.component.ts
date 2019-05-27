import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { AlienPlayer } from '../classes/AlienPlayer';

@Component({
  selector: 'app-alien-player',
  templateUrl: './alien-player.component.html',
  styleUrls: ['./alien-player.component.scss']
})
export class AlienPlayerComponent implements OnInit {

  @Input() public alien: AlienPlayer;

  constructor() { }

  ngOnInit() {
  }

}

@Pipe({
  name: 'propertiesToArrayPipe'
})
export class PropertiesToArrayPipe implements PipeTransform {
  transform(data: Object) {
    
    const keys = Object.keys(data);
    var t = [];
    keys.slice(keys.length / 2)
    .forEach((x) => {
      if(typeof data[x] === "boolean") {
        t.push(x);
      }
    });

    return t;
  }
}

@Pipe({
  name: 'deCamelCase'
})
export class DeCamelCase implements PipeTransform {
  transform(data: string) {
    
    let str = data.replace(/^\w|[A-Z]/gi, (c) => {
        let x = '';
       return x += c;
    });

    return str;
   
  }
}
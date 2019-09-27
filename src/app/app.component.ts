import {Component, HostListener, OnInit} from '@angular/core';
import * as rxJs from 'rxjs';
import { debounce } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'riched';

  constructor(){}


  mainframe = new rxJs.BehaviorSubject('');

  distanceFromMaintainContainer = 30;
  editorSize = {
    width: 0,
    height: 0
  };

  ngOnInit(){
    console.log('initwidth and height')
    console.dir(this.editorSize)
  }

  @HostListener('window:resize', ['$event.target'])
  resizeWindow(target){
    console.log('resize')
    debounce(this.calculateEditorSize, 150)();
  }

  calculateEditorSize = () => {
    console.log("calculateEditorSize")
    this.editorSize.height = window.innerHeight - this.distanceFromMaintainContainer;
    this.editorSize.width = window.innerWidth - this.distanceFromMaintainContainer;
    console.log('editorSize')
    console.dir(this.editorSize)
  }

}

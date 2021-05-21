import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(link:string){
    
    console.log("scroll to contact")
  }

  switchTheme(){
    this.isDarkMode = !this.isDarkMode
    console.log(this.isDarkMode);
  }

}

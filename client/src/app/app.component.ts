import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating app';
  user: any;
  
  constructor(private http:HttpClient){

  }
  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.http.get('https://localhoat:5026/api/user').subscribe(response =>{
      this.user=response;
    },error =>{
      console.log(error);
      console.log(1);
    })
  }
}

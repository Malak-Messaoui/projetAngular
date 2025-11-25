import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nameFilter!:string

  title:string="Welcome 4SE1";
  product:any=[
    {name:"Laptop", price:1000, quantity:5,like:0},
    {name:"Smartphone", price:500, quantity:10,like:0},
    {name:"Tablet", price:300, quantity:7,like:0}
 ]

 save():void{
   alert("Hello from save method");
 }
 nbrLikes(p:any):void{
   p.like++;
   //2eme methode
  //this.product[i].like++;
  
 }
  
}

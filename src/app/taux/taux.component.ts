import { Component, Input, OnInit } from '@angular/core';
import { Devise } from '../models/devise';
import { DevisService } from '../services/devis.service';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.scss']
})
export class TauxComponent implements OnInit {
  ldevis!: Devise[];
  l!: Devise[];
  udevis!: Devise;
  devise!: String;
  coef: Number = 1;
  dev!: Number ;
  dom!: Number;
  inter!: Number;
  world!: Number;
  dollar!: Devise[];

  constructor(private devisserv: DevisService) { }

  ngOnInit(): void {
    this.getdevis();
    this.devise;
    this.dev;
    // this.dollar= this.ldevis.filter((us)=>{
    //    return us.taux> 0.3;
    // })
console.log(this.getdevis());
  

  }
  getdevis(){
     this.devisserv.listDevis().subscribe(devisL=>{
      this.ldevis= devisL;
    });
  }
 affiche(){
  console.log(this.udevis); 
  this.dev= this.udevis.rate;
  this.devise= this.udevis.codes; 


 }
 calcul(){
   this.inter= this.gettauxOfDollar().valueOf() * this.dom.valueOf();
   this.world= this.dev.valueOf() * this.dom.valueOf();
 }
 
 gettauxOfDollar(): Number{
   
  
     this.l= this.ldevis.filter((t)=>
    t.codes.includes('TND')); 
   return this.l[0].rate;
 
    }
  
}

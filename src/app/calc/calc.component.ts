import {Component} from '@angular/core';

@Component({
selector: 'calc',
templateUrl: './calc.component.html',
styleUrls:['./calc.component.css']

})

export class CalcComponent{
public number1? : number;
public number2? : number;
public result?:number

public add(){
    if(this.number1&& this.number2)
this.result= this.number1 + this.number2;
}
public sub(){
    if(this.number1&& this.number2)
this.result= this.number1 - this.number2;
}
public mul(){
    if(this.number1&& this.number2)
this.result= this.number1 * this.number2;
}
public div(){
    if(this.number1&& this.number2)
this.result= this.number1 / this.number2;
}

}
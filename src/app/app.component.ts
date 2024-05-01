import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  inputControl =  new FormControl('');
  errormessage= false;

  result!: number;
  results: {operation: string, result: number}[] = [];

  constructor(){ }

  ngOnInit(): void {
  } 

  pressNum(num: string){   
    const value = this.inputControl.value;
    this.inputControl.setValue(value + num);
  } 

  deleteAll(){
    this.inputControl.setValue('');
    this.errormessage = true;
    
  }
  clear(){    
  
  }

  calculate() {
    const value = this.inputControl.value;
    const opeartors = ['+', '-', '*', '/','%'];
    
    // Find operator
    for (const operator of opeartors){
      const index = value?.indexOf(operator) || -1;
      if (index > -1){
        const firstNumber = value?.slice(0, index) || '';
        const secondNumber = value?.slice(index+1) || '';
        console.log(firstNumber, operator, secondNumber);
        //add operator
        if(operator === '+'){
          this.result = parseFloat(firstNumber) + parseFloat(secondNumber) ;
        }
        //substruct operator
        if(operator === '-'){
          this.result = parseFloat(firstNumber) - parseFloat(secondNumber) ;
        }
        //multiple operator
        if(operator === '*'){
          this.result = parseFloat(firstNumber) * parseFloat(secondNumber) ;
        }
        //divide operator
        if(operator === '/'){
          this.result = parseFloat(firstNumber) / parseFloat(secondNumber) ;
        }
        //percentage operator
        if(operator === '%'){
          this.result = parseFloat(firstNumber) / 100 ;
        }

        
        if (isNaN(Number(firstNumber)) || isNaN(+secondNumber) && (operator !== '+' || '-' || '*'||'/'||'%')){
          console.log('Invalid value');
          this.errormessage = true;
        }
        if(this.errormessage===false){
          this.results.push({ operation: value || '', result: this.result})
          break;         
        }
      

      }
    }

    // First value
    // Second value
    // Validation
    // Result
  }
}

 




  


import React, { useState } from 'react'


const Calcu=()=>{
        const [number1, setNumber1] = useState('')
        const [number2, setNumber2] = useState('')
        const [operator, setOperator] = useState('') 
        const [result, setResult] = useState('')
    
        const [operation, setOperation] = useState(false)
        const [prical, setPrical] = useState(false)
        const [primcalcu, setPrimcalcu] = useState(false)
    
        const [state, setState] = useState({
            'privious': '',
            'operation': '',
            'current': '',
        })

        const values = (num) => {
            if(operation === false){
                if(primcalcu){
                    clear(num, true)
                    
                }if( num === '.'){
                    state.privious += num
                    setNumber1(number1 + num)
                    }else if (num === 'backspace'){
                        setState({ 
                        'privious': state.privious.slice(0, -1),
                        'operation': '',
                        'current': ''
                    })
                    setNumber1(number1)   
                }else{ 
                    
                    state.privious += num
                    setNumber1(number1 + num)
                    
                }
            }else{
                if (num === '.'){
                    
                    state.current += num
                    setNumber2(number2 + num)
                }else if(num === 'backspace'){
                    
                    setState({
                       
                        'operation': state.operation,
                        'current': state.current.slice(0, -1),
                    })
                }else{
                
                    state.current += num
                    setNumber2(number2 + num)
                }
            }
        }

        
        const operate = (num) => {
            state['operation'] = num
            setOperator(num)
            setOperation(true)
    
            
            if(prical){
                setState({
               
                'operation': state.operation,
                'current': '',
                })
                setNumber1(state)
                setNumber2('')   
            }

            setPrical(true)
        }

        const equal = (num) => {
       
        
            const ops = {
                '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
                '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
                '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
                '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
            }
            
           
            let result = ops[state['operation']](state.privious, state.current)
           
            setResult(result)

        
            setOperation(false)
            setPrimcalcu(true)
        }

        
        const clear = (num, ca) => {
           
            if(ca){ 
                setState({
                    'privious': num,
                    'operation': state.operation,
                    'current': '',  
                })

            
            }else{
                setState({
                    'privious': '',
                    'operation': state.operation,
                    'current': '',  
                })
    
                setPrical(false)
                setResult('')
                setNumber1('')
                setNumber2('')
                setOperator('')
            }
        }
        
       
     
       
        const calculate = (num) => {

            console.log("num",num)
            
            if (!isNaN(num) || num === '.' ){
                values(num)
            }else if ((num === '+' || num === '-' || num === '/' || num === '*')){
                operate(num)
            }else if(num === 'C'){
                clear()
            }else if(num === '='){
                if(state.current !== ''){
                    equal(num)
                }
            }
            console.log("calculate",calculate)
        }
    
    return(
        <section>
             <div>
                <p>
                {state.privious}
                {operator}
                {state.current}</p>
                <input type="text" value={result}/>
               
            </div>
        

            <div>
            <button value = {'C'} onClick = {(e) => calculate(e.target.value)}> C </button>
            <button value = {'/'} onClick = {(e) => calculate(e.target.value)}>/</button>
            <br/>
            <button value = {'1'} onClick = {(e) => calculate(e.target.value)}> 1 </button>
            <button value = {'2'} onClick = {(e) => calculate(e.target.value)}> 2 </button>
            <button value = {'3'} onClick = {(e) => calculate(e.target.value)} >3 </button>
            <button value = {'*'} onClick = {(e) => calculate(e.target.value)}>*</button>
            <br/>
            <button value = {'4'} onClick = {(e) => calculate(e.target.value)} >4</button>
            <button value = {'5'} onClick = {(e) => calculate(e.target.value)}>5</button>
            <button value = {'6'} onClick = {(e) => calculate(e.target.value)}>6</button>
            <button value = {'-'} onClick = {(e) => calculate(e.target.value)}>-</button>
            <br/>
            <button value = {'7'} onClick = {(e) => calculate(e.target.value)}>7</button>
            <button value = {'8'} onClick = {(e) => calculate(e.target.value)}>8</button>
            <button value = {'9'} onClick = {(e) => calculate(e.target.value)}>9</button>
            <button value = {'+'} onClick = {(e) => calculate(e.target.value)}>+</button>
            <br/>
            <button value = {'.'} onClick = {(e) => calculate(e.target.value)} >.</button>
            <button value = {'0'} onClick = {(e) => calculate(e.target.value)} >0</button>
            <button value = {'='} onClick = {(e) => calculate(e.target.value)}>=</button>
        </div>
      </section>
    )
}

export default Calcu;
import React,{useState} from 'react';

const Mcal =()=>{

    const [state, setState] =useState("");
    // const [operation, setOperation] =useState("");
    // const [currOperand, setCurrOperand] =useState("");
    const [result, setResult]=useState("");

    const handleClick =(e)=>{
        setState(state.concat(e.target.name));
        console.log("e",e.target.name)
        // console.log("pr",previousOperand)
    // }
    // const clickHandler=(e)=>{
    //     setCurrOperand(currOperand.concat(e.target.name));
    // }
    // const handleOperation =(e)=>{
    //     setOperation(operation.concat(e.target.name));
    }

    const  evaluate= ({ currOperand, previousOperand, operation })=> {
        const prev = parseFloat(previousOperand)
        const current = parseFloat(currOperand)
        let value = ""
        switch (operation) {
          case "+":
              value=prev+current
            break
          case "-":
              value=prev-current
            break
          case "*":
              value=prev*current
            break
          case "/":
              value=prev/current
            break
            default:
                break
                
                
        }
        
        setResult(result);
        return value.toString()
        
      }
      
      
   
    return(
            
            <div>
                <form>
                {/* <div>{(previousOperand)} {currOperand}{operation}</div> */}
                {/* <div> {(currOperand)}</div> */}
                <input type="text" value={state,result} />

                </form>
            <div>

                <button >D</button>
                <button>C</button>
                <button value={evaluate}>=</button>
                <br/>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <br/>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <br/>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="0" onClick={handleClick}>0</button>
                <br/>
                <button name="+" onClick={handleClick}>+</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="*" onClick={handleClick}>*</button>
                <button name="/" onClick={handleClick}>/</button>

            </div>
            </div>
    )

}
export default Mcal;
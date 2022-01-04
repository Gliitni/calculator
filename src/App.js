import React,{useState} from 'react';

const App =()=> {

    const [result, setResult] = useState('');
    const calculate =(e)=>{
        setResult(eval(result).toString());  
    }

    const handleClick =(e)=>{
        // console.log("e",e)
        setResult(result.concat(e.target.name));
        
    }

    const clear =(e)=>{
        setResult('');  
    }
    const back =(e)=>{
        setResult(result.slice(0, -1));  
    }
    

    return(
        <div>
            <form>
                <input type="text" value={result} />
            </form>
            <br />
            <div>
                <button name='clear' onClick={clear} id="clear">Clear</button>
                <button  name='D' onClick={back}>D</button>
                <button  name='/' onClick={handleClick}>/</button>
                <br />
                <button  name='7' onClick={handleClick}>7</button>
                <button  name='8' onClick={handleClick}>8</button>
                <button  name='9' onClick={handleClick}>9</button>
                <button  name='*' onClick={handleClick}>*</button>
                <br />
                <button  name='4' onClick={handleClick}>4</button>
                <button  name='5' onClick={handleClick}>5</button>
                <button  name='6' onClick={handleClick}>6</button>
                <button  name='-' onClick={handleClick}>-</button>
                <br />
                <button  name='1' onClick={handleClick}>1</button>
                <button  name='2' onClick={handleClick}>2</button>
                <button  name='3' onClick={handleClick}>3</button>
                <button  name='+' onClick={handleClick}>+</button>
                <br/>
                <button  name='0' onClick={handleClick}>0</button>
                <button  name='.' onClick={handleClick}>.</button>
                <button   onClick={calculate}>=</button>
                
            </div>
        </div>
    )
}
export default App;
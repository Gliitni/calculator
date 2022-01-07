import React,{useState} from 'react';

const Demo =() =>{

    const[valueA, setValueA]=useState();
    const[valueB ,setValueB]=useState();
    const[operations,setOperations]=useState();
    const[result, setResult]=useState();

    const submitHandler=()=>{ 
        if(operations==='+'){
        setResult(parseInt(valueA)+parseInt(valueB));
        }
        if(operations==='-'){
        setResult(valueA-valueB);
        }
        if(operations==='*'){
        setResult(valueA*valueB);
        }
        if(operations==='/'){
        setResult(valueA/valueB);
    }
    // const clear =(e)=>{
    //      setResult('');
    // }
    // const back =(e)=>{
    //     setResult(result.slice(0, -1));  
    // }
    

}
    
    return (
        <div>
            <h1>Simple Calculator</h1>
            <h4>{result}</h4>
         <div>
            <input type="text" value={valueA} onChange={(e)=>setValueA(e.target.value)}/>
            <br />
            <input type="text" value={valueB} onChange={(e)=>setValueB(e.target.value)}/>
            <br />
            
            <button onClick={submitHandler}>submit</button>
            <button name='clear' onClick={()=>setResult('')} id="clear">Clear</button>
             <button  name='D' onClick={()=>setResult(result.slice(0, -1))}>D</button>
            <button onClick={()=>setOperations('+')}>+</button>
            <button onClick={()=>setOperations('-')}>-</button>
            <button onClick={()=>setOperations('*')}>*</button>
            <button onClick={()=>setOperations('/')}>/</button>
            
        </div>
        </div>
    )
}
export default Demo;
 
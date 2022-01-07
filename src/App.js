import React from 'react';
import Lcal from './Lcal';

// import Demo from './Demo';

const App =()=> {

    // const [result, setResult] = useState('');

    // const calculate =(e)=>{

    //     try{
    //     setResult(eval(result).toString());  
    //     }
    //     catch(err){
    //         setResult("Error");
        // }
    // }

    // const handleClick =(e)=>{
    //     // console.log("e",e)
    //     setResult(result.concat(e.target.name));
        
    // }

    // const clear =(e)=>{
    //     setResult('');  
    // }
    // const back =(e)=>{
    //     setResult(result.slice(0, -1));  
    // }
    

    return(
        <div>
            {/* <Calcu2 /> */}
            {/* <Demo /> */}
            <Lcal />
        
        </div>
    )
}
export default App;
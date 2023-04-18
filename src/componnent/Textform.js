import React from 'react'
import { useState } from 'react' //hooke

export default function Textform() {

    const handleupclick = ()=>{
        console.log("handleupclick clicked");
        let newtext=text.toUpperCase()
        setText(newtext)
        
    }

    const handledowclick = ()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
       
    }
    const clear =()=>{
        setText('')
    }

    const handleonchange = (event)=>{
        console.log("on going");
         setText(event.target.value)
    }

    
    const[text, setText] = useState(''); //states
    return (
        <>
        <div className='container my-3'>
            <div className="mb-3">
                <h4>Enter Text To Analyze</h4>
                <textarea className="form-control" onChange={handleonchange} value={text} id="exampleFormControlTextarea1" placeholder='Enter Text Here' rows="7"></textarea>
            </div>
            <button type="button" onClick={handleupclick} className="btn btn-primary">Convert Uppercase</button>
            <button type="button" onClick={handledowclick} className="btn btn-primary mx-3">Convert Lowercase</button>
            <button type="button" onClick={clear} className="btn btn-primary ">Clear Text</button>
        </div>

        <div className='container my-3'>
            <h4>Your text summery</h4>
            <p><b>Words - </b>{text.split(" ").length} <b>Characters - </b> {text.length}</p>
        </div>
        </>
    )
}

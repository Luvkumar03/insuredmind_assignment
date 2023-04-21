import React,{useState} from "react";
export default function TextArea() {
  const [show , setShow] = useState(false)
  const [value , setValue] = useState("")
  const [ list , setList] = useState([])
  const agents =  ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula M. Keith"]
  function handleInput(e){
    console.log(e)
    if(e.key === "@"){
      setShow(true)
    }
  }
  const handleElement=(el)=>{
    console.log(el)
    setList([...list,el])
    setShow(false)
    setValue("")
  }
  return (
   <>
   <div style={{display : "flex" , gap : "1rem" , border: "1px solid" , height : "fit-content" , padding : "1rem" }}>
     {
       list.map((el,ind)=><div>
         <span style={{backgroundColor : "yellow" , border : "1px solid" , }}>{el}</span>
         </div>)
     }
      <div>
        <input value={value} onKeyDown={handleInput} onChange={(e)=>setValue(e.target.value)}/>
        <div>
          {
            agents.map((el,ind)=>{
            return show ?<div key={ind}>
            <span onClick={()=>handleElement(el)}>{el}</span>
            </div>: null})
          }
        </div>
      </div>
     </div>
   </> 
  );
}

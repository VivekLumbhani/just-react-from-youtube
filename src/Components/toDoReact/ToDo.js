import React, { useState,useEffect } from 'react'
import './style.css'

// to get the data even after referes
const getLocalStorage=()=>{
    const lists=localStorage.getItem("mytodolist")
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}
function ToDo() {
    const [inputdata,setdata]=useState("")
    const [items,setItems]=useState(getLocalStorage())

    
    // for adding new item in list
    const additem=()=>{
        if(!inputdata){
            alert("empty")
        }else{
            const newobj={
                id:new Date().getTime().toString(),
                name:inputdata
            }
            setItems([...items,newobj])
            setdata("")
        }
    }

    // for deleting item from list
    const deleteitem=(index)=>{
        const updateditem=items.filter((curelm)=>{
            return curelm.id !== index;
        })
        setItems(updateditem)
    }

    const deleteAll=()=>{
        setItems([])
    }

    useEffect(() => {
      localStorage.setItem("mytodolist",JSON.stringify(items))
    }, [items])
    
  return (
    <>
      <div className="main-div">
        <div className="chai-div">
            <figure>
                
               <img width={100} height={40} src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701216000&semt=ais" alt="todo" />
               <figcaption>Add your List</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='📝 Enter the List to dok'value={inputdata} 
                onChange={(event)=>{
                    setdata(event.target.value)
                }} 
                className='form-control'/>
                <i className="fa fa-solid fa-plus add-btn" onClick={additem}></i>
            </div>
            {/* For showing list items */}
           
                <div className="showItems">
                    {
                        items.map((curelm)=>{
                            return(
                                <div className="eachItem"key={curelm.id}>
                                    <h3>{curelm.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-solid fa-edit add-btn"></i>
                                        <i className="far fa-solid fa-trash-alt add-btn" 
                                        onClick={()=> deleteitem(curelm.id)}
                                        ></i>

                                    </div>
                                </div>
                            )
                        
    
                        })
                    }
                </div>
            {/* For showing list items */}

            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove All" 
                onClick={deleteAll}
                ><span>CheckList</span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ToDo

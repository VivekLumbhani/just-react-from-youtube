import React, { useState } from 'react'
import './style.css'
import Menu from '../MenuApi'
import MenuCart from './MenuCart'
import NavBar from './NavBar'

const uniqueList=[ ...new Set(Menu.map((currElem)=>{
    return currElem.category;
})),"All",]
console.log("cur elem list "+uniqueList);
function Restaurant() {
    const [menuData,setMenuData]=useState(Menu)
    const [menuList,setMenuList]=useState(uniqueList)
    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return
        }
        const updatedList=Menu.filter((cuelem)=>{
            return cuelem.category===category;
        })
        setMenuData(updatedList)
    }
    return (
    <>
        <NavBar  filterItem={filterItem} menuList={menuList} />
       <MenuCart menuData={menuData}/>
    </>
  )
}

export default Restaurant

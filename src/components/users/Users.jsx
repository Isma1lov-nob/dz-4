import React, { useEffect, useState } from "react";
import useFillter from "../../hooks/useFillter";
import useSort from "../../hooks/useSort";

function Users (){
   
   const [users , setUsers] = useState([])
   const [search , setSearch] = useState("")
   const [sortBy , setSortBy] = useState("")
   const filteredUsers = useFillter(search, users)
   const sortedUsers = useSort(sortBy , filteredUsers)
   
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> setUsers(data))
   },[])

   const changeSearch = (e)=>{
   
    setSearch(e.target.value)
   }
   const changeSortBy = (by)=>{
    setSortBy(by)
   }
   
   
    return (
        <div>
            <div>
                <h2>Фильтрация</h2>
                <input type="text" onChange={changeSearch} />
            </div>
            <ul>
           {sortedUsers.map((user , key)=> <li key = {key}>
                <span>{user.name}</span>
                <span>{user.id}</span>
           </li>)}     
            </ul>
            <div>
                <button onClick={()=>{changeSortBy("name")}}>sort by name</button>
                <button onClick={()=>{changeSortBy("id")}}>sort by id</button>
            </div>
        </div>
    )
}
export default Users
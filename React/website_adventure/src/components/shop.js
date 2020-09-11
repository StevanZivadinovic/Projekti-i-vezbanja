import React, {useState, useEffect} from 'react'


export default function Shop() {
const [items, setItems] = useState();
useEffect(()=>{
    fetchItems();
},[])



    const fetchItems = async () =>{
        const data = await fetch('https://newssite.com/topnews');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }





    const fontStyle = {
        fontWeight:'800'
    }
    return (
        <div style={fontStyle}>
            Shop page
        </div>
    )
}

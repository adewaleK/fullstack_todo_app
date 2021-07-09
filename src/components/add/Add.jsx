import { useState } from 'react';

import './Add.css'
import Items from '../items/Items'

function Add() {
    const [items, setItems] = useState([]);
    const [todoItem, setTodoItem] = useState('');
    const [idd, setIdd] = useState(false);
    
    const handleAdd = (td) => {
        
        let obj ={
            name: td,
            id: Math.random(10)
        }
        
       if(!idd){
            setIdd(false);
            if(td !== ''){
                setItems([...items, obj]);
                console.log(obj);
                setTodoItem('')
            }else{
                alert('Enter a todo')
            }
       }else if(idd){
           setIdd(true);
           console.log('we are editing' + obj.id);
           
           
       }
    }
    return (
        <>
            <div className="add">
                <div className="add-box">
                    <input type="text" className="item-input" placeholder="Add an item..." onChange={(e) => setTodoItem(e.target.value)} value={todoItem} />
                    <div className="add-icon" onClick={() => handleAdd(todoItem)}>+</div>
                </div>
            </div>

            {
                items.map(it => <Items item={it} 
                    key={it.id} 
                    setItems={setItems} 
                    items={items} 
                    setIdd={setIdd}
                    idd={idd}
                    setTodoItem={setTodoItem}
                />)
            }
            
        </>
    );
  }
  
  export default Add;
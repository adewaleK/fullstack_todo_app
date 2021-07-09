import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
//import { useState } from 'react';

import './Items.css'

//import Items from '../items/Items'

function Items({item, setItems, items, idd, setIdd, setTodoItem}) {

    const handleTrash =(id) => {
        console.log('trashed item '+ id);
        setItems(items.filter(it => it.id !== id))
    }

    const handleEdit = (id) => {
        console.log('Edited item '+ id);
        setIdd(true)
        setItems(items.filter(it => it.id !== id))
        const it = items.find(it=>it.id === id);

        setTodoItem(it.name)
        setIdd(false);
    }


    return (
    <>
        <div className="items">
          {
            item && (
            <div className="main-box">
                <div className="lists">
              <div className="item">
                {item.name}
              </div>

              <div className="action-btns">
                <div className="edit-icon" onClick={()=>handleEdit(item.id)}>
                   <EditIcon /> 
                </div>
                <div className="trash-icon" onClick={()=>handleTrash(item.id)}>
                   <DeleteForeverIcon />
                </div>
              </div>
            </div>
            </div>
            )
          }
        </div>
     </>    
    )
  }
  
  export default Items;
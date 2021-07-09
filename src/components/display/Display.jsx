//import "../items/Items.css";
import "./Display.css"


function Display({item}) {
    return (
        <>

            <div className="item">
               <p>{item}</p>
            </div>
            <div className="action-btns">
               <div className="edit-icon">
                    Edit
                </div>
                <div>
                    Delete
                </div>
            </div>
          
        </>
    );
  }
  
  export default Display
  
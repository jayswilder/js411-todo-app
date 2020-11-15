import React from 'react';
import './App.js';


function ListComponent(props) {
    return (
        <div style={
            {
                display: "flex",
                justifyContent: "center",
            }
        }>
            <ul>{props.todoItems.map((item) => {
                console.log(item)
                return (
                    <div key={item.id}>

                        <li>{item.name} <button style={
                            {
                                margin: "10px",
                                marginTop: "1px",
                                fontSize: ".8rem",
                                fontWeight: "bold",
                                height: "25px"
                            }
                        } onClick={() => props.removeItem(item.id)}>X</button></li>

                    </div>
                )
            })}
            </ul>
        </div>
    )
}


export default ListComponent;
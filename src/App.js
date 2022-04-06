import React, {useState} from 'react'
import './cannotHighlight.css' 


export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function addToList(text){
    const newList = [...list,{ text } ];
    setList(newList);
    setTask("");
    console.log(newList);
  }

  function markDone(index) {
    const newList = [...list];
    if (!newList[index].isDone){
      newList[index].isDone = true;
    } else {
      newList[index].isDone = !newList[index].isDone;
    }
    setList(newList);
  }

  function onSubmit(e){
    e.preventDefault();
    console.log("task is", task);
    addToList(task);
  }

  function removeItem(index) {
    const newList = list.slice(0,index).concat(list.slice(index+1));
    setList(newList);
  }

  function bringToTop(index) {
    const newList = [list[index],...list.slice(0,index).concat(list.slice(index+1))];
    setList(newList);
  }

  return (
    <div>
      <ul>
        {list
        .map((item, index) =>  {
        return (
          <div className = "container">
            <li style={{ textDecoration: item.isDone ? "line-through" : "" }}
            onClick ={() => markDone(index)} 
            key = {item.text}>
              {item.text}
            </li>
            <div>
              <i className= {index !== 0 ? "fa-solid fa-arrow-up" : ""}
            onClick={() => bringToTop(index)}></i>
              <i className="fa-solid fa-trash-can"
            onClick={() => removeItem(index)}></i>
            </div>
            
        </div>
        )
        })
      }
      </ul>

      <form onSubmit={onSubmit}>
        <input type = "text" 
        placeholder='task' 
        value={task} 
        onChange={e => setTask(e.target.value)}
        required></input>
        <input type = "submit" 
        value = "Add to List"></input>
      </form>
    </div>
  )
}
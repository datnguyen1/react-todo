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

  function removeItem(index) {
    const newList = list.slice(0,index).concat(list.slice(index+1));
    setList(newList);
  }

  function onSubmit(e){
    e.preventDefault();
    console.log("task is", task);
    addToList(task);
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
            <i className="fa-solid fa-trash-can"
            onClick={() => removeItem(index)}></i>
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
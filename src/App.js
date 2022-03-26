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
    console.log(newList);
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
        .map((item, index) =>
        <li style={{ textDecoration: item.isDone ? "line-through" : "" }}
         onClick ={() => markDone(index)} 
         key = {item.text}>
           {item.text}
           <i class="fa-solid fa-trash-can"></i>
            </li>)}
      </ul>
      <form onSubmit={onSubmit}>
        <input type = "text" 
        task = "task" 
        placeholder='task' 
        value={task} 
        onChange={e => setTask(e.target.value)}
        required></input>
        <input type = "submit" 
        value = "submit"></input>
      </form>
    </div>
  )
}
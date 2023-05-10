import './App.css';
import Header from './Header'
import Nav from "./Nav";
import Article from "./Article";
import {useState} from "react";

function App() {
  const [id, setId] = useState(1);
  const [nextId, setNextId] = useState(3);
  console.log(id);
  const [topics, setTopics] = useState([
    {id: 0, title: "html", body: "html is ...."},
    {id: 1, title: "css", body: "css is ...."},
    {id: 2, title: "js", body: "js is ...."}
  ]);
  
  return (
    <div>
      <Header title="new title" onChangeMode={()=>{
        alert("header");
      }}/>
      <Nav topics={topics} onChangeMode={(title, body)=>{alert(title)}} setIdProp={(value)=>{setId(value);}}/>
      <Article titleProp={topics[id].title} bodyProp={topics[id].body} submitHandler={(title, body)=>{
        console.log("new topic" + title + "  " + body);
        const newtopics = [...topics];
        newtopics.push({id: 4, title: title, body: body});
        console.log(newtopics, topics);
        setTopics(newtopics);
      }}/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header'
import Nav from "./Nav";
import Article from "./Article";
import {useState} from "react";

function App() {
  const [id, setId] = useState(1);
  const [nextId, setNextId] = useState(3);
  const [mode, setMode] = useState("read");
  const [topics, setTopics] = useState([
    {id: 0, title: "html", body: "html is ...."},
    {id: 1, title: "css", body: "css is ...."},
    {id: 2, title: "js", body: "js is ...."}
  ]);
  
  return (
    <div>
      <Header title="new title" onChangeMode={()=>{
        setMode("create");
      }}/>
      <Nav topics={topics} onChangeMode={(title, body)=>{alert(title)}} setIdProp={(value)=>{setId(value);}}/>
      <Article id={id} mode={mode} setMode={setMode} titleProp={topics[id].title} bodyProp={topics[id].body} submitHandler={(title, body)=>{
        const newtopics = [...topics];
        newtopics.push({id: nextId, title: title, body: body});
        setNextId(nextId+1);
        setTopics(newtopics);
      }} updateHandler={(title, body)=>{
        const newtopics = [...topics];
        newtopics[id] = {title: title, body: body};
        setTopics(newtopics);
      }}/>
    </div>
  );
}

export default App;

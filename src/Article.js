import {useState} from "react";

export default function Article(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  let returnVal;
  if (props.mode === "read") {
    returnVal = <div>
      <h2>{props.titleProp}</h2>
      {props.bodyProp}
    </div>;
  } else if (props.mode === "create") {
    returnVal = <form onSubmit={(e) => {
      e.preventDefault();
      props.submitHandler(e.target.title.value, e.target.body.value);
      props.setMode("read");
    }}>
      <input type="text" name="title"/>
      <textarea name="body"/>
      <button type="submit">등록</button>
    </form>
  } else if (props.mode === "update") {
    returnVal = <form onSubmit={(e) => {
      e.preventDefault();
      props.updateHandler(title, body);
      props.setMode("read");
    }}>
      <input type="text" name="title" defaultValue={props.titleProp} onChange={(e)=>{setTitle(e.target.value)}}/>
      <textarea name="body" defaultValue={props.bodyProp} onChange={(e)=>{setBody(e.target.value)}}/>
      <button type="submit">등록</button>
    </form>
  }
  
  return <div>{returnVal}<a onClick={()=>{props.setMode("update")}}>수정</a></div>;
}
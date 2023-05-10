import {useState} from "react";

export default function Article(props) {
  const [mode, setMode] = useState("read");
  
  let returnVal;
  if (mode === "read") {
    returnVal = <div>
      <h2>{props.titleProp}</h2>
      {props.bodyProp}
    </div>;
  } else if (mode === "create") {
    returnVal = <form onSubmit={(e) => {
      e.preventDefault();
      props.submitHandler(e.target.title.value, e.target.body.value);
    }}>
      <input type="text" name="title"/>
      <textarea name="body"/>
      <button type="submit">등록</button>
    </form>
  }
  
  return <div>{returnVal}<a onClick={()=>{setMode("create")}}>수정</a></div>;
}
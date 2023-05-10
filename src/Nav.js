export default function Nav(props) {
  const list = props.topics.map((topic) => {
    return (<li key={topic.id}><a href="/read/1" onClick={(e)=>{
      e.preventDefault();
      props.setIdProp(topic.id);
    }}>{topic.title}</a></li>);
  });
  
  return (<div>
    <ol>
      {list}
    </ol>
  </div>);
}
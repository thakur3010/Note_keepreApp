import React from "react";

function CreateArea(props) {
  const [obj, setObj] = React.useState({
    "title": "",
    "content": ""
  });
  const [isTrue,setBool] = React.useState(false);

  function addInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(value);
    setObj(prevValues => {
      return {
        ...prevValues,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(obj);
    event.preventDefault();
    setObj({
      title: "",
      content: ""
    })
  }
  
function expand(){
  setBool(true);
}

  return (
    <div className="form">
      <form>
       {isTrue && <input name="title" placeholder="Title" className="input" onChange={addInput} value={obj.title} />}
        <textarea name="content" placeholder="Take a note..." className="textarea" onChange={addInput} rows= { isTrue?"3":"1"} value={obj.content} onClick={expand} />
       {isTrue && <button onClick={submitNote}>+</button>}
      </form>
    </div>
  );
}

export default CreateArea;

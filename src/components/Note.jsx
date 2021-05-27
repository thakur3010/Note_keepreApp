import React from "react";

function Note(props) {
  function deleteN(){
    props.deleteNote(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteN}>DELETE</button>
    </div>
  );
}

export default Note;

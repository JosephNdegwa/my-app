import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMondalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && (<Modal onCancel={closeMondalHandler} onConfirm={closeMondalHandler} />)}
        {modalIsOpen && <Backdrop onCancel={closeMondalHandler} />}
        
    </div>
 );
}

export default Todo;
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
      <textarea  rows="15" >
          {text}
        </textarea>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteIcon>
      </div>
    </div>
  );
}

export default Note;

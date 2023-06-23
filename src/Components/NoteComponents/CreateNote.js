import CircularProgress from "@mui/material/CircularProgress";
function CreateNote({ textHandler, saveHandler, inputText }) {
  //character limit
  const charLimit = 200;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="20"
        rows="10"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="200"
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      
      <CircularProgress
        variant="determinate"
        color="inherit"
        value={200-charLeft}
      />
    </div>
  );
}

export default CreateNote;

import { useState } from "react";

function AddPost() {
  const [newPost, setNewPost] = useState("");
  // const [newPostDesc, setNewPostDesc] = useState("");
  // const [newBudget, setNewBudget] = useState("");

  let navigate = useNavigate();

  const goBack = () => {
    navigate("/projects");
  };

  const addNewProject = () => {
    console.log("Added new project");
    navigate("/projects");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Add new project:</h1>
        <div>
          <Button color="green" text="Add" onClick={addNewProject} />
          <Button color="red" text="Back" onClick={goBack} />
        </div>
      </div>
      <form className="add-form">
        <div className="form-control">
          <label>Name of Project</label>
          <input
            type="text"
            placeholder="Input expense name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Input new description"
            value={newProjectDesc}
            onChange={(e) => setNewProjectDesc(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Budget</label>
          <input
            type="text"
            placeholder="Input new budget"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default AddPost;
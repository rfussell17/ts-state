import { useState } from "react";
import produce from "immer";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      fixed: false,
      description: "Description 1",
      severity: "High",
      status: "Open",
      createdBy: "John",
      createdAt: "2021-01-01",
    },
    {
      id: 2,
      title: "Bug 2",
      fixed: false,
      description: "Description 2",
      severity: "Medium",
      status: "Open",
      createdBy: "John",
      createdAt: "2021-01-01",
    },
  ]);

  const handleClick = () => {
    // setBugs([
    //   ...bugs.map((bug) => {
    //     if (bug.id === 1) {
    //       return { ...bug, fixed: true };
    //     }
    //     return bug;
    //   }),
    // ]);
    setBugs(
      produce(bugs, (draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <h1>Bugs</h1>
      <button onClick={handleClick}>Fix bug</button>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} - {bug.fixed ? "Fixed" : "Not fixed"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bugs;

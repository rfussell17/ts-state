import { useState } from "react";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      description: "Description 1",
      severity: "High",
      status: "Open",
      createdBy: "John",
      createdAt: "2021-01-01",
    },
    {
      id: 2,
      title: "Bug 2",
      description: "Description 2",
      severity: "Medium",
      status: "Open",
      createdBy: "John",
      createdAt: "2021-01-01",
    },
  ]);

  return <div>Bugs</div>;
};

export default Bugs;

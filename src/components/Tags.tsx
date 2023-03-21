import { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState(["happy", "sad"]);

  const handleTags = () => {
    setTags([...tags, "angry"]);
    setTags(tags.filter((tag) => tag !== "sad"));
    setTags(tags.map((tag) => (tag === "happy" ? "joyful" : tag)));
  };

  return (
    <div>
      <h1>Tags</h1>
      <button onClick={handleTags}>Add tag</button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;

import { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Jane" },
    });
  };

  return <div>Game</div>;
};

export default Game;

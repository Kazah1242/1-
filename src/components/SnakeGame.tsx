import React, { useEffect, useState } from 'react';
import '../styles/SnakeGame.scss';


const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([{ x: 0, y: 0 }]);
  const [food, setFood] = useState<{ x: number; y: number }>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const gridSize = 10; // Размер сетки

  const moveSnake = () => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

      // Проверка на столкновение со стенками
      if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head); // Добавляем новую голову

      // Проверка, съедена ли еда
      if (head.x === food.x && head.y === food.y) {
        placeFood(); // Размещаем новую еду
      } else {
        newSnake.pop(); // Убираем хвост, если еда не съедена
      }

      return newSnake;
    });
  };

  const placeFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    setFood(newFood);
  };

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 200); // Скорость движения змейки

    return () => clearInterval(interval);
  }, [direction, gameOver]);

  const changeDirection = (newDirection: { x: number; y: number }) => {
    // Запрещаем противоположное направление
    if (direction.x + newDirection.x !== 0 || direction.y + newDirection.y !== 0) {
      setDirection(newDirection);
    }
  };

  const resetGame = () => {
    setSnake([{ x: 0, y: 0 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
  };

  return (
    <div className="snake-game">
      <h2>Змейка</h2>
      {gameOver && <div className="game-over">Игра окончена!</div>}
      <div className="grid">
        {Array.from({ length: gridSize }).map((_, y) => (
          <div key={y} className="row">
            {Array.from({ length: gridSize }).map((_, x) => {
              const isSnake = snake.some(segment => segment.x === x && segment.y === y);
              const isFood = food.x === x && food.y === y;

              return (
                <div
                  key={x}
                  className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      {gameOver && <button onClick={resetGame}>Начать заново</button>}
      <div className="controls">
        <button onClick={() => changeDirection({ x: 0, y: -1 })}>↑</button>
        <div>
          <button onClick={() => changeDirection({ x: -1, y: 0 })}>←</button>
          <button onClick={() => changeDirection({ x: 1, y: 0 })}>→</button>
        </div>
        <button onClick={() => changeDirection({ x: 0, y: 1 })}>↓</button>
      </div>
    </div>
  );
};

export default SnakeGame;

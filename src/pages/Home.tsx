import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Preloader from '../components/Preloader';
import Modal from '../components/Modal2'; // Модалка для игры "Змейка"
import SnakeGame from '../components/SnakeGame'; // Компонент игры "Змейка"
import '../styles/Home.scss';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0);  // Счетчик кликов по заголовку
  const [isSnakeGameOpen, setIsSnakeGameOpen] = useState(false); // Для отображения игры "Змейка"
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Прелоадер на 2 секунды
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    navigate('/themes');
  };

  // Обработка кликов по заголовку
  const handleTitleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    // Когда достигаем 5 кликов, открываем игру "Змейка"
    if (clickCount + 1 === 5) {
      setIsSnakeGameOpen(true);
    }
  };

  const closeSnakeGame = () => {
    setIsSnakeGameOpen(false);
    setClickCount(0); // Сбрасываем количество кликов после закрытия игры
  };

  if (loading) {
    return <Preloader />; // Показываем прелоадер пока идёт загрузка
  }

  return (
    <div className="home-container">
      <h1 onClick={handleTitleClick}>Привет!</h1>
      <p>Этот бот поможет вам познакомиться со мной!</p>
      <Button text="Начать" onClick={handleStart} />

      <div className="image-block">
        <img src="/images/background.jpg" alt="Главное изображение" />
      </div>

      {isSnakeGameOpen && (
        <Modal onClose={closeSnakeGame} title="Игра: Змейка">
          <SnakeGame />
          <button onClick={closeSnakeGame}>Закрыть игру</button>
        </Modal>
      )}
    </div>
  );
};

export default Home;

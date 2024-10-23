import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Preloader from '../components/Preloader';
import '../styles/Themes.scss';

const Themes: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0); // Счётчик кликов по заголовку
  const [showWarning, setShowWarning] = useState(''); // Текущий предупреждающий текст
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Прелоадер на 0.5 секунд
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (clickCount === 3) {
      setShowWarning('Я же сказал на кнопки жмать!');
    } else if (clickCount === 10) {
      setShowWarning('Это уже не смешно');
    }
  }, [clickCount]);

  const handleTitleClick = () => {
    setClickCount(prevCount => prevCount + 1); // Увеличиваем счётчик кликов
  };

  if (loading) {
    return <Preloader />; // Показываем прелоадер пока идёт загрузка
  }

  const goToThemePage = (themePath: string) => {
    navigate(themePath);  // Переход на соответствующую страницу темы
  };

  return (
    <div className="themes-container">
      {/* Показываем заголовок только до 10 кликов */}
      {clickCount < 10 && (
        <h1 onClick={handleTitleClick}>Выберите тему</h1>
      )}
      
      {/* Показываем нужный текст в зависимости от кликов */}
      {!showWarning && <p className="instruction-text">Нужно нажимать на кнопки</p>}
      {showWarning && <p className="warning-text">{showWarning}</p>}

      <div className="menu-grid">
        <Button text="Достижения?" onClick={() => goToThemePage('/themes1')} />
        <Button text="Кто Я?" onClick={() => goToThemePage('/themes2')} />
        <Button text="Волонтер?" onClick={() => goToThemePage('/themes3')} />
        <Button text="Где Я?" onClick={() => goToThemePage('/themes4')} />
      </div>
      <Button text="Назад" onClick={handleBack} />
    </div>
  );
};

export default Themes;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Modal from '../components/Modal3';  // Добавляем компонент модального окна
import '../styles/Themes2.scss';

const Themes_2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/themes');
  };

  const handleNavigate = () => {
    navigate('/themes1');
  };

  const openModal = () => {
    setIsModalOpen(true);  // Открываем модальное окно при клике на заголовок
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

  return (
    <div className="themes2-container">
      <h1 onClick={openModal}>Автобиография</h1>
      <div className="content-wrapper">
        <div className="text-block-left scrollable-text">
          <p>
            Меня зовут Зайнуллин Ильяс. Я учусь в 11 классе и уже 5 лет занимаюсь общественной деятельностью.
          </p>
        </div>

        <div className="photo-block">
          <img src="/images/im.jpg" alt="Ваша фотография" />
        </div>

        <div className="text-block-right scrollable-text">
          <p>
            Одним из моих значимых событий стала поездка в Орлёнок. Хотя это не совсем достижение, именно эта поездка
            вдохновила меня и дала мощный заряд энергии, который привёл меня к тому, где я нахожусь сейчас.
          </p>
          <p>
            О себе могу сказать, что я человек, который стремится быть везде и всегда, хотя не всегда это удаётся. На
            данный момент я являюсь членом множества организаций, таких как "Движение первых", "Молодая Гвардия",
            "Молодёжный парламент".
          </p>
          <p>
            У меня имеется много достижений, на перечисление которых могло бы уйти всё время защиты, но ознакомиться с
            некоторыми из них вы можете, нажав на{' '}
            <span className="clickable-text" onClick={handleNavigate}>
              МЕНЯ
            </span>
            .
          </p>
        </div>
      </div>
      <Button text="Назад" onClick={handleStart} />

      {/* Модальное окно */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Гений, Миллионер, Филантроп</h2>
          <Button text="Закрыть" onClick={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Themes_2;

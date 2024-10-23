import React, { useRef } from 'react';
import '../styles/Themes3.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const images = [
  { id: 1, src: '/images/volunteer1.jpg' },
  { id: 2, src: '/images/volunteer2.jpg' },
  { id: 3, src: '/images/volunteer3.jpg' },
  { id: 4, src: '/images/volunteer4.jpg' },
  { id: 5, src: '/images/volunteer5.jpg' },
  { id: 6, src: '/images/volunteer6.jpg' },
  { id: 7, src: '/images/volunteer7.jpg' },
  { id: 8, src: '/images/volunteer8.jpg' },
  { id: 9, src: '/images/volunteer9.jpg' },
  { id: 10, src: '/images/volunteer10.jpg' },
];

const Themes_3: React.FC = () => {
  const navigate = useNavigate();
  const imagesGridRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    navigate('/themes');
  };

  const scrollLeft = () => {
    if (imagesGridRef.current) {
      imagesGridRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (imagesGridRef.current) {
      imagesGridRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="themes3-container">
      <h1>Волонтерство</h1>
      <p>
        Волонтерство для меня это отдельная жизнь, которая идет со мной по пятам за моей спиной. Не один десяток мероприятий как клубных, так и республиканских. 
      </p>
      <p>
      Каждое мероприятие оставило глубокий след в моем сознании. С каждым новым опытом я все больше и больше осознавал истинную суть волонтерства. Я не пытаюсь сказать, что я везде и всегда готов помочь каждому — это было бы невозможно. Но важно стараться так, чтобы те, кому действительно нужна помощь, знали: волонтеры всегда готовы поддержать в любой ситуации.      </p>
      <p>
        Мой профиль на <a href="https://dobro.ru/volunteers/92955997" target="_blank" rel="noopener noreferrer">Добро.ру</a>
      </p>
      <div className="images-grid-wrapper">
        <button className="scroll-button scroll-button-left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="images-grid" ref={imagesGridRef}>
          {images.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.src} alt={`Volunteer ${image.id}`} />
            </div>
          ))}
        </div>
        <button className="scroll-button scroll-button-right" onClick={scrollRight}>
          ▶
        </button>
      </div>
      <Button text="Назад" onClick={handleStart} />
    </div>
  );
};

export default Themes_3;

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../styles/Themes1.scss';
import Modal from '../components/Modal';

const achievements = [
  { id: 1, src: '/images/achievement1.jpg', title: 'Достижение 1' },
  { id: 2, src: '/images/achievement2.jpg', title: 'Достижение 2' },
  { id: 3, src: '/images/achievement3.jpg', title: 'Достижение 3' },
  { id: 4, src: '/images/achievement4.jpg', title: 'Достижение 4' },
  { id: 5, src: '/images/achievement5.jpg', title: 'Достижение 5' },
  { id: 6, src: '/images/achievement6.jpg', title: 'Достижение 6' },
  { id: 7, src: '/images/achievement7.jpg', title: 'Достижение 7' },
  { id: 8, src: '/images/achievement8.jpg', title: 'Достижение 8' },
  { id: 9, src: '/images/achievement9.jpg', title: 'Достижение 9' },
  { id: 10, src: '/images/achievement10.jpg', title: 'Достижение 10' },
  { id: 11, src: '/images/achievement11.jpg', title: 'Достижение 11' },
  { id: 12, src: '/images/achievement12.jpg', title: 'Достижение 12' },
  { id: 13, src: '/images/achievement13.jpg', title: 'Достижение 13' },
  { id: 14, src: '/images/achievement14.jpg', title: 'Достижение 14' },
  { id: 15, src: '/images/achievement15.jpg', title: 'Достижение 15' },
  { id: 16, src: '/images/achievement16.jpg', title: 'Достижение 16' },
];

const specialImage = { src: '/images/specialImage.jpg', title: 'Секретное Достижение' };

const Theme1: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = (src: string, title: string) => {
    setSelectedImage({ src, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
    setClickCount(0); // Сбросить счётчик после закрытия модального окна
  };

  const handleTitleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount + 1 === 5) {
      setSelectedImage(specialImage); // Показать секретное изображение
    }
  };

  return (
    <div className="theme-container">
      <h1 onClick={handleTitleClick}>Мои достижения</h1>
      <div className="achievements-grid">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="achievement-item"
            onClick={() => handleImageClick(item.src, item.title)}
          >
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/themes')}>Назад</button>

      {selectedImage && (
        <Modal
          src={selectedImage.src}
          title={selectedImage.title}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Theme1;

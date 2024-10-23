import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Themes4.scss';
import Modal from '../components/Modal2';

const organizations = [
  {
    name: 'Движение первых',
    description: 'За те дни, что я состою в "Движении первых", я ни на миг не пожалел о своём выборе. Здесь я познакомился с людьми, которые показали мне примеры настоящих лидеров, ораторов и многому чему научат. "Движение первых" стало для меня буквально вторым домом.',
    imgSrc: '/images/dvizhenie.jpg',
    gallery: ['/images/dp1.jpg', '/images/dp2.jpg', '/images/dp3.jpg'],
  },
  {
    name: 'Молодая Гвардия',
    description: 'Волонтёрская деятельность и гражданская активность — это те направления, в которые я углубился благодаря "Молодой Гвардии". Они значительно помогли мне в будущем, способствуя получению моих нынешних наград.',
    imgSrc: '/images/guard.jpg',
    gallery: ['/images/g1.jpg', '/images/g2.jpg'],
  },
  {
    name: 'Молодёжный парламент',
    description: '"Молодёжный парламент", где я занимаю должность заместителя председателя, показал мне, что значит решать вопросы молодёжной политики и способствовать развитию региона.',
    imgSrc: '/images/parliament.jpg',
    gallery: ['/images/p1.jpg', '/images/p2.jpg'],
  },
];

const Themes_4: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOrg, setSelectedOrg] = useState<typeof organizations[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (org: typeof organizations[0]) => {
    setSelectedOrg(org);
    setCurrentImageIndex(0); // Начинаем с первой карты
  };

  const closeModal = () => {
    setSelectedOrg(null);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    if (selectedOrg && currentImageIndex < selectedOrg.gallery.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (selectedOrg && currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="themes4-container">
      <h1>Организации</h1>
      <div className="organization-grid">
        {organizations.map((org, index) => (
          <div key={index} className="organization-item">
            <img
              src={org.imgSrc}
              alt={org.name}
              onClick={() => handleImageClick(org)}
              className="organization-image"
            />
            <h2>{org.name}</h2>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/themes')}>Назад</button>

      {selectedOrg && (
        <Modal onClose={closeModal} title={selectedOrg.name}>
          <p>{selectedOrg.description}</p>
          <div className="card-stack">
            {selectedOrg.gallery.map((image, index) => (
              <div
                key={index}
                className={`card ${index === currentImageIndex ? 'active' : ''}`}
                style={{ zIndex: selectedOrg.gallery.length - index }}
              >
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="card-controls">
            <button onClick={handlePrev} disabled={currentImageIndex === 0}>
              Назад
            </button>
            <button
              onClick={handleNext}
              disabled={currentImageIndex === selectedOrg.gallery.length - 1}
            >
              Вперёд
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Themes_4;

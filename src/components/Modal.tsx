import React from 'react';
import '../styles/Modal.scss';

interface ModalProps {
  src: string;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, title, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={title} />
        <p>{title}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;

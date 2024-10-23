import React from 'react';
import '../styles/Modal2.scss';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>{title}</h2>
      {children}
      <button onClick={onClose}>Закрыть</button>
    </div>
  </div>
);

export default Modal;

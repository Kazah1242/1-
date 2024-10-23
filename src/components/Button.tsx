import React from 'react';
import '../styles/Button.scss';  // Локальные стили для кнопки

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;

import React from 'react';
import './button.css';

interface ButtonProps {
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
      {text}
    </a>
  );
};

export default Button;

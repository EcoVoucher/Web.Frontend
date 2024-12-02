import React from 'react';
import './title.css';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h6>{text}</h6>;
};

export default Title;

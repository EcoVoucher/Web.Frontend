import React from 'react';
import Link from 'next/link';
import './listOds.css';

interface ODSItem {
  title: string;
  description: string;
  link: string;
}

interface ODSListProps {
  items: ODSItem[];
}

const ODSList: React.FC<ODSListProps> = ({ items }) => {
  return (
    <ul className="ods-list">
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}:</strong> {item.description}{' '}
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            Conheça mais
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ODSList;

import React from 'react';
import './Badge.css';

interface BadgeProps {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error';
}

const Badge: React.FC<BadgeProps> = ({ label, color = 'primary' }) => {
  return (
    <span className={`badge ${color}`}>
      {label}
    </span>
  );
};

export default Badge;

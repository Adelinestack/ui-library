import React from 'react';
import './Button.css';

function Button({
  content,
  basic,
  primary,
  secondary,
  icon,
  color,
  disabled,
  loading,
  size,
  circular,
  onClick,
  onKeyPress,
  children,
}) {
  const basicBtn = basic ? 'btn-basic' : '';
  const primaryBtn = primary ? 'btn-primary' : '';
  const secondaryBtn = secondary ? 'btn-secondary' : '';
  const iconBtn = icon ? <i className={`fas fa-${icon}`} /> : '';
  const disabledBtn = disabled ? 'btn-disabled' : '';
  const loadingBtn = loading ? <i className="fas fa-spinner fa-pulse" /> : '';
  const circularBtn = circular ? 'btn-circular' : '';

  return (
    <button
      className={`${basicBtn} ${primaryBtn} ${secondaryBtn} ${disabledBtn} ${size} ${circularBtn}`}
      style={{ color: color }}
      disabled={disabled}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      {loadingBtn || content || children || iconBtn}
    </button>
  );
}

export default Button;

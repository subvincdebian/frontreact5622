/* ДЗ */
import './style.css';
import { FeatureProps } from '../../types/componentTypes';

const Feature = ({ icon, title, text, children }: FeatureProps) => {
  return (
    <div className="feature">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      {children && <div className="extra-content">{children}</div>}
    </div>
  );
};

export default Feature;

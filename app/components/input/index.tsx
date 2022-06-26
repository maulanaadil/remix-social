import type { Props } from './types';
import { sInputContainer, sLabel, sInput } from './styles';

const Input = ({
  label,
  name,
  placeholder,
  type,
  children,
  ...otherProps
}: Props) => {
  const checkElementRender = (type: string) => {
    if (type === 'inputField') {
      return (
        <input
          name={name}
          placeholder={placeholder}
          className={sInput}
          {...otherProps}
        />
      );
    }
    if (type === 'textArea') {
      return (
        <textarea
          name={name}
          className={sInput}
          placeholder={placeholder}
          {...otherProps}
        />
      );
    }
  };

  return (
    <div className={sInputContainer}>
      <label htmlFor={label} className={sLabel}>
        {label}
      </label>
      {checkElementRender(type)}
      {children}
    </div>
  );
};

export default Input;

import type { Props } from './types';
import { sInputContainer, sLabel, sInput } from './styles';

const Input = ({
  label,
  name,
  placeholder,
  element,
  children,
  ...otherProps
}: Props) => {
  const checkElementRender = (element: string) => {
    if (element === 'inputField') {
      return (
        <input
          name={name}
          placeholder={placeholder}
          className={sInput}
          {...otherProps}
        />
      );
    }
    if (element === 'textArea') {
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
      {checkElementRender(element)}
      {children}
    </div>
  );
};

export default Input;

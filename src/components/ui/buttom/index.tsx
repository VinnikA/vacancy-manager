import './styles.css';

interface IButton {
  children: string;
  variant: string;
  btnType?: string;
  clickFn?: () => void;
}

export default function Button({ children, variant, btnType, clickFn }: IButton) {
  const currentStyle = variant ? `btn__${variant}` : `btn`;

  return (
    <button type={btnType} className={currentStyle} onClick={clickFn}>
      {children}
    </button>
  );
}

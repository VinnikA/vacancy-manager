import './styles.css';

interface IButton {
  children: string;
  variant?: string;
  btn_type: string;
  clickFn: () => void;
}

const Button = ({ children, variant, btn_type, clickFn }: IButton) => {
  return (
    <button
      type={btn_type}
      className="btn"
      onClick={() => {
        clickFn();
      }}
    >
      <span className="btn_title">{children}</span>
    </button>
  );
};

export default Button;

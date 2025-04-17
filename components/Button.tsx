import { TiLocationArrow } from "react-icons/ti";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <TiLocationArrow className="text-black img" />
        </div>
      </div>
    </a>
  )
}

export default Button;
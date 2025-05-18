import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";

interface ButtonProps {
  text: string;
  className?: string;
  link?: string;
}

const Button = ({ text, className, link }: ButtonProps) => {
  if (!link) return null;
  return (
    <Link
      className={`${className ?? ""} cta-wrapper`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <TiLocationArrow className="text-black img" />
        </div>
      </div>
    </Link>
  );
};

export default Button;
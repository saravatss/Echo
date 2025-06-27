import Image from "next/image";
import "./LandingAdvantages.css";

const LanAdvantages = ({ icon, text, title }) => {
  return (
    <div className="LanAdvantages">
      <div className="advanIcon">
        <Image src={icon} width={54} height={54} alt=""/>
      </div>
      <div className="AdvanWholeText">
        <p className="advanTitle">{title}</p>
        <p className="advanText">{text}</p>
      </div>
    </div>
  );
};

export default LanAdvantages;
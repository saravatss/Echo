import Image from "next/image";
import "../UI/TypeTag.css"

const TypeRow = ({ icon, text }) => {
  return (
    <div className="typeRow">
      <div className="typeIcon">
        <Image src={icon} width={21} height={20} alt=""/>
      </div>
      <span className="typeText">{text}</span>
    </div>
  );
};

export default TypeRow;
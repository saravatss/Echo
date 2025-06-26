import Image from "next/image";
import "../UI/PlaceTag.css"

const PlaceRow = ({ icon, text }) => {
  return (
    <div className="placeRow">
      <div className="placeIcon">
        <Image src={icon} width={16} height={16} alt=""/>
      </div>
      <span className="placeText">{text}</span>
    </div>
  );
};

export default PlaceRow;
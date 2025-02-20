export default function Popup({ onClose }) {
    return (
      <div>
        <button onClick={onClose}>x</button>
        <img src="./qr-code.png" className="imgPopup" />
      </div>
    );
  }
  
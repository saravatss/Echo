import "./ImageGallery.css";

export const ImageGallery = ({ images }) => {
  return (
    <div className="galleryContainer">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

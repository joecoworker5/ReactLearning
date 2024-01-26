import ImageShow from "./ImageShow";
import './ImageList.css';
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    ); //key 讓 rerender 時候只會針對有變動的 component 做 render
  });
  return (
    <>
      <div className="image-list">{renderedImages}</div>

    </>
  );
}

export default ImageList;

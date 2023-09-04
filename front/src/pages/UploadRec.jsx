import {useState, useRef} from 'react'
import "../pageStyles/UploadRec.css"

const UploadRec = () => {

  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const imageFiles = event.target.files;
    setSelectedImages([...selectedImages, ...imageFiles]);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };
  
  return (
    <section className='flexCenter uploadBody'>
      <div className="containerUpload">
        <div className="title-box pad-top">
          <div className='medium-12 top-title'>Vardas / Pavardė</div>
          <div className='userName'>
            <input type="text" placeholder='asdas'/>
            <input type="text" placeholder='asdas'/>
          </div>
          <div className="ingrediants pad-top">
            <div className="medium-12 top-title">Ingredientai:</div>
            <textarea id="ingrediantai" type="text" placeholder='asd'/>
          </div>
          <div className="ingrediants pad-top">
            <div className="medium-12 top-title">Gaminimo aprašymas</div>
            <textarea id="about" type="text" placeholder='asd'/>
          </div>
          <div className="cookTime pad-top">
            <div  className="medium-12 top-title">Gaminimo laikas</div>
            <input type="text" placeholder='sadsa'/>
          </div>
            <div className='uploadFile'>
            <div  className="medium-12 top-title mb-15">Įkelkite savo nuotraukas</div>
            <button onClick={handleUploadButtonClick}>
              Upload Images
            </button>
              <span>Selected Files: {selectedImages.length}</span>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
          <button className='CreateRec'>Įkelti receptą</button>
        </div>
      </div>
    </section>
  )
}

export default UploadRec
import "./imageUpload.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./../../../src/firebase";
import { v4 } from "uuid";

function Imageup() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="ImageUploadArea">
    <div className="fileupload">
        <span>
    <h2>You can upload travel pictures here ...</h2>
      <input
        type="file" className="btn btn-light"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      </span>
      </div>
      <button class="btn btn-dark" onClick={uploadFile}> Upload Image</button>
      <span>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      </span>
    </div>
  );
}

export default Imageup;
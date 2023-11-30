import { useState } from "react";
import axios from "axios";

const UploadPage = () => {
  const [file, setFile] = useState<File>();
  const [imageURL, setImageURL] = useState<String>();
  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (file) {
            const url = "http://localhost:8000/upload";
            const formData = new FormData();
            formData.append("file", file, file.name);
            try {
              const response = await axios.post(url, formData);
              setImageURL(response.data.filename);
            } catch (err) {
              console.log("error", err);
            }
          } else {
            alert("select a file to upload");
          }
        }}
      >
        <h1>React File Upload</h1>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <button type="submit">Upload Image</button>
      </form>
      {imageURL ? (
        <>
          <br />
          <img
            width={"500"}
            alt="uploadedImg"
            src={"http://localhost:8000" + imageURL}
          />
          <br />
        </>
      ) : null}
      <button
        onClick={() => {
          console.log("post this to backend: " + imageURL);
        }}
      >
        Add new image
      </button>
    </div>
  );
};

export default UploadPage;

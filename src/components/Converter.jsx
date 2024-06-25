import React, { useState } from "react";

export default function Converter() {
  const [selectedFormat, setSelectedFormat] = useState("png");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const convertedUrl = canvas.toDataURL(`image/${selectedFormat}`);
          setDownloadLink({
            url: convertedUrl,
            name: `converted.${selectedFormat}`,
          });
        };
        img.src = e.target.result;
        setUploadedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex-col  justify-center items-center p-4">
        <div className="p-3 flex justify-center">
          <div>
            <span>Choose the format you want to convert to</span>
            <select
              name=""
              id="format-select"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="border-black rounded-md border-[2px] ml-3 text-black"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="jpg">JPG</option>
              <option value="gif">GIF</option>
              <option value="webp">WEBP</option>
            </select>
          </div>
        </div>
        <div className="p-3 flex justify-center">
          <div>
            <span>Upload your file here: </span>
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={handleFile}
              className="ml-3 w-52"
            />{" "}
            <br />
          </div>
        </div>
        {uploadedFile && (
          <div className="p-3 flex justify-center">
            <div>
              <h2 className="text-center p-2">Uploaded image</h2>
              <img src={uploadedFile} alt="" />
            </div>
          </div>
        )}
        {downloadLink && (
          <a
            href={downloadLink.url}
            download={downloadLink.name}
            className="underline flex justify-center items-center"
          >
            Click here to download the converted image
          </a>
        )}
      </div>
    </div>
  );
}

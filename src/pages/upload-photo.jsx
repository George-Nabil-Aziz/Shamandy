// React
import { useState } from "react";

// Core
import { AppButton, storage } from "/src";

// Firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Flowbite
import { Label, TextInput } from "flowbite-react";

export const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    if (!image) return;
    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(imageRef);
      setUrl(downloadURL);
    } catch (error) {
      alert(error.message);
      console.log("Hello", error);
    }
  };

  return (
    <>
      <Label htmlFor="photoURL" value="Your photo URL" />
      <TextInput
        id="photoURL"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <p>{url || "No URL"}</p>

      <AppButton type="submit" label="Upload" onClick={uploadImage} />
    </>
  );
};

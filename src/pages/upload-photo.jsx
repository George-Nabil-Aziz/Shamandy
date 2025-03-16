// React
import { useState } from "react";

// Core
import { AppButton, storage } from "/src";

// Firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Flowbite
import { Label, TextInput } from "flowbite-react";

export const UploadPhoto = () => {
  // State
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {
    if (!image) return;
    try {
      setLoading(true);
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(imageRef);
      setUrl(downloadURL);
    } catch (error) {
      alert(error.message);
      console.log("Hello", error);
    } finally {
      setLoading(false);
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

      <AppButton
        type="submit"
        label="Upload"
        onClick={uploadImage}
        loading={loading}
        disabled={loading}
      />
    </>
  );
};

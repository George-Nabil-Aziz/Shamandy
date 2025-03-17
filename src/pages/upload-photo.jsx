// React
import { useState } from "react";

// Core
import { storage, AppButton, useNotify } from "/src";

// Firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Flowbite
import { Label, TextInput } from "flowbite-react";

export const UploadPhoto = () => {
  // Hooks
  const { notify } = useNotify();

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
      notify.error(error.message);
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

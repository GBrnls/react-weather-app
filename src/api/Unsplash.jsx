import { useState, useEffect } from "react";
import { SEARCH_DEFAULT } from "../helpers/API";

export const useUnsplashApi = () => {
  const [image, setImage] = useState("");

  const fetchImage = async () => {
    await fetch(SEARCH_DEFAULT).then((res) => {
      if (res.status !== 200) {
        console.log("ERROR");
        return;
      }

      res.json().then((response) => {
        if (response != null) {
          setImage(
            response.results[Math.floor(Math.random() * 10)].urls.regular
          );
        }
      });
    });
  };

  useEffect(() => {
    fetchImage().then((res) => {});
  }, []);

  return image;
};

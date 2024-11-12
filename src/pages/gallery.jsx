import React, { useState, useEffect } from "react";
import "../css/gallery.css";
import { BaseUrl, Loading } from "../components";

const Gallery = () => {
  const [showphoto, setShowphoto] = useState(false);
  const [id, setId] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [photos_1, setPhotos_1] = useState([]);
  const [photos_2, setPhotos_2] = useState([]);
  const [photos_3, setPhotos_3] = useState([]);
  const [loading, setLoading] = useState(true);

  const splitArray = (originalArray) => {
    const totalLength = originalArray.length;

    // Calculate the lengths of the three parts
    const length1 = Math.round(totalLength * 0.4);
    const length2 = Math.round(totalLength * 0.35);
    const length3 = totalLength - length1 - length2;

    // Use slice to get the three parts
    const part1 = originalArray.slice(0, length1);
    const part2 = originalArray.slice(length1, length1 + length2);
    const part3 = originalArray.slice(length1 + length2);

    setPhotos_1(part1);
    setPhotos_2(part2);
    setPhotos_3(part3);
  };

  const getPhotos = async () => {
    const url = `${BaseUrl()}/photo_gallery_api/`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setPhotos(response);
      splitArray(response);
      setLoading(false);
    } else {
      const response = await request.json();
    }
  };

  useEffect(() => {
    getPhotos();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showPhoto = (imageid) => {
    setId(imageid);
    showphoto ? setShowphoto(false) : setShowphoto(true);
    document.getElementsByClassName("header")[0].classList.toggle("blur");
    document
      .getElementsByClassName("footer-widgets")[0]
      .classList.toggle("blur");
  };

  const setFalse = () => {
    setShowphoto(false);
    document.getElementsByClassName("header")[0].classList.toggle("blur");
    document
      .getElementsByClassName("footer-widgets")[0]
      .classList.toggle("blur");
  };

  if (loading) {
    return (
      <div className="loading-com" style={{ marginTop: "100px" }}>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {photos.length > 0 ? (
        <div className="show-photo-div">
          <div
            className={`show-photo ${showphoto ? "show-photo-block" : ""}`}
            onClick={setFalse}
          >
            <img src={photos ? photos[id].photo : null} alt="" />
          </div>
          <div className={`photo-gallery ${showphoto ? "blur" : ""}`}>
            <div className="heading">
              <h2>GALLERY</h2>
              <div className="line"></div>
            </div>
            <div className="photo-gallery-grid">
              <div className="gallery-grid-01">
                {photos ? (
                  photos_1.map((photo, index) => (
                    <div
                      className="grid-photo"
                      onClick={() => showPhoto(index)}
                    >
                      <i class="fas fa-eye"></i>
                      <img src={photo.photo} alt="" srcset="" />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="gallery-grid-02">
                {photos ? (
                  photos_3.map((photo, index) => (
                    <div
                      className="grid-photo"
                      onClick={() =>
                        showPhoto(photos_1.length + photos_2.length + index)
                      }
                    >
                      <i class="fas fa-eye"></i>
                      <img src={photo.photo} alt="" srcset="" />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="gallery-grid-03">
                {photos ? (
                  photos_2.map((photo, index) => (
                    <div
                      className="grid-photo"
                      onClick={() => showPhoto(photos_1.length + index)}
                    >
                      <i class="fas fa-eye"></i>
                      <img src={photo.photo} alt="" srcset="" />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-com" style={{ marginTop: "100px" }}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Gallery;

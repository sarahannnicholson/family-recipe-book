import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from '@mui/material/Typography';

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className={props.classes?.container}
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              maxHeight: height, // You can set a maximum height for the image, if you wish.
            }}
            layout="fullWidth"
            aspectratio={3 / 1} // You can optionally force an aspect ratio for the generated image
            alt="" // This is a presentational image, so the alt should be an empty string
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <Typography variant='h1'>{title}</Typography>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  classes: PropTypes.shape({
    container: PropTypes.string
  })
};

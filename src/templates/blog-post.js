import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Typography from '@mui/material/Typography';

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  imageAlt
}) => {
  const PostContent = contentComponent || Content;
  const postImage = getImage(image) || image;

  console.log('postImage', postImage, imageAlt)
  return (
    <>
      <GatsbyImage
          image={postImage}
          objectFit={"cover"}
          objectPosition={"center center"}
          style={{
            gridArea: "1/1",
            maxHeight: 400, // You can set a maximum height for the image, if you wish.
          }}
          layout="fullWidth"
          aspectratio={3 / 1} // You can optionally force an aspect ratio for the generated image
          alt={imageAlt}
          formats={["auto", "webp", "avif"]}
      />
      {helmet || ""}

      <Typography variant='h1'>{title}</Typography>
      <p>{description}</p>
      <PostContent content={content} />
    </>
  );
};


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout containerProps={{disableGutters: false}}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage.image}
        imageAlt={post.frontmatter.featuredImage.alt}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                width: 1920, 
                height: 800,
                quality: 100,
                layout: CONSTRAINED,
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
  }
`;

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles( ({ breakpoints }) => ({
  grid: {
    display: 'grid',
    justifyContent: 'center',
    gridGap: '10px',
    [breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr'
    }
  },
}));

const BlogRollTemplate = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {posts && posts.map(({ node: post }) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent component={Link} to={post.fields.slug}>
            <CardHeader
              title={post.frontmatter.title}
              subheader={post.frontmatter.date}
            />
            {post.frontmatter.featuredImage ? (
              <div>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredImage.image,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    width:
                      post.frontmatter.featuredImage.image.childImageSharp
                        .gatsbyImageData.width,
                    height:
                      post.frontmatter.featuredImage.image.childImageSharp
                        .gatsbyImageData.height,
                  }}
                />
              </div>
            ) : null}
            <Typography variant="body2" color="text.secondary">
              {post.frontmatter.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  description
                  date(formatString: "MMMM DD, YYYY")
                  featuredImage {
                    alt
                    image {
                      childImageSharp {
                        gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}

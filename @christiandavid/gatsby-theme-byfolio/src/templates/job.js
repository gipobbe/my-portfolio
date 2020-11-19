import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./job.css"
import Slideshow from "../components/Slideshow"
import Skill from "../components/skill"

export default ({ data }) => {
  const post = data.markdownRemark
  useLayoutEffect(() => {
    if (!post) {
      navigate("/404")
      return <></>
    }
  }, [post])

  return !post ? (
    <></>
  ) : (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {post.frontmatter.jobTitle} on {post.frontmatter.company}
        </title>
      </Helmet>
      <Slideshow images={post.frontmatter.images}>
        <div css={styles.jobtitle}>
          <div css={styles.jobtitleContent} data-test="content">
            <h1>{post.frontmatter.company}</h1>
            <h3>
              {post.frontmatter.jobTitle}, da {post.frontmatter.dateFrom}{" "}
              {post.frontmatter.dateTo
                ? ` a ${post.frontmatter.dateTo}`
                : " Present"}
            </h3>
          </div>
        </div>
        <div
          css={styles.contentText}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Slideshow>
      <Skill
        skills={post.frontmatter.skills}
        type="static"
        title="Strumenti utilizzati"
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
        showLoadingAnimation={false}
        description="La lista degli strumenti utilizzati indica i Linguaggi di programmazione,
        i Framework e le Librerie o App che ho usato in questa esperienza lavorativa"
      />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, hideOnExperience: { eq: false } }
    ) {
      html
      frontmatter {
        company
        jobTitle
        dateFrom(formatString: "MMM YYYY", locale: "it-IT")
        dateTo(formatString: "MMM YYYY", locale: "it-IT")
        images {
          title
          description
          layout
          caption
          files {
            image {
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        skills {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

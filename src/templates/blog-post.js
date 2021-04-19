import * as React from "react"
import { Link, graphql } from "gatsby"

import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageBanner from "../components/image-banner"
import placeholder from '../images/placeholder.png'

export default class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.contentfulBlogPost      
        
        let img
        if (post.featuredImage == null) {
            img = placeholder
        }
        else {
            img = post.featuredImage.file.url
        }

        return (
            <Layout>
                <SEO title={post.title} description={post.title} />
                <article>
                    <ImageBanner title={post.title} src={img} />
                    <div className="wrapper">
                        <h1>{post.title}</h1>
                        <div>
                            {renderRichText(post.body, {})}
                        </div>
                    </div>
                </article>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query BlogPostsPageQuery($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        contentfulBlogPost( slug: {eq: $slug }) {
            title
            category
            body {
                raw
            }
            featuredImage {
                file {
                  url
                }
              }
        }
    }
`
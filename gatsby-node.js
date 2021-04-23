/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const blogList = path.resolve('./src/templates/blog-list.js')

    return graphql(
        `
            {
                allContentfulBlogPost(sort: {order: DESC, fields: createdAt}) {
                    distinct(field: category)
                    edges {
                        node {
                            title
                            slug
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
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
            // create prev and next on each posts render (for Blog Post Pagination, BPP)
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node
            createPage({
                path: `/blog/` + post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next,
                },
            })
        })

        const chunk = 6
        const numChunks = Math.ceil(posts.length / chunk)
        const cats = result.data.allContentfulBlogPost.distinct

        Array.from({ length: numChunks }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: blogList,
                context: {
                    limit: (i + 1) * chunk,
                    numChunks,
                    currentPage: i + 1,
                    categories: cats
                },
            });
        });
    })
}
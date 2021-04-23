import * as React from "react"
import { Link, graphql } from "gatsby"

import * as rbs from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: "all",
        };
    }

    filterBlog = ( evtKey ) => {
        this.setState({
            selectedCategory: evtKey,
        })
    }

    render() {
        const posts = this.props.data.allContentfulBlogPost.edges
        const ctx = this.props.pageContext
        const categories = ctx.categories

        return (
            <Layout>
                <SEO title="Blog" />
                <div className="blog wrapper">
                    <div className="category-container">
                        <rbs.Dropdown onSelect={ (evtKey, evt) => this.filterBlog(evtKey)}>
                            <rbs.Dropdown.Toggle variant="success" id="dropdown-basic">
                                Categories
                            </rbs.Dropdown.Toggle>

                            <rbs.Dropdown.Menu>
                                {categories.map(category => {
                                    return (
                                        <rbs.Dropdown.Item eventKey={category}>{category}</rbs.Dropdown.Item>
                                    )
                                })}
                            </rbs.Dropdown.Menu>
                        </rbs.Dropdown>
                    </div>

                    <div className="post-grid">
                        <rbs.Row md={3} sm={2} xs={1}>
                            {posts.map(({ node }) => {
                                if (node.category.includes(this.state.selectedCategory)) {
                                    return (
                                        <rbs.Col>
                                            <div key={node.slug}>
                                                <h3>
                                                    <Link to={'/blog/' + node.slug}>
                                                        {node.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </rbs.Col>
                                    )
                                }
                                return;
                            })}
                            {}
                        </rbs.Row>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query postListQuery {
        allContentfulBlogPost {
            edges {
                node {
                    title
                    slug
                    category
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
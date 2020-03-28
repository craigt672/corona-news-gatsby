const path = require('path');
const { slugify } = require('./src/util/createSlug');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'ArticlesJson') {
    const slugFromTitle = slugify(node.title);

    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Page templates
  const templates = {
    article: path.resolve('src/templates/article.tsx')
  }

  const res = await graphql(`
    {
      allArticlesJson(sort: {fields: publishedAt, order: DESC}) {
        edges {
          node {
            author
            description
            title
            url
            urlToImage
            publishedAt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (res.errors) return Promise.reject(res.errors)

  // Extracting all posts from res
  const articles = res.data.allArticlesJson.edges

  // Create single post pages
  articles.forEach(({ node }) => {
    createPage({
      path: `news/${node.fields.slug}`,
      component: templates.article,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug
      },
    })
  })
}

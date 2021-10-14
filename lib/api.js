import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://164.90.237.14',
    key: '5c6e62ccc6ba2a0c7e024e4ffb',
    version: "v3"
  });

  export async function getPosts() {
    return await api.posts
      .browse({
        include: "tags,authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPages() {
    return await api.pages
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getAuthor(authorSlug) {
    return await api.authors
      .read({
        slug: authorSlug
      })
      .catch(err => {
        console.error(err);
      });
  }
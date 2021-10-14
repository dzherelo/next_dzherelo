import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://164.90.237.14',
    key: '5c6e62ccc6ba2a0c7e024e4ffb',
    version: "v3"
  });

  export async function getPosts() {
    const res = await api.posts
    .browse({
      include: "tags,authors",
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
    
    // TODO: Remove debug on PROD.
    console.log(res)
    // REMOVE DEBUG
    return await res;
  }

  export async function getSinglePost(postSlug) {
    const res = await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });

    // TODO: Remove debug on PROD.
    console.log(res)
    // REMOVE DEBUG
    return res;
  }

  export async function getPages() {
    const res = await api.pages
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
    // TODO: Remove debug on PROD.
    console.log(res)
    // REMOVE DEBUG
    return res;
  }

  export async function getAuthor(authorSlug) {
    const res = await api.authors
    .read({
      slug: authorSlug
    })
    .catch(err => {
      console.error(err);
    });

    // TODO: Remove debug on PROD.
    console.log(res)
    // REMOVE DEBUG
    return res;
  }
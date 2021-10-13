import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://164.90.237.14',
    key: '5c6e62ccc6ba2a0c7e024e4ffb',
    version: "v4"
  });

  export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }
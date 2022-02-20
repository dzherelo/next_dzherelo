import GhostContentAPI from "@tryghost/content-api";
import { GHOST_API_URL_DEFAULT, GHOST_API_KEY_DEFAULT } from './defaults.js';

const GHOST_API_URL = process.env.GHOST_API_URL || GHOST_API_URL_DEFAULT;
const GHOST_API_KEY = process.env.GHOST_API_KEY || GHOST_API_KEY_DEFAULT;

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: GHOST_API_URL,
    key: GHOST_API_KEY,
    version: "v3"
  });

  export async function getSettings(){
    const res = await api.settings
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
    return res;
  }

  export async function getAllPosts() {
    const res = await api.posts
    .browse({
      limit: "all",
      filter: 'tag:-en'
    })
    .catch(err => {
      console.error(err);
    });
    return await res;
  }

  export async function getAllEnPosts() {
    const res = await api.posts
    .browse({
      limit: "all",
      filter: 'tag:en'
    })
    .catch(err => {
      console.error(err);
    });
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
    return res;
  }

  export async function getPages() {
    const res = await api.pages
    .browse({
      limit: "all",
      filter: 'tag:-en'
    })
    .catch(err => {
      console.error(err);
    });
    return res;
  }

  export async function getEnPages() {
    const res = await api.pages
    .browse({
      limit: "all",
      filter: 'tag:en'
    })
    .catch(err => {
      console.error(err);
    });
    return res;
  }

  export async function getSinglePage(pageSlug){
    const res = await api.pages
    .read({
      slug: pageSlug
    })
    .catch(err => {
      console.error(err)
    })
    return res;
  }
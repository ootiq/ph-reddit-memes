import urljoin from 'url-join'

const fetch = require('node-fetch')
const { randomChoice, REDDIT_WEBSITE } = require('./utils/random')
const { PH_SUBREDDIT_LINKS, LISTINGS_API } = require('./utils/subreddits')

/**
 * getter selects a random subreddit and requests its api
 */
const getter = async () => {
  const sub_r = randomChoice(PH_SUBREDDIT_LINKS)
  const rWebsite = urljoin(REDDIT_WEBSITE, sub_r, LISTINGS_API.top)

  return await fetch(rWebsite, {
    method: 'GET',
  })
    .then(r => r.json())
    .then(data => data.data.children) // return only the children posts?
    .catch(_ => undefined)
}

export { getter }

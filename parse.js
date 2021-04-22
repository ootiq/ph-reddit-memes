import { getter } from './getter'

const parser = async () => {
  const r = await getter()

  const memes = []
  r.map(p => {
    if (p.data.url.startsWith('https://i.redd.it/')) {
      memes.push({
        meme: {
          title: p.data.title,
          thumbnail: p.data.thumbnail,
          source: p.data.url,
        },
        author: p.data.author_fullname,
        subreddit: p.data.subreddit_name_prefixed,
        permalink: p.data.permalink,
        preview: p.data.images,
        nsfw: p.data.over_18,
      })
    }
  })

  return memes
}

export { parser }

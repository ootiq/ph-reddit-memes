// taken from ::>  https://gist.github.com/c0derabbit/9ad0c77f2713de58fa1c4c0e74199d33

const REDDIT_WEBSITE = 'https://www.reddit.com'

const randomChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export { randomChoice, REDDIT_WEBSITE }

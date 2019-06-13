// If default type isn't provided (due to other page categories (non search pages)), make default title so the page will have a default sorting mechanism
export default (type = 'title', movies) => {
  if (type === 'title') {
    return movies.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
      return 0
    })
  } else if (type === 'vote') {
    return movies.sort((a, b) => b.vote_average - a.vote_average)
  } else if (type === 'popular') {
    return movies.sort((a, b) => b.popularity - a.popularity)
  } else if (type === 'date') {
    return movies.sort(
      (a, b) =>
        b.release_date.split('-').join('') - a.release_date.split('-').join('')
    )
  }
}

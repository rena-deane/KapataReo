const typeIcon = (word) => {
  console.log('in typeIcon')
  switch (word.type) {
    case 'word':
      return '../images/word.png'
    case 'phrase':
      return '../images/phrase.png'
    case 'song':
      return '../images/song.png'
    case 'location':
      return '../images/location.png'
    case 'name':
      return '../images/name.png'
    default:
      return '../images/notype.png'
  }
}

export default typeIcon

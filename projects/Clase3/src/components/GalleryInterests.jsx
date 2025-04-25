import '../css/GalleryInterests.css'

export function GalleryInterests ({ interests }) {
  const handleOnClick = (event) => {
    const button = event.target
    const btnText = event.target.textContent
    switch (btnText) {
      case 'React':
        button.style.backgroundColor = '#61DAFB'
        break
      case 'JavaScript':
        button.style.backgroundColor = '#F7DF1E'
        break
      case 'APIs':
        button.style.backgroundColor = '#9B59B6'
        break
      case 'Diseño UX':
        button.style.backgroundColor = '#FF6F61'
        break
      case 'Node.js':
        button.style.backgroundColor = '#339933'
        break
      default:
        button.style.backgroundColor = 'white'
        break
    }
  }

  return (
    <div id='gl-btn'>
      {interests.map((interest, index) => (
        <button key={index} onClick={handleOnClick}>{interest}</button>
      ))}
    </div>
  )
}

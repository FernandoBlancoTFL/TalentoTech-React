export function Button (props) {
  const { btnText, btnBackgroundColor, btnColor, btnAction } = props
  const darkThemeStyle = {
    color: 'white',
    backgroundColor: 'black'
  }

  const lightThemeStyle = {
    color: 'black',
    backgroundColor: 'lightBlue'
  }

  const handleClick = () => {
    switch (btnAction) {
      case 'alert':
        alert('Este es un mensaje personalizado')
        break
      case 'darkTheme':
        Object.assign(document.body.style, darkThemeStyle)
        break
      case 'lightTheme':
        Object.assign(document.body.style, lightThemeStyle)
        break
      default:
        alert('Este botón no tiene una acción asignada')
    }
  }

  return (
    <button style={{ backgroundColor: btnBackgroundColor, color: btnColor }} onClick={handleClick}>{btnText}</button>
  )
}

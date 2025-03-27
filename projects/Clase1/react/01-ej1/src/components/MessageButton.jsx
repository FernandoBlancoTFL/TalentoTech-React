export function MessageButton() {
    const handleClick = () => {
        const userName = prompt('Ingrese su nombre')
        alert(`Hola ${userName}! 😎`)
    }

    return (
        <button id="bt-message" onClick={handleClick}>Click para ingresar nombre</button>
    )
}
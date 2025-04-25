import '../css/ProjectCard.css'

export function ProjectCard ({ title, desc, buttonText }) {
  const handleClick = () => {
    console.log(`Explorando: ${title}`)
  }

  return (
    <section>
      <h1>Proyectos</h1>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
    </section>
  )
}

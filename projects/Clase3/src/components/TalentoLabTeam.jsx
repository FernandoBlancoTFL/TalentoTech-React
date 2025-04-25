import '../css/TalentoLabTeam.css'

export function TalentoLabTeam ({ team }) {
  return (
    <>
      <h2>Equipo TalentoLab:</h2>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            <h3>{`Nombre: ${member.name}`}</h3>
            <p><strong>Rol:</strong> {`${member.role}`}</p>
            <img src={member.image} alt={member.name} />
          </li>
        ))}
      </ul>
    </>

  )
}

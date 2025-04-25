import { TalentoLabTeam } from './components/TalentoLabTeam'
import { ProjectCard } from './components/ProjectCard'
import { GalleryInterests } from './components/galleryInterests'
import { TEAM_LIST, INTERESTS_LIST } from './service/lists'
import './css/App.css'

export function App () {
  return (
    <>
      <h1>Ejercicio clase 3</h1>
      <TalentoLabTeam team={TEAM_LIST} />
      <ProjectCard title='Plataforma de Gestión' desc='Una herramienta para optimizar la gestión de equipos.' buttonText='Explorar proyecto' />
      <GalleryInterests interests={INTERESTS_LIST} />
    </>
  )
}

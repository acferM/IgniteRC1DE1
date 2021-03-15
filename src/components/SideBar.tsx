import { Button } from './Button'

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  genres: GenreResponseProps[]
  changeSelectedGenreIdFunction: React.Dispatch<React.SetStateAction<number>>
  selectedGenreId: number
}

export function SideBar({ genres, changeSelectedGenreIdFunction, selectedGenreId }: SidebarProps) {
  function handleClickButton(id: number) {
    changeSelectedGenreIdFunction(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

import './App.css';
import React, { useState } from "react";

const MovieCard = ({ title, description, posterURL, note }) => {
  return (
    <div className='movie-card'>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-poster">{description}</p>
      <img className='image' src={posterURL} alt={title} />
      <p className="movie-note">Note: {note}</p>
    </div>
  );
};

const MovieList = ({ movies, titleFilter, noteFilter }) => {
  return (
    <div className='list'>
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            movie.note >= noteFilter
        )
        .map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            note={movie.note}
          />
        ))}
    </div>
  );
};

const Filter = ({ setTitleFilter, setNoteFilter }) => {
  return (
    <div className="filter">
      
      <input className='filter-title'
        type="text"
        placeholder="Filtre par titre"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input className='filter-title'
        type="number"
        placeholder="Filtre par note"
        onChange={(e) => setNoteFilter(e.target.value)}
      />
    </div>
  );
};

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [note, setNote] = useState("");

  return (
    <form className='forme'
      onSubmit={(e) => {
        e.preventDefault();
        addMovie({ title, description, posterURL, note: Number(note) });
        setTitle("");
        setDescription("");
        setPosterURL("");
        setNote("");
      }}
    >
      <input className='titre'
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className='titre'
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input className='titre'
        type="text"
        placeholder="URL du poster"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input className='titre'
        type="number"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button id='btn' type="submit">Ajouter un film</button>
    </form>
  );
};

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Deux hommes incarcérés se lient d'amitié au fil des années, trouvant réconfort et rédemption éventuelle grâce à des actes de décence commune.",
      posterURL: "https://i.pinimg.com/564x/aa/b0/6e/aab06e2c5b1130337f8bd8025738f4a0.jpg",
      note: 9.3
    },
    {
      title: "The Godfather",
      description:
        " Le patriarche vieillissant d'une dynastie de la criminalité organisée transfère le contrôle de son empire clandestin à son fils réticent.",
      posterURL: "https://i.pinimg.com/564x/e6/31/d4/e631d4de7bb67f74211d119313703c7d.jpg",
      note: 9.2
    },
    {
      title: "The Dark Knight",
      description:
        "Lorsque la menace connue sous le nom du Joker seme la destruction et le chaos parmi les habitants de Gotham, le justicier masqué doit faire face à l'un des plus grands tests psychologiques de sa capacité à combattre l'injustice.",
      posterURL: "https://i.pinimg.com/564x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg",
      note: 9.0
    },
    {
      title: "Peaky Blinders",
      description:
        " Peaky Blinders est une série télévisée britannique en 36 épisodes d'environ 55 minutes créée par Steven Knight et diffusée entre le 12 septembre 2013 et le 3 avril 2022 sur BBC Two, puis sur BBC One pour la cinquième et sixième saison.",
      posterURL: "https://i.pinimg.com/564x/af/34/1e/af341e79a94853eb03fb149f3cfbe509.jpg",
      note: 9.4
    },
    {
      title: "Riverdale",
      description:
        "Riverdale est une série télévisée américaine développée par Roberto Aguirre-Sacasa et diffusée depuis le 26 janvier 2017 sur le réseau The CW. La série est basée sur les personnages de l'éditeur Archie Comics et plus spécifiquement sur ceux des publications centrées sur Archie Andrews et sa bande.",
      posterURL: "https://i.pinimg.com/564x/19/dd/85/19dd8577bbdbff86f219ecc657fd0df5.jpg",
      note: 9.9
    },
    {
      title: "Prison Break",
      description:
        "Michael Scofield, ingénieur en génie civil, est arrêté à la suite d'un braquage volontairement manqué. Lors de son procès, il demande à être incarcéré dans le pénitencier fédéral de Fox River, dans l'Illinois, le même où a été envoyé son frère, Lincoln Burrows, condamné à mort pour avoir assassiné Terrence Steadman, le frère de la vice-présidente.",
      posterURL: "https://i.pinimg.com/564x/b6/9a/f7/b69af7e33fd92a53deaa8445897fde92.jpg",
      note: 10.0
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [noteFilter, setNoteFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className='App'>
      <Filter setTitleFilter={setTitleFilter} setNoteFilter={setNoteFilter} />
      <MovieList
        movies={movies}
        titleFilter={titleFilter}
        noteFilter={noteFilter}
      />
      <AddMovie addMovie={addMovie} />
    </div>
  );
};



export default App;

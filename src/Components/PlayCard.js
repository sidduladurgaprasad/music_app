import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

import './PlayCard.css';


function SongCard({ song, isPlaying, isFavourite, handlePlay, handleFav}) {




  return (
      <div className='col-10 col-lg-3 col-md-5 musicCard m-4'>
        <h6>Song : {song.title}</h6>
        <p>Movie : {song.Movie}</p>
        <p>Language : {song.Lang}</p>
        <img src={song.icon} height='150vh' width='150vw' style={{borderRadius:"35%"}}/>
        <br></br>
        <br></br>
        <button onClick={handlePlay}>{isPlaying ? 'PAUSE' : 'PLAY'}</button>
        <button onClick={handleFav}><FaHeart color={isFavourite[song.id - 1] ? 'red' : 'gray'} />
        </button>
      </div>
  );
}

function PlayCard({songList, isFavourite, setFavourite}) {

  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  
  //console.log(isFavourite)
  const handlePlay = (index) => {
    if (audio && isPlaying && index === currentSongIndex) {
      audio.pause();
      setIsPlaying(false);
      setCurrentSongIndex(null);
    } else {
      if (audio && isPlaying) {
        audio.pause();
      }
      const newAudio = new Audio(songList[index].path);
      setAudio(newAudio);
      setIsPlaying(true);
      setCurrentSongIndex(index);
      newAudio.play();
    }
  };

  const handleFav = (index, isFavourite) => {
      let temp = [...isFavourite];
      temp[index] = !isFavourite[index]
      setFavourite(temp)
  };

  

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    }
  }, [audio]);

  

  return (
    <div>
      <div style={{height:"15vh",width:"100vw"}}>

      </div>
      <div className='container'>
        {console.log(isFavourite)}
        <div className='row justify-content-around'>
          {
            songList.map((song, index) => (
              <SongCard 
                key={song.id}
                song={song}
                isPlaying={index === currentSongIndex && isPlaying}
                isFavourite={isFavourite}
                handlePlay={() => handlePlay(index)}
                handleFav={() => handleFav(index,isFavourite)}
                setFavourite={() => setFavourite()}
              />
            ))
          }   
        </div>
      </div>
    </div>
  );
}

export default PlayCard;

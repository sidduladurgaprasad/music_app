import logo from './logo.svg';
import PlayCard from './Components/PlayCard';
import { useState } from 'react';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Favourites from './Components/Favourites';

function App() {
  let [enter,setEnter] = useState(false);

  const songList = [
    {
      id:    1,
      title: "Mastaru Mastaru",
      Movie: "Sir",
      Lang:  "Telugu",
      icon:   "https://igimages.gumlet.io/telugu/home/dhanush_sir10112022_cc.jpg?w=376&dpr=2.6",
      path:  './songs/s1.mp3',
    },
    {
      id:    2,
      title: "Dhoom Dhaam",
      Movie: "Dasara",
      Lang:  "Telugu",
      icon:   "https://c.saavncdn.com/427/Dhoom-Dhaam-From-Dasara-Telugu-Telugu-2022-20221002174042-500x500.jpg",
      path:  './songs/s2.mp3',
    },
    {
      id:    3,
      title: "Ye manishike majiliyo",
      Movie: "Majili",
      Lang:  "Telugu",
      icon:   "https://i.scdn.co/image/ab67616d0000b2730ae99e52ec6c5f9111415239",
      path:  './songs/s3.mp3',
    },
    {
      id:    4,
      title: "Stylish Tingarabuchi",
      Movie: "Aata Arrambam",
      Lang:  "Telugu",
      icon:   "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/GjKrP44yW6/size_l.jpg",
      path:  './songs/s4.mp3',
    },
    {
      id:    5,
      title: "Kaanunna Kalyanam",
      Movie: "Sita Ramam",
      Lang:  "Telugu",
      icon:   "https://static.india.com/wp-content/uploads/2022/08/sitaraman.jpg",
      path:  './songs/s5.mp3',
    },
    {
      id:    6,
      title: "Inthandham",
      Movie: "Sita Ramam",
      Lang:  "Telugu",
      icon:   "https://c.saavncdn.com/309/Inthandham-From-Sita-Ramam-Telugu-Telugu-2022-20220704185958-500x500.jpg",
      path:  './songs/s6.mp3',
    },
    {
      id:    7,
      title: "Jinthaak Chithaka",
      Movie: "Dhamaka",
      Lang:  "Telugu",
      icon:   "https://cdn.123telugu.com/content/wp-content/uploads/2022/12/Dhamaka-m-5.jpg",
      path:  './songs/s7.mp3',
    },
    {
      id:    8,
      title: "Boss Party",
      Movie: "Valther Veeraya",
      Lang:  "Telugu",
      icon:   "https://c.saavncdn.com/000/Boss-Party-From-Waltair-Veerayya-Telugu-2022-20221123152533-500x500.jpg",
      path:  './songs/s8.mp3',
    }
  ]

  const [isFavourite,setFavourite] = useState([false,false,false,false,false,false,false,false])

  return (
    <div className="App">
      {
        (enter == false) &&  
        <div>
          <img src='https://media.istockphoto.com/id/147033398/photo/drums.jpg?s=612x612&w=0&k=20&c=f9RMPptGk3SLNN3fd0DXYAbAyKhZgRR2CnjVPSABMRw=' width="30%" style={{position:"absolute"}}/>
          <div className='Navbar text-center' > 
              <img src='https://musictimeschool.com.au/wp-content/uploads/2019/02/logo.png' width="50%" height="60%"/>
              <div className='cover'></div>
              <button onClick={()=>{setEnter(true)}} className='goToBtn'>
                GET STARTED
            </button>
          </div>
          <div className='mainBtn'>
            <div className='btn5'></div>
          </div>
        </div>
      }
      {
        (enter == true) &&
        <div>
          <div className='navbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <Link to="/home">Home</Link>
              <Link to="/songs">Songs</Link>
              <Link to="/favourites">Favourites</Link>
            </ul>
          </div>
          <Outlet/>
        </div>
      }
      <Routes>
        <Route path='/home' element={<Home />} />   
        <Route path='/songs' element={<PlayCard songList={songList} isFavourite={isFavourite} setFavourite={setFavourite} />} />   
        <Route path='/favourites' element={<Favourites songList={songList} isFavourite={isFavourite} setFavourite={setFavourite} />} />        
      </Routes>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomeContainer from './components/HomeContainer';
import Search from './components/Search';
import { useState } from 'react';
import HomeForm from './components/HomeForm';

function App() {

  const [ homes, setHomes ] = useState([
    {
      id: 1,
      description: '2 bedroom, 2 bath, house', 
      address: '111 home way, Chicago, IL 60600',
      price: 100000
    },
    { 
      id: 2,
      description: '3 bedroom, 3 bath, house', 
      address: '222 street way, Chicago, IL 60600',
      price: 200000
    },
    {
      id: 3,
      description: '4 bedroom, 4 bath, house', 
      address: '333 avenue way, Chicago, IL 60600',
      price: 300000
    },
    {
      id: 4,
      description: '5 bedroom, 5 bath, house', 
      address: '777 casino way, Chicago, IL 60600',
      price: 300000
    }
  ])

  const filterHomes = (searchTerm) => {
    const filteredHomes = homes.filter(home => {
      return home.address.includes(searchTerm)
    })
    setHomes(filteredHomes)
  }

  const deleteHome = (homeId) => {
    const filteredHomes = homes.filter(home => {
      return home.id !== homeId
    })
    setHomes(filteredHomes)
  }

  const addHome = (home) => {
    const newHomes = [...homes, home]
    setHomes(newHomes)
  }
 
  return(
    <>
      <HomeForm addHome={addHome} />
      <Search filterHomes={filterHomes}/>
      <HomeContainer homes={homes} deleteHome={deleteHome}/>
  
    </>
  );

  // const handleClick = (e) => {
  //   document.body.style.backgroundColor = 'black'
  //   document.body.style.color = 'white'
  //   e.target.style.backgroundColor = 'green'
  //   document.querySelector('.test-title').style.color = 'yellow'
  // }

  // return (
  //   <>
  //   <button onClick={handleClick}>Click</button>
  //   <h1 className="test-title">test</h1>
  //   <HomeContainer homes={homes}/>
  //   </>
  // )
};

export default App;

import { useState,useEffect } from 'react'; 




import Cardlist from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

const App = () =>{
  

  const[searchField, setSearchField]=useState('');
  const[monsters,setMonsters]=useState([]);
  const[filteredMonsters,setFilterMonsters]=useState(monsters);
  

  console.log('render');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>setMonsters(users));

  },[]);

  useEffect(()=>{

    const newFilteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
    
  },[monsters,searchField]);


  
  const onSearchChange = (event)=>{
    
    const searchFieldString=event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  


  return(  
  <div className="App">
      <h1 className='app-title'>Monsters</h1>
      <Searchbox 
        ClassName='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder="search your monster"
      />
      <Cardlist monsters={filteredMonsters}/>
  </div>
  )

}

/*class App extends Component {
  
  constructor()
  {
    super();
    this.state={
      monsters:[],
      searchfield:''
      
    };
    
  }
  componentDidMount(){
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>{
      this.setState(
        ()=>{
          return{monsters: users};
        },
        ()=>{
          console.log(this.state)
        }
      )
    });
     
  }
    onsearchchange=
  }
  render(){
    const {monsters,searchfield}=this.state;
    const {onsearchchange}=this;
    ;
  return (
    
  );
  }
}*/

export default App;

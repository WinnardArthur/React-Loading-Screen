import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("/api/user/1");
        setUser(res.data);
      } catch (err) {
        console.log(err)
      } setIsLoading(false);
    };
    getUser();
  }, [])
  
  return (
    <div className="container">
      <Sidebar isLoading={isLoading}/>
      <div className="home">
        <Topbar isLoading={isLoading} user={user}/>
        <Feed />
      </div>
    </div>
  );
}

export default App;

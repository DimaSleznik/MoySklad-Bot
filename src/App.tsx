import React, {useEffect} from 'react';
import './App.css';
import {Button, Grid} from "@mui/material";
import EntitySelector from "./components/EntitySelector";

function App() {

  useEffect(() => {
      const telegram = window.Telegram.WebApp;
      telegram.ready()
  },[])

  return (
    <Grid>
       <EntitySelector/>
        <Button  variant={'contained'}>
            Применить
        </Button>
    </Grid>
  );
}

export default App;

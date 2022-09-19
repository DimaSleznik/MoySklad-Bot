import React, {useEffect} from 'react';
import './App.css';
import {Button, Grid} from "@mui/material";
import EntitySelector from "./components/EntitySelector";
import CounterpartSelectors from "./components/СounterpartySelectors";

function App() {

  useEffect(() => {
      // @ts-ignore
      const telegram = window?.Telegram?.WebApp;
      telegram.ready()
  },[])

  return (
      <Grid container className='main_container'>
    <Grid container
          direction='column'
          alignItems='center'
          justifyContent='center'
    >
       <EntitySelector/>
        <CounterpartSelectors/>
        <Button  variant={'contained'} className='mt8'>
            Создать входящий платеж
        </Button>
    </Grid>
      </Grid>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Button, Grid} from "@mui/material";
import EntitySelector from "./components/EntitySelector";

function App() {
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

import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import {Autocomplete, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {apiRequest} from "../services/apiRequest";

const names =  [
    {label: 'Oliver Hansen', value: '2'},
    {label: 'Dzmitry', value: '54'},
    {label: 'Alexander', value: '16'},
    {label: 'Kto-to', value: '17'}
]

const СounterpartySelectors = () => {
    const [personName, setPersonName] = useState<string>();

    const loadInit = async () => {
        const test = await apiRequest('https://online.moysklad.ru/api/remap/1.2/entity/counterparty/', {
            method: 'get',
        })
    }

    useEffect(() => {
        loadInit()
    }, []);

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                    <Typography>Контрагент</Typography>
                <Autocomplete
                    inputValue={personName}
                    options={names}
                    renderInput={(params) => <TextField {...params} />}
                />
            </FormControl>
        </div>
    );
}

export default СounterpartySelectors;
import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { color } from '@mui/system'
import login from './login';
import reactDom from 'react-dom';
const useStyle = makeStyles({
    loginheader:{
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
        <AppBar className = {classes.loginheader}> <Toolbar></Toolbar> </AppBar>
        <login />
        </React.Fragment>
    )
}

export default Messenger

import React, {useState} from "react"
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core"

import {MovieIcon} from '../../icons'
import styles from "./style"

export default ( {history} ) => {
    const [searchText, setSearchText] = useState("")
    const classes = styles()
    const handleText = e => {
setSearchText(e.target.value)
    }
    const handleClean = e => {
        setSearchText("")
    }
    const handleSearch = e => {
        history.push(`/results?movieName=${searchText}`)
    }


   return(
   <Container className={classes.container}>
       <Card className={classes.cardContainer}>
           <Grid container className={classes.titleGridContainer}>
               <Grid>
                   <Typography className={classes.title}>Bienvenido</Typography>
               </Grid>
               <Grid>
                   <MovieIcon className={classes.movieIcon}></MovieIcon>
               </Grid>
           </Grid>
           <TextField value={searchText} placeholder="Buscar..." onChange={handleText}
           className={classes.textFieldSearch}/>
          <Grid className={classes.buttonsContainer}>
           <Button variant="contained" onClick={handleClean}>Limpiar</Button>
               <Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleSearch}>Buscar</Button>
        </Grid>

       </Card>
 </Container>)}
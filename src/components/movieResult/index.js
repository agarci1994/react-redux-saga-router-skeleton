import React from 'react'
import {Card, Grid, Typography, Button} from '@material-ui/core'

import style from './style'
const MovieResult = ({Title, Year, Type, imdbID, Poster}) =>  {
    const classes = style()
    return (
        <Card className={classes.cardContainer}>
<Grid container>
<Grid items>
<img src={Poster} alt={Title} className={classes.poster}/>
</Grid>
< Grid items className={classes.titleContainer}>
<Typography>{Title}</Typography>
<Typography>{Year}</Typography>
<Typography>{Type}</Typography>
<Button color="primary" variant="contained">Ver mas</Button>
</Grid>
</Grid>
        </Card>
    )
}

export default MovieResult 
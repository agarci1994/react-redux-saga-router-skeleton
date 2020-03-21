import {makeStyles} from '@material-ui/styles'

const centeredStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


export default makeStyles({
    container:{
        height: '100vh',
        flexDirection: "column",
        ...centeredStyle
    },
    cardContainer:{
        flexDirection: "column",
        with: 400, 
        height: 200, 
        padding: '2rem',
        ...centeredStyle

    },
    title:{
        fontSize: '4rem'
    },
    titleGridContainer:{
        ...centeredStyle
    },
textFieldSearch:{
    width: '90%'
},
searchButton:{
    marginLeft: '.5rem'
},
buttonsContainer:{
    marginTop: '.5rem'
},
movieIcon:{
    fontSize: '4rem'
}


})
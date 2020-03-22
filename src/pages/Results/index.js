import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, CircularProgress } from '@material-ui/core'
import queryString from 'query-string'

import {searchMovie} from '../../redux/actions/search'
import {movieResults, isSearchLoading} from '../../redux/selectors'
import MovieResults from '../../components/movieResult'


export default ({location}) => {
    const dispatch = useDispatch()
    const movies = useSelector(state => movieResults(state))
    const isLoading = useSelector(state => isSearchLoading(state))

    useEffect(() => {
        const { movieName } = queryString.parse(location.search)
        dispatch(searchMovie({ movieName }))

    }, [])

const renderMovies = () => {
if (movies){
    return movies.map((value, idx) => <MovieResults key={idx} {...value} />) 
} else if (isLoading){
    return <CircularProgress size={100} color="primary"/>
}
}

    return (
        <Container> {renderMovies()}</Container>
    )
}
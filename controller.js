const movies=[
    {id: 0, name: 'Black Panther'},
    {id: 1, name: 'The PHantom Menace'},
    {id: 2, name: 'Princess Bride'},
    {id: 3, name: 'Cars'}, 
    {id: 4, name: 'Minions'}
]

module.exports={
    getMovies: (req, res)=> {
        res.status(200).send(movies);
    }
}
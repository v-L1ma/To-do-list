function Search ({search, setSearch}) {
    return (        
    <div className="search">
        <h2>Pesquisar:</h2>
        <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Digite a tarefa que deseja buscar..."/>
    </div>
    )

}

export default Search;
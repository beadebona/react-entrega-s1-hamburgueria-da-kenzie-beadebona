

const InputSearch = ({filter}) => {
    return(
        <form className="input-area" onSubmit={(event) => event.preventDefault()}>

            <input type="text" className="form-search" placeholder="Digitar Pesquisa" onChange={(e)=>{filter(e.target.value.toLowerCase())}}/>
            <button className="btn-search">Pesquisar</button>
        </form>
    )
}

export default InputSearch
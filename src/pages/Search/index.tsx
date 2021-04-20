import Button from '../../core/components/Button';
import './styles.css';

const Search = () => {
    return (
        <div className="container">
            <div className="search-container">
                <h1 className="search-title">Encontre um perfil Github</h1>
                
                <input 
                    className="search-input"
                    type="text"
                    placeholder="Usuário Github"
                />
                <div className="button">
                    <Button title="Encontrar" />
                </div>
            </div>
            <div className="result-container">
                
            </div>
        </div>
    );
}

export default Search;
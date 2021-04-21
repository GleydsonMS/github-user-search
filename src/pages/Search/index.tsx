import Button from '../../core/components/Button';
import Result from '../../core/components/Result';
import Loader from '../../core/components/Result/Loader';
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
                <div className="button-1">
                    <Button title="Encontrar" />
                </div>
            </div>
            {/* <Result /> */}
            {/* <Loader /> */}
        </div>
    );
}

export default Search;
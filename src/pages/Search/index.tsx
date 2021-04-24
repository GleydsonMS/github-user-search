import { useState } from 'react';
import Result from '../../core/components/Result';
import Loader from '../../core/components/Result/Loader';
import { FormResult } from '../../core/types/Result';
import { makeRequest } from '../../core/utils/request';
import './styles.css';

const Search = () => {
    const [user, setUser] = useState('');

    const [result, setResult] = useState<FormResult>();

    const [isLoading, setIsLoading] = useState(false);

    const [isShowResult, setIsShowResult] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleSubmit = () => {
        setIsLoading(true);
        makeRequest({ url:`/${user}`})
            .then(response => setResult(response.data))
            .finally(() => {
                setIsLoading(false);
                setIsShowResult(true);
            });
    }

    return (
        <div className="container">
            <div className="search-container">
                <h1 className="search-title">Encontre um perfil Github</h1>
                
                <input 
                    value={user}
                    name="user"
                    className="search-input"
                    type="text"
                    onChange={handleOnChange}
                    placeholder="Usuário Github"
                />
                <div className="button-1">
                    <button 
                        onClick={handleSubmit}
                        className="btn"
                    >
                        Encontrar
                    </button> 
                </div>
            </div>
            { isLoading && <Loader /> }
            { isShowResult && <Result result={result} /> }
        </div>
    );
}

export default Search;
import { FormResult } from '../../types/Result';
import Button from '../Button';
import './styles.css';

type Props = {
    result: FormResult | undefined;
}

const Result = ({ result }:Props) => {
    return (
        <div className="result-container">
                <div className="col-1">
                    <img 
                        className="image-profile"
                        src={result?.avatar_url}
                        alt={result?.login}
                    />
                    <div className="button-2">
                        <a href={result?.html_url}>
                            <Button title="Ver perfil" />
                        </a>
                    </div>
                </div>
                <div className="col-2">
                    <div className="statistics">
                        <span className="index">
                            Repositórios públicos: {result?.public_repos}
                        </span>
                        <span className="index">
                            Seguidores: {result?.followers}
                        </span>
                        <span className="index">
                            Seguindo: {result?.following}
                        </span>
                    </div>
                    <div className="informations">
                        <h2 className="result-title">Informações</h2>
                        <span className="topic">
                            Empresa: {result?.company}
                        </span>
                        <span className="topic">
                            Website/Blog: {result?.blog}
                        </span>
                        <span className="topic">
                            Localidade: {result?.location}
                        </span>
                        <span className="topic">
                            Membro desde: {result?.created_at}
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Result;
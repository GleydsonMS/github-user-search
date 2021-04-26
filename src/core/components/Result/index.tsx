import { FormResult } from '../../types/Result';
import dayjs  from 'dayjs';
import Button from '../Button';
import './styles.css';

type Props = {
    result: FormResult | undefined;
}

const Result = ({ result }:Props) => {
    const date = result?.created_at;

    const formatDate = dayjs(date).locale('pt-BR').format('DD/MM/YYYY');

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
                            Empresa: <span className="topic-result"> {result?.company} </span>
                        </span>
                        <span className="topic">
                            Website/Blog: <span className="topic-result"> {result?.blog}</span> 
                        </span>
                        <span className="topic">
                            Localidade: <span className="topic-result">{result?.location}</span> 
                        </span>
                        <span className="topic">
                            Membro desde: <span className="topic-result">{formatDate}</span> 
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Result;
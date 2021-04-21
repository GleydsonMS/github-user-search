import Button from '../Button';
import './styles.css';

const Result = () => {
    return (
        <div className="result-container">
                <div className="col-1">
                    <img 
                        className="image-profile"
                        src="https://avatars.githubusercontent.com/u/8749369?v=4" 
                        alt="GleydsonMS"
                    />
                    <div className="button-2">
                        <Button title="Ver perfil" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="statistics">
                        <span className="index">
                            Repositórios públicos: 62
                        </span>
                        <span className="index">
                            Seguidores: 127
                        </span>
                        <span className="index">
                            Seguindo: 416
                        </span>
                    </div>
                    <div className="informations">
                        <h2 className="result-title">Informações</h2>
                        <span className="topic">
                            Empresa: @ZupIT
                        </span>
                        <span className="topic">
                            Website/Blog: https://thewashington.dev
                        </span>
                        <span className="topic">
                            Localidade: Uberlândia
                        </span>
                        <span className="topic">
                            Membro desde: 19/10/2013
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Result;
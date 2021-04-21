import ImageLoader from '../../Loaders/ImageLoader'
import InfoLoader from '../../Loaders/InfoLoader'
import './styles.css'

const Loader = () => {
    return (
        <div className="result-container">
            <ImageLoader />
            <div className="informations">
                <InfoLoader />
            </div>
        </div>
    );
}

export default Loader;
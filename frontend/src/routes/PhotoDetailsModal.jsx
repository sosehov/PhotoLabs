import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeModal, photo}) => {
  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
          {console.log(photo)}
        </button>
      </div>
      <div className='photo-details-modal__image'>
        <img src={photo} />
      </div>
      <div className='photo-details-modal__images'>
        
      </div>
    </>
  )
};

export default PhotoDetailsModal;
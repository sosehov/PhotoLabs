const useApplicationData = () => {

  const [state, setState] = useState();

  const updateToFavPhotoIds = (photoId) => {
    setState((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        // Remove from liked photos if it's already in the list
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        // Add to liked photos if it's not in the list
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  const onPhotoSelect = (photoData) => {
    setState = (() => {
      setSelectedPhoto(photoData);
      setIsModalOpen(true);
    });
  };

  const toggleFavorite = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        // Remove from liked photos if it's already in the list
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        // Add to liked photos if it's not in the list
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  const onClosePhotoDetailsModal = () => {
    setState(()=> {
      setIsModalOpen(false);
      setSelectedPhoto(null);
    });
  };

  const onloadTopic = (photoData) => {
    setState((photoData)=> {
      return photos.filter((photo) => 
        photo.location.city === photoData.location.city && photo.id !== photoData.id);
    });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};
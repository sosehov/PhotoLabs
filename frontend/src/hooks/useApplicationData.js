import { useEffect, useReducer } from 'react';
import { API_ENDPOINTS, ACTIONS } from '../constants/constants'
import { reducer } from '../reducers/applicationDataReducer';

// Define the custom hook
const useApplicationData = () => {

  // Initial state - Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, {
    likedPhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
    photos: [],
    topics: [],
    likedPhotosModalOpen: false
  });

  // Fetch the photo data and topics data and store them in state
  useEffect(() => {
    Promise.all([
      fetch(API_ENDPOINTS.PHOTOS).then(res => res.json()),
      fetch(API_ENDPOINTS.TOPICS).then( res => res.json()) 
    ])
      .then(([photosData, topicsData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: photosData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics: topicsData});
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },[]);

  const fetchPhotosByTopic = (topicId) => {
    fetch((`${API_ENDPOINTS.TOPICS}/${topicId}/photos`))
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data }))
      .catch(err => console.error("Error fetching topic photos:", err));
  };

  const getSimilarPhotos = (selectedPhoto) => {
    if (!selectedPhoto) return [];
    // Extract similar photos from the selected photo object
    return Object.values(selectedPhoto.similar_photos) || [];
  };

  // Dispatch Action: Select a photo
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  // Dispatch Action: Toggle photo favorite status
  const updateToFavPhotoIds = (photoId) => {
    // Check if the photo is already liked, if yes, remove it, else add it
    if (state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  // Dispatch Action: Close photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const toggleLikedPhotosModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_LIKED_MODAL });
  };  

  return {
    state,
    getSimilarPhotos,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
    toggleLikedPhotosModal,
  };
};

export default useApplicationData;
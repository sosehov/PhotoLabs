import { useEffect, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.photoId]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter(id => id !== action.photoId)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos // Populate photos with actual data
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics // Populate topics with actual data
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: true
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null
      }

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

// Define the custom hook
const useApplicationData = () => {

  // Initial state - Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, {
    likedPhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
    photos: [],
    topics: []
  });

  // Fetch the photo data and store it in state
  useEffect(() => {
    fetch(`http://localhost:8001/api/photos`)
    .then( res => res.json() )
    .then( data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data }));
  },[]);

  //fetch the topics data and store it in state
  useEffect(() => {
    fetch(`http://localhost:8001/api/topics`)
      .then( res => res.json() )
      .then( data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics: data}));
  },[]);

  // Function to get similar photos
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

  return {
    state,
    getSimilarPhotos,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
import { BOOK_TICKET, SELECT_DATE } from './actions';

const initialState = {
    selectedMovie: null,
    selectedTheater: null,
    selectedSeat: null,
    bookedTicket: null, 
    selectedDate: null,
  };
   
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_MOVIE':
        return { ...state, selectedMovie: action.payload };
      case 'SELECT_THEATER':
        return { ...state, selectedTheater: action.payload };
      case 'SELECT_SEAT':
        return { ...state, selectedSeat: action.payload };
        case BOOK_TICKET:
          return {
            ...state,
            bookedTicket: action.payload,
          };
        case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
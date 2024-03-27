export const SELECT_MOVIE = 'SELECT_MOVIE';
export const SELECT_THEATER = 'SELECT_THEATER';
export const SELECT_SHOWTIME = 'SELECT_SHOWTIME';
export const SELECT_SEAT = 'SELECT_SEAT';
export const BOOK_TICKET = 'BOOK_TICKET';
export const SELECT_DATE = 'SELECT_DATE';

export const selectMovie = (movie) => ({
  type: SELECT_MOVIE,
  payload: movie,  
}); 

export const selectTheater = (theater) => ({
  type: SELECT_THEATER,
  payload: theater,
});

export const selectShowtime = (showtime) => ({
  type: SELECT_SHOWTIME,
  payload: showtime,
});

export const selectSeat = (seat) => ({
  type: SELECT_SEAT,
  payload: seat,
});


export const bookTicket = (ticketDetails) => {
  return {
    type: BOOK_TICKET,
    payload: ticketDetails,
  };
};

export const selectDate = (date) => ({
  type: SELECT_DATE,
  payload: date,
});
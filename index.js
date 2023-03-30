fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
          const movieContainer = document.getElementById('movieContainer');
          data.forEach(film => {
            const listItem = document.createElement('li');
            listItem.textContent = film.title;
            listItem.addEventListener('click', () => showMovieDetails(film));
            movieContainer.appendChild(listItem);
          });
        });
 // Display details for selected movie
 function showMovieDetails(films) {
    const filmsDetails = document.getElementById('movieContainer');
    filmsDetails.innerHTML = `
      <h2>${films.title}</h2>
      <img src="${films.poster}" alt="${films.title}">
      <p>${films.id}</p>
      <p>${films.runtime}</p>
      <p>${films.tickets_sold}</p>
        <p>${films.showtime}</p>
        <p>${films.capacity}</p>
        <p>${films.capacity - films.tickets_sold}</p>
        <p>${films.description}</p>
    `;
 }
    // Code for making a buy ticket button
  const returnButton = document.getElementById('return-button');
    returnButton.addEventListener('click', () => {
      location.reload();
    });


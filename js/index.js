$('body').append(`
  <h1>Movie Ratings</h1>
  <form>
    <label>Movie: </label><input id="movie" placeholder="Movie Title"></input>
    <label>Rating:</label>
    <select>
      <option value="1 Star">1 Star</option>
      <option value="2 Star">2 Star</option>
      <option value="3 Star">3 Star</option>
      <option value="4 Star">4 Star</option>
      <option value="5 Star">5 Star</option>
   </select>
   <button id="submit">Submit</button>
  </form>
`)


$('form').on('submit', function(e) {
  e.preventDefault()
  var movie = $('#movie').val()
  var rating = $('select').val()
  $('body').append(`
    <div>
      <h3>${movie}</h3>
      <h4>${rating}</h4>
    </div>
  `)
})
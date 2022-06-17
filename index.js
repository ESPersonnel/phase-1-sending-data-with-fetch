// Add your code here


function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify( {
      name: name,
      email: email
    } )
  } )
    .then( response => response.json() ) // convert to json
    .then( data => {
      let id = data.id // get the id from the response
      document.body.innerHTML += `<p>${id}</p>` // append the id to the DOM
    } )
    .catch( error => { // handle the error
      document.body.innerHTML += `<p>${error.message}</p>` // append the error message to the DOM
    } )
}

# All My Films 

This project was to develop a web site using the OMDB - (open movie database) API to build an application that would allow an user to search for films using a search term.

The application should allow users to save their favourite films and bring them back for future reference.

This was a learning project with the key objective being to understand the API and make use of it. 

The favourites information was stored in the local storage as to this point using databases had not been taught.

The AllFilms application is 90% finished with the only piece of functionality needing to be built is the addition to filter by movie category as in Move, Episode, Series all other functionality is working.

The application I built allows a user to store films in two categories - Films I have watched and Films I want to watch.

The OMDB API returns 10 films at a time so I developed the application to scroll through all films matching the criteria, each time the user scrolls the next ten films are fetched. The application retrieves the next 10 films using the current search term and filters the movies locally for things such as year. This means should the user change the year filter only the application does not need to make a new API call.

#Installation

1) From the command line run git clone https://github.com/markp112/allMyFilms.git
2) once the package has cloned type yarn install is using yarn or npm install
3) to run the application type yarn build





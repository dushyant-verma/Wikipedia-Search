document.getElementById('searchButton').addEventListener('click', function () {

    let searchQuery = document.getElementById('searchInput').value;
    searchWikipedia(searchQuery);

});

document.getElementById('searchInput').addEventListener('keyup', function (event) {


    if (event.key === 'Enter') {
        let searchQuery = document.getElementById('searchInput').value;
        searchWikipedia(searchQuery);
    }
});


function searchWikipedia(query) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.query.search);
        })

        .catch(error => console.log('Error', error));

}

function displayResults(results) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';



    
}
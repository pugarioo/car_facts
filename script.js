function retrieveFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('factDisplay').textContent = data.fact;
        })
        .catch(error => {
            console.log('Error fetching fact:', error);
        }
    )

}
async function loadFilms() {
    try {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        if (!response.ok) {
            throw new Error(`Falha ao carregar filmes ${response.statusText}`)
        }
        const films = await response.json();
        const filmList = document.getElementById("film-list");
        films.forEach(filme => {
            const li = document.createElement("li");
            li.textContent = `${filme.title} - Direct by ${filme.director}`
            filmList.appendChild(li);
        })
    } catch (error) {
        console.error("Request falhou", error)
    }
}

loadFilms();
function news(category) {
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=10e1ecfde6e14c11becdc170a6a17b3f`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const noticiasDiv = document.getElementById(category);
          noticiasDiv.innerHTML = '';
          data.articles.slice(0, 10).forEach(article => {
              const noticia = document.createElement('div')
              noticia.className = category;

              noticia.innerHTML = `
                  <h3>${article.title}</h3>
                  <h6>${article.source.name}</h6>
                  <p>${article.description}</p>
                  <a href="${article.url}" target="_blank">Read more</a>
                  <p></p>
              `;
              noticiasDiv.appendChild(noticia);
          });
      })
}

function hour(){
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    let clock = document.getElementById("clock")
    clock.innerHTML = `${hora}:${minutos}:${segundos}`
}

function setclock(){
    setInterval(hour, 1000)
}

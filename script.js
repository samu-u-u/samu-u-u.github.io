function news(category) {
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=10e1ecfde6e14c11becdc170a6a17b3f`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const noticiasDiv = document.getElementById(category);
          noticiasDiv.innerHTML = '';
          
          data.articles.slice(0, 10).forEach(article => {
              const noticia = document.createElement('div');
              noticia.className = category;

              noticia.innerHTML = `
                  <h3>${article.title}</h3>
                  <p>${article.description}</p>
                  <a href="${article.url}" target="_blank">Read more</a>
                  <p></p>
              `;
              noticiasDiv.appendChild(noticia);
          });
      })
}


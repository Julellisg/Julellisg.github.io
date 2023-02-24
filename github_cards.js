function displayGitHubRepos(username) {
  const API_URL = `https://api.github.com/users/${username}/repos`;

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const reposList = document.getElementById('repos-list');
      let html = '';
      data.filter(repo => repo.topics.includes("project")).forEach(repo => {
        html += `
          <div class="repo-container">
            <h2>${repo.name}</h2>
            <p id="long-text">${repo.description}</p>
            <a href="${repo.html_url}" class="btn">View on GitHub</a>
          </div>
        `;
      });
      reposList.innerHTML = html;
    })
    .catch(error => console.error(error));
}

displayGitHubRepos("Julellisg");  

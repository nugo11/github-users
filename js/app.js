let input = document.getElementsByTagName("input")[0];
let submit = document.getElementById("submit");
let box = document.getElementsByClassName("box")[0];

function users() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
        if(window.innerWidth < 850) {
            box.innerHTML = `
        <div class="columnone">
        <div class="headone">
          <img src="${data.avatar_url}" alt="avatar" width="117px"/>
        </div>
        <div class="headtwo">
          <h1>${data.name}</h1>
          <span>@${data.login}</span>
          <p>${data.created_at}</p>
        </div>
        <div class="headthree">
          <p>${data.bio}</p>
        </div>
      </div>
      <div class="columntwo">
        <div class="fotone">
          <div class="one">
            <h5>Repos</h5>
            <b>${data.public_repos}</b>
          </div>

          <div class="two">
            <h5>Followers</h5>
            <b>${data.followers}</b>
          </div>

          <div class="three">
            <h5>Following</h5>
            <b>${data.following}</b>
          </div>
        </div>

        <div class="fottwo">
          <a href="${data.html_url}"
            ><img src="./img/loc.svg" alt="location" /> ${data.location}</a
          >
          <a href="${data.html_url}"
            ><img src="./img/url.svg" alt="url" /> ${data.html_url}</a
          >
          <a href="${data.html_url}"
            ><img src="./img/twit.svg" alt="twitter" /> Not Available</a
          >
          <a href="${data.html_url}"><img src="./img/hash.svg" alt="hash" /> @${data.login}</a>
        </div>
      </div>
        `;
        }

        if(window.innerWidth > 850) {
            box.innerHTML = `
        <div class="columnone">
        <div class="headone">
          <img src="${data.avatar_url}" alt="avatar" width="117px"/>
        </div>
        <div class="headtwo">
          <h1>${data.name}</h1>
          <span>@${data.login}</span>
          <p>${data.bio}</p>
        </div>
        <div class="headthree">
          <p>${data.created_at}</p>
        </div>
      </div>
      <div class="columntwo">
        <div class="fotone">
          <div class="one">
            <h5>Repos</h5>
            <b>${data.public_repos}</b>
          </div>

          <div class="two">
            <h5>Followers</h5>
            <b>${data.followers}</b>
          </div>

          <div class="three">
            <h5>Following</h5>
            <b>${data.following}</b>
          </div>
        </div>

        <div class="fottwo">
          <a href="${data.html_url}"
            ><img src="./img/loc.svg" alt="location" /> ${data.location}</a
          >
          <a href="${data.html_url}"
            ><img src="./img/url.svg" alt="url" /> ${data.html_url}</a
          >
          <a href="${data.html_url}"
            ><img src="./img/twit.svg" alt="twitter" /> Not Available</a
          >
          <a href="${data.html_url}"><img src="./img/hash.svg" alt="hash" /> @${data.login}</a>
        </div>
      </div>
        `;
        }

    });
}

submit.addEventListener("click", () => {
  box.innerHTML = '<span class="loader"></span>';
  setTimeout(() => {
    users();
  }, 1000);
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    box.innerHTML = '<span class="loader"></span>';
  setTimeout(() => {
    users();
  }, 1000);
  }
});

let darkmode = document.getElementById('darkmode');
let lightmode = document.getElementById('lightmode');
let createStyle = document.createElement('style');

darkmode.addEventListener("click", () => {
    darkmode.style.display = 'none';
    lightmode.style.display = 'flex';
    createStyle.innerHTML = `
    p, h5, a {color: #c4cad4;}
    body {background: #141D2F;}
    header{color: white;}
    .input, input, .box {background: #1E2A47; color: white; box-shadow: none;}
    .fotone {background: #141D2F;}
    `;
    document.getElementsByTagName('head')[0].appendChild(createStyle);
})
lightmode.addEventListener("click", () => {
    darkmode.style.display = 'flex  ';
    lightmode.style.display = 'none';
    document.getElementsByTagName('style')[0].remove();
})
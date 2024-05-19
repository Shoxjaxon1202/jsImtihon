const elCards = document.querySelector(".card");
var movies = [
  {
    title: "The Secret Rules of Modern Living: Algorithms",
    year: 2015,
    categories: ["Documentary"],
    summary:
      "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
    imdbId: "tt5818010",
    imdbRating: 7.5,
    runtime: 58,
    language: "English",
    trailer: "https://youtube.com/watch?v=hpyxmT6KSvw",
    bigPoster: "http://i3.ytimg.com/vi/hpyxmT6KSvw/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/hpyxmT6KSvw/hqdefault.jpg",
  },
  {
    title: "Secrets in the Fall",
    year: 2015,
    categories: ["Family"],
    summary:
      "Nothing is impossible for a group of young campers, friends and enemies alike, on a weekend retreat at Camp Pinnacle. But what starts as an exciting wilderness adventure turns into trouble when a young camper goes missing and the rest of the group must set out to find him. The campers are forced to overcome their differences and band toget.",
    imdbId: "tt2522908",
    imdbRating: 7.3,
    runtime: 0,
    language: "English",
    trailer: "https://youtube.com/watch?v=eMVw1pHVMAw",
    bigPoster: "http://i3.ytimg.com/vi/eMVw1pHVMAw/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/eMVw1pHVMAw/hqdefault.jpg",
  },
  {
    title: "Suicide Squad: Hell to Pay",
    year: 2018,
    categories: ["Action", "Animation"],
    summary:
      "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
    imdbId: "tt7167602",
    imdbRating: 7.2,
    runtime: 86,
    language: "English",
    trailer: "https://youtube.com/watch?v=EPZZvk-wbGE",
    bigPoster: "http://i3.ytimg.com/vi/EPZZvk-wbGE/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/EPZZvk-wbGE/hqdefault.jpg",
  },
  {
    title: "Wildling",
    year: 2018,
    // categories: ["Fantasy", "Horror"],
    summary:
      "Anna spends her entire childhood under the care of a mysterious man she only knows as Daddy. He keeps her locked in an attic making her fear the Wildling, a child-eating monster that roams the outside. At age 16, Anna is freed by small-town sheriff Ellen Cooper who helps her start a new life as a normal teenager. But as Anna's body begins to blossom.",
    imdbId: "tt5085924",
    imdbRating: 6.1,
    runtime: 92,
    language: "English",
    trailer: "https://youtube.com/watch?v=eyl1Wf90AgY",
    bigPoster: "http://i3.ytimg.com/vi/eyl1Wf90AgY/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/eyl1Wf90AgY/hqdefault.jpg",
  },
  {
    title: "The Humanity Bureau",
    year: 2017,
    categories: ["Action", "Sci-Fi"],
    summary:
      "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
    imdbId: "tt6143568",
    imdbRating: 6.1,
    runtime: 95,
    language: "English",
    trailer: "https://youtube.com/watch?v=kUH8JGhRzPY",
    bigPoster: "http://i3.ytimg.com/vi/kUH8JGhRzPY/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/kUH8JGhRzPY/hqdefault.jpg",
  },
  {
    title: "Farewell Ferris Wheel",
    year: 2016,
    categories: ["Documentary", "Drama", "News"],
    summary:
      "Farewell, Ferris Wheel examines the link between America's carnival industry and a small Mexican town that legally provides one third of the carnival's labor. However, increased regulations are compromising this longstanding connection, putting both the industry and its workers in jeopardy.",
    imdbId: "tt2349677",
    imdbRating: 7.4,
    runtime: 72,
    language: "English",
    trailer: "https://youtube.com/watch?v=-K2m6AKNB-g",
    bigPoster: "http://i3.ytimg.com/vi/-K2m6AKNB-g/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/-K2m6AKNB-g/hqdefault.jpg",
  },
  {
    title: "Don't Talk to Irene",
    year: 2017,
    categories: ["Comedy"],
    summary:
      'Irene must endure 2 weeks of community service at a retirement home. Following her passion for cheerleading, she secretly signs up the senior residents to audition for a dance-themed reality show to prove that you don\'t need to be physically "perfect" to be perfectly AWESOME.',
    imdbId: "tt5030452",
    imdbRating: 6.4,
    runtime: 90,
    language: "English",
    trailer: "https://youtube.com/watch?v=lK48UxWuUho",
    bigPoster: "http://i3.ytimg.com/vi/lK48UxWuUho/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/lK48UxWuUho/hqdefault.jpg",
  },
  {
    title: "Blood Road",
    year: 2017,
    categories: ["Documentary", "History", "Sport"],
    summary:
      "The mysteries surrounding her father's death in the Vietnam war lead ultra-endurance mountain biker Rebecca Rusch on an emotional journey as she pedals 1200 miles of the Ho Chi Minh trail.",
    imdbId: "tt6900092",
    imdbRating: 6.9,
    runtime: 96,
    language: "English",
    trailer: "https://youtube.com/watch?v=XCzVqiN950M",
    bigPoster: "http://i3.ytimg.com/vi/XCzVqiN950M/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/XCzVqiN950M/hqdefault.jpg",
  },
  {
    title: "Andre the Giant",
    year: 2018,
    categories: ["Documentary"],
    summary:
      "A look at the life and career of professional wrestler André Roussimoff, who gained notoriety in the 1980s as Andre the Giant.",
    imdbId: "tt6543420",
    imdbRating: 8.2,
    runtime: 85,
    language: "English",
    trailer: "https://youtube.com/watch?v=f_jTeuajas0",
    bigPoster: "http://i3.ytimg.com/vi/f_jTeuajas0/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/f_jTeuajas0/hqdefault.jpg",
  },
  {
    title: "Dead on Arrival",
    year: 2017,
    categories: ["Thriller"],
    summary:
      "A pharmaceutical sales rep visits a small town in Louisiana on business. He finds himself in a dark world of corruption and murder with 24 hours to live, running from the police, the mob and a sheriff that wants him dead.",
    imdbId: "tt5903088",
    imdbRating: 6.9,
    runtime: 97,
    language: "English",
    trailer: "https://youtube.com/watch?v=8jJ-kC-rq0Q",
    bigPoster: "http://i3.ytimg.com/vi/8jJ-kC-rq0Q/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/8jJ-kC-rq0Q/hqdefault.jpg",
  },
];

function add(movies) {
  movies.forEach((element) => {
    let newCard = document.createElement("div");
    newCard.className = "list__card";
    newCard.innerHTML = `<div id="list__card" class="card-body">
        <img src="${element.smallPoster}" class="card__img" alt="..." />
        <div class="texts">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">
          ${element.summary}
          </p>
          <a id = "btn" href="https://www.youtube.com/"  class="btn btn-primary">Trailerga o'tish</a>
          <p class="son">${element.imdbRating}</p>
        </div>
      </div>`;
    elCards.appendChild(newCard);
  });
}
add(movies);

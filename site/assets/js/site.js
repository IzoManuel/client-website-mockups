const episodes = [
  {
    title: "Why We Stop Opening Up to Our Parents",
    topic: "communication",
    label: "Communication",
    summary: "What happens when a child no longer feels safe enough to share what is on their mind?",
    date: "November 20, 2026",
    videoId: "KvAhkGcxdzE",
  },
  {
    title: "Healing Begins with the Truth and the Pain We Avoid",
    topic: "relationships",
    label: "Family repair",
    summary: "A father and son reflect on pain, listening, forgiveness and the work of repairing a relationship.",
    date: "November 15, 2026",
    videoId: "1nzvbq_Dom4",
  },
  {
    title: "My Father's Most Important Advice About Love",
    topic: "relationships",
    label: "Relationships",
    summary: "A personal conversation about honesty, uncertainty and the choices we make in love.",
    date: "November 13, 2026",
    videoId: "EXCW4mBaNsA",
  },
  {
    title: "Why Your Children Don't Talk to You",
    topic: "communication",
    label: "Listening",
    summary: "Listening without rushing to advise can help an adult child feel heard and respected.",
    date: "November 13, 2026",
    videoId: "1fAFNS9w8Jo",
  },
  {
    title: "Why Do Men Take Their Anger Out on Their Families?",
    topic: "parenting",
    label: "Parenting & emotion",
    summary: "A look at pressure, anger and the effect home conflict can have on the people around us.",
    date: "November 10, 2026",
    videoId: "WA43rGoN9E0",
  },
];

const articles = [
  {
    index: "Read 001 · Communication",
    title: "When Your Child Stops Telling You What's Really Going On",
    summary: "Silence can be a sign that a young person expects correction before understanding. A starting point for parents: make space, ask gently, and listen through the pause.",
    meta: "Sample blog feature · 5 minute read",
    lead: true,
  },
  {
    index: "Read 002 · Family",
    title: "Listening Before Advice",
    summary: "Why adult children may need curiosity and acknowledgment more than another instruction.",
    meta: "Sample blog idea · 4 minute read",
  },
  {
    index: "Read 003 · Parenting",
    title: "What Pressure Can Look Like at Home",
    summary: "A reflection on stress, anger and the effect our reactions have on the people closest to us.",
    meta: "Sample blog idea · 6 minute read",
  },
];

const audioEpisodes = [
  { number: "01", title: "Healing Begins with the Truth", label: "Family repair · MP3 episode" },
  { number: "02", title: "Why We Stop Opening Up", label: "Communication · MP3 episode" },
  { number: "03", title: "A Father's Advice About Love", label: "Relationships · MP3 episode" },
];

function renderEpisodes() {
  const grid = document.querySelector("#episode-grid");
  const template = document.querySelector("#episode-template");

  for (const episode of episodes) {
    const card = template.content.firstElementChild.cloneNode(true);
    const link = card.querySelector(".content-card__link");
    const image = card.querySelector(".content-card__image");

    card.dataset.topic = episode.topic;
    link.href = `https://www.youtube.com/watch?v=${episode.videoId}`;
    image.src = `assets/images/${episode.videoId}.jpg`;
    image.alt = `YouTube thumbnail for ${episode.title}`;
    card.querySelector(".content-card__tag").textContent = episode.label;
    card.querySelector(".content-card__title").textContent = episode.title;
    card.querySelector(".content-card__summary").textContent = episode.summary;
    card.querySelector(".content-card__meta").textContent = `${episode.date} · Watch episode ↗`;
    grid.insertBefore(card, grid.querySelector(".more-card"));
  }
}

function renderArticles() {
  const grid = document.querySelector("#journal-grid");
  const template = document.querySelector("#journal-template");

  for (const article of articles) {
    const card = template.content.firstElementChild.cloneNode(true);
    if (article.lead) card.classList.add("journal-card--lead");
    card.querySelector(".journal-card__index").textContent = article.index;
    card.querySelector(".journal-card__title").textContent = article.title;
    card.querySelector(".journal-card__summary").textContent = article.summary;
    card.querySelector(".journal-card__meta").textContent = article.meta;
    grid.append(card);
  }
}

function renderAudioEpisodes() {
  const list = document.querySelector("#audio-list");
  const template = document.querySelector("#audio-template");

  for (const episode of audioEpisodes) {
    const row = template.content.firstElementChild.cloneNode(true);
    row.querySelector(".audio-row__number").textContent = episode.number;
    row.querySelector(".audio-row__name").textContent = episode.title;
    row.querySelector(".audio-row__label").textContent = episode.label;
    list.append(row);
  }
}

function setupEpisodeFilters() {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll("#episode-grid .content-card");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const topic = filter.dataset.filter;
      filters.forEach((button) => button.setAttribute("aria-pressed", String(button === filter)));
      cards.forEach((card) => {
        card.hidden = topic !== "all" && card.dataset.topic !== topic;
      });
    });
  });
}

function setupFeaturedVideo() {
  const playButton = document.querySelector(".feature__play");

  playButton.addEventListener("click", () => {
    const video = document.createElement("iframe");
    video.className = "feature__iframe";
    video.src = `https://www.youtube-nocookie.com/embed/${playButton.dataset.video}?autoplay=1`;
    video.title = "Featured Family Therapy Podcast conversation";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.referrerPolicy = "strict-origin-when-cross-origin";
    video.allowFullscreen = true;
    playButton.replaceWith(video);
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");

  function setOpen(open) {
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    toggle.textContent = open ? "CLOSE" : "MENU";
  }

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") === "true" && !event.target.closest(".nav")) setOpen(false);
  });
}

renderEpisodes();
renderArticles();
renderAudioEpisodes();
setupEpisodeFilters();
setupFeaturedVideo();
setupMobileMenu();

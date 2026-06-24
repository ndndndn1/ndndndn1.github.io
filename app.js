const state = {
  sites: [],
  filter: "",
};

const fallbackCatalog = {
  title: "ndndndn1 Pages",
  sites: [
    {
      repo: "semiconductor-process-dashboard",
      name: "Semiconductor Process Dashboard",
      description: "반도체 stepCoverage 라인스플릿 공정 진척도 현황판",
      tags: ["semiconductor", "dashboard", "stepCoverage"],
      site_url: "https://ndndndn1.github.io/semiconductor-process-dashboard/",
      repo_url: "https://github.com/ndndndn1/semiconductor-process-dashboard",
      updated_at: null,
      status: "configured",
    },
  ],
};

const siteList = document.getElementById("siteList");
const siteCount = document.getElementById("siteCount");
const catalogStatus = document.getElementById("catalogStatus");
const filterInput = document.getElementById("filterInput");
const template = document.getElementById("siteCardTemplate");

function formatDate(value) {
  if (!value) return "Update pending";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Update pending";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function matches(site) {
  const query = state.filter.trim().toLowerCase();
  if (!query) return true;
  return [site.repo, site.name, site.description, ...(site.tags || [])]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(query));
}

function render() {
  const sites = state.sites.filter(matches);
  siteList.textContent = "";
  siteCount.textContent = String(state.sites.length);

  if (sites.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No repositories match the current filter.";
    siteList.appendChild(empty);
    return;
  }

  for (const site of sites) {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector("h3").textContent = site.name || site.repo;
    node.querySelector(".description").textContent = site.description || site.repo;
    node.querySelector(".status").textContent = site.status || "ready";

    const tags = node.querySelector(".tags");
    for (const tag of site.tags || []) {
      const item = document.createElement("span");
      item.className = "tag";
      item.textContent = tag;
      tags.appendChild(item);
    }

    const openLink = node.querySelector(".open-link");
    openLink.href = site.site_url;
    openLink.setAttribute("aria-label", `Open ${site.name || site.repo}`);

    const repoLink = node.querySelector(".repo-link");
    repoLink.href = site.repo_url;
    repoLink.setAttribute("aria-label", `Open repository ${site.repo}`);

    node.querySelector(".updated").textContent = `Updated ${formatDate(site.updated_at)}`;
    siteList.appendChild(node);
  }
}

async function loadCatalog() {
  try {
    const response = await fetch(`sites.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.sites = data.sites || [];
    catalogStatus.textContent = "Live";
  } catch (error) {
    console.warn("sites.json fetch failed; using fallback catalog.", error);
    state.sites = fallbackCatalog.sites;
    catalogStatus.textContent = "Fallback";
  }

  render();
}

filterInput.addEventListener("input", (event) => {
  state.filter = event.target.value;
  render();
});

loadCatalog();

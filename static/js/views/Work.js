import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('My Work | Radostin Stoychev');
  }

  async renderHtml(targetElement, data) {
    this.state = {
      'data': data.reverse(),
      'page': 1,
      'items': 3,
      'maxPages': 2,
    };

    targetElement.innerHTML = `
      <h1>My Work</h1>
      <ul id="projects">
        ${this.renderProjects()}
      </ul>
      <div id="pagination-wrapper"></div>
    `;
  }

  async renderProjects() {
    let projects = await this.paginateProjects(this.state.data, this.state.page, this.state.items);

    document.getElementById('projects').innerHTML = projects.pageItems.map(x => `
      <li>
        <div class="info-box">
          <h2>${x.title}</h2>
          <p>${x.preview.description}</p>
          <a id="${x.id}" class="btn btn-medium" href="/project/${x.id}" data-link data-obj="${btoa(JSON.stringify(x))}">Check it out</a>
        </div>

        <div class="img-box">
          <div class="responsive-img-container" style="padding-bottom:${x.preview.imgHeight / (x.preview.imgWidth / 100)}%">
            <img src="${x.preview.imgUrl}" width="${x.preview.imgWidth}" height="${x.preview.imgHeight}">
          </div>
        </div>
      </li>
    `).join('');

    this.renderButtons(projects.pages);
    let selectedPageBtn = document.querySelector(`button[value="${this.state.page}"]`);
    selectedPageBtn.disabled = true; // DISABLE currently selected page button, change background-color and set cursor to default
    selectedPageBtn.style.backgroundColor = '#0F0E0E';
    selectedPageBtn.style.cursor = 'default';
  }

  async paginateProjects(data, page, items) {
    let start = (page - 1) * items;
    let end = start + items;
    let pageItems = data.slice(start, end);
    let pages = Math.ceil(data.length / items);
    return {
      'pageItems': pageItems,
      'pages': pages,
    }
  }

  renderButtons(pages) {
    let wrapper = document.getElementById('pagination-wrapper');
    wrapper.innerHTML = '';

    let maxLeft = (this.state.page - Math.floor(this.state.maxPages / 2));
    let maxRight = (this.state.page + Math.floor(this.state.maxPages / 2));

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = this.state.maxPages;
    }

    if (maxRight > pages) {
      maxLeft = pages - (this.state.maxPages - 1);
      maxRight = pages;
      if (maxLeft < 1) {
        maxLeft = 1;
      }
    }

    for (let page = maxLeft; page <= maxRight; page++) {
      wrapper.innerHTML += `<button value="${page}" class="page btn btn-small">${page}</button>`
    }

    if (this.state.page !== 1) {
      wrapper.innerHTML = `<button value="${1}" class="page btn btn-small"><i class="fas fa-angle-double-left"></i></button>` + wrapper.innerHTML;
    }

    if (this.state.page !== pages) {
      wrapper.innerHTML += `<button value="${pages}" class="page btn btn-small"><i class="fas fa-angle-double-right"></i></button>`;
    }

    Array.from(document.getElementsByClassName('page')).forEach(x => x.addEventListener('click', evt => {
      let ul = document.getElementById('projects').innerHTML = '';
      this.state.page = +[evt.target.value];
      this.renderProjects();
      window.scrollTo(0, 0); // Scroll to top after render
    }));
  }
}
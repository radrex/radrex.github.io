import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('My Work | Radostin Stoychev');
  }

  async getHtml() {
    //TODO Load projects only once maybe in constructor
    let projects = Object.entries(await fetch('../../../static/data/projects.json').then(res => res.json()));
    return `
      <h1>My Work</h1>
      <ul>
        ${projects.map(x => `
          <li>
            <h2>${x[1].title}</h2>
            <p>${x[1].preview.description}</p>
            <div class="responsive-img-container" style="padding-bottom:${x[1].preview.imgHeight / (x[1].preview.imgWidth / 100)}%">
              <img src="${x[1].preview.imgUrl}" width="${x[1].preview.imgWidth}" height="${x[1].preview.imgHeight}">
            </div>
            <a id="${x[0]}" class="btn btn-medium" href="/project/${x[0]}" data-link data-obj="${btoa(JSON.stringify(x[1]))}">Check it out</a>
          </li>
        `).reverse().join('')}
      </ul>
    `;
  }
}
import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Work');
  }

  async getHtml() {
    let projects = Object.entries(await fetch('../../../static/data/projects.json').then(res => res.json()));
    return `
      <h1>My Work</h1>
      <ul>
        ${projects.map(x => `<li><a href="/project/${x[0]}" data-link data-obj="${btoa(JSON.stringify(x[1]))}">${x[1].title}</a></li>`).reverse().join('')}
      </ul>
    `;
  }
}
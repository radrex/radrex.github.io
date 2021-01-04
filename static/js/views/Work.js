import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Work');
  }

  async getHtml() {
    return `
      <h1>Projects</h1>
      <ul>
        <li><a href="/project/1" data-link>Project 1</a></li>
        <li><a href="/project/2" data-link>Project 2</a></li>
        <li><a href="/project/3" data-link>Project 3</a></li>
      </ul>
    `;
  }
}
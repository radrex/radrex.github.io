import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    return `
      <h1>Hey, I'm Radostin.</h1>
      <h3>A web developer based in Sofia, Bulgaria.</h3>
      
      <a class="btn" href="/work" data-link>My Projects</a>

      <p>
        <a href="/work" data-link>View recent projects</a>.
      </p>












      <ul>
        Attributions:
        <li><a target="_blank" href="https://icons8.com/icons/set/laptop-coding">Laptop Coding icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
      </ul>
    `;
  }
}
import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    return `
      <h1>Hello, my name is Radostin</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus libero, viverra eget mollis ut, viverra et est. Cras eget odio sed lorem vestibulum scelerisque.</p>
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
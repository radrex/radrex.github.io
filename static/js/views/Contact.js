import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Contact');
  }

  async getHtml() {
    return `
      <h1>Contact</h1>
      <p>You are viewing the contacts page.</p>
    `;
  }
}
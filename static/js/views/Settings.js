import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>You are viewing the settings!</p>
    `;
  }
}
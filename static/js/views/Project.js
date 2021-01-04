import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.projectId = params.id;
    this.setTitle(`Project ${this.projectId}`);
  }

  async getHtml() {
    return `
      <h1>Selected project</h1>
      <p>You are viewing post #${this.projectId}.</p>
    `;
  }
}
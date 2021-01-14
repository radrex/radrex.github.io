import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.projectId = params.id;
    this.setTitle(`Project ${this.projectId}`);
  }

  async getHtml() {
    let project = await fetch('../../../static/data/projects.json')
                          .then(res => res.json())
                          .then(data => { return data[this.projectId] });
    return `
      <h1>${project.title}</h1>
      <section class="border-box">
        <h2>${project.definition}</h2>
        <p>${project.description}</p>
        ${project.link !== '' ? `<a target="_blank" rel="noopener noreferrer" class="btn btn-small" href="${project.link}">Visit</a>` : ''}
        <a target="_blank" rel="noopener noreferrer" class="btn btn-small" href="${project.github}">Github</a>
      </section>
      
      <section class="project-showcase">
        ${project.functionality.map(x => `
          <h3>${x.name}</h3>
          <p>${x.description}</p>
          <div class="responsive-img-container">
            <div class="responsive-img"></div>
          </div>
        `).join('')}
      </section>
      `;
  }
}
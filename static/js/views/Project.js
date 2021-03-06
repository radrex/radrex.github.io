import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.projectId = params.id;
    this.setTitle(`${this.projectId.split('-').join(' ')} | Radostin Stoychev`);
  }

  async renderHtml(targetElement, data) {
    let project = JSON.parse(atob(document.getElementById(this.projectId).getAttribute('data-obj')));
    targetElement.innerHTML = `
      <h1>${project.title}</h1>
      <section class="border-box">
        <h2>${project.definition}</h2>
        <p>${project.description}</p>
        ${project.hasOwnProperty('link') ? `<a target="_blank" rel="noopener noreferrer" class="btn btn-small" href="${project.link}">Visit</a>` : ''}
        ${project.hasOwnProperty('github') ? `<a target="_blank" rel="noopener noreferrer" class="btn btn-small" href="${project.github}">Github</a>` : ''}
      </section>
      
      <section class="tech-stack border-box">
        <h3>Tech Stack</h3>
        <ul>
          ${project.techStack.map(x =>
            `<li><img src="${x.imgUrl}"></li>`
          ).join('')}
        </ul>
      </section>

      <ul class="project-showcase">
        ${project.functionality.map(x => `
          <li>
            <div class="info-box">
              <h3>${x.name}</h3>
              <p>${x.description}</p>
            </div>

            <div class="img-box">
              <div class="responsive-img-container" style="padding-bottom:${x.imgHeight / (x.imgWidth / 100)}%">
                <img src="${x.imgUrl}" width="${x.imgWidth}" height="${x.imgHeight}">
              </div>
            </div>
          </li>
        `).join('')}
      </ul>
      `;
  }
}

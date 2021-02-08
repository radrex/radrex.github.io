import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Experience | Radostin Stoychev');
  }

  async renderHtml(targetElement, data) {
    targetElement.innerHTML = `
      <h1>Experience</h1>
      <section class="timeline">
        ${data.map((x, idx) => `
          <div class="timeline-block" style="--logo-url: url('${x.logoUrl}');">
            <div class="imgBlock"><i class="${x.mainIconClass}"></i></div>
            <h2>${x.place}</h2>
            <div class="timespan">
              <span><i class="${x.timespanIconClass}"></i> ${x.field} </span>
              <span><i class="far fa-calendar-check"></i> ${x.timespan}</span>
            </div>
            <details ${idx === data.length-1 ? 'open' : ''}>
              <summary>Summary</summary>
              <ul>
                ${x.summary.map(y => `<li>${y}</li>`).join('')}
              </ul>
            </details>

            ${x.hasOwnProperty('docs') ? `
              <details class="docs">
                <summary>Certification</summary>
                <ul>
                  ${x.docs.map(y => `<li><a target="_blank" rel="noopener noreferrer" href="${y.url}">${y.name}</a></li>`).join('')}
                </ul>
              </details>
            ` : ''}

            <ul class="skills">
              ${x.skills.map(y => `<li>${y}</li>`).join('')}
            </ul>
          </div>
        `).reverse().join('')}
      </section>
    `;
  }
}
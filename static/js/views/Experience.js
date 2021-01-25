import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Experience');
  }

  async getHtml() {
    //TODO Load projects only once maybe in constructor
    let data = Object.entries(await fetch('../../../static/data/experience.json').then(res => res.json()));
    return `
      <h1>Experience</h1>
      <section class="timeline">
        ${data.map((x, idx) => `
          <div class="timeline-block">
            <div class="imgBlock"><i class="${x[1].mainImgClass}"></i></div>
            <h2>${x[1].place}</h2>
            <div class="timespan">
              <span><i class="${x[1].timespanImgClass}"></i> ${x[1].field} </span>
              <span><i class="far fa-calendar"></i> ${x[1].timespan}</span>
            </div>
            <details ${idx === data.length-1 ? 'open' : ''}>
              <summary>Summary</summary>
              <ul>
                ${x[1].summary.map(y => `<li>${y}</li>`).join('')}
              </ul>
            </details>

            <ul class="skills">
              ${x[1].skills.map(y => `<li>${y}</li>`).join('')}
            </ul>
          </div>
        `).reverse().join('')}
      </section>
    `;
  }
}
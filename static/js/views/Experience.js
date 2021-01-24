import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Experience');
  }

  async getHtml() {
    //TODO: extract data in new json file
    return `
      <h1>Experience</h1>

      <section class="timeline">
        <div class="timeline-block">
          <div class="imgBlock"><i class="fas fa-university"></i></div>

          <h2>University of National and World Economy</h2>
          <div class="timespan">
            <span><i class="fas fa-graduation-cap fa-xs"></i> Bachelor in Business Informatics </span>
            <span><i class="far fa-calendar"></i> September 2014 - October 2018</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et metus scelerisque augue facilisis ornare in placerat nisl. Maecenas euismod ante ut mauris mattis venenatis. Nunc volutpat nisl mi. Sed mollis ut urna nec imperdiet. </p>
          <ul class="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </section>
    `;
  }
}
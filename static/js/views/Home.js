import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('About Me | Radostin Stoychev');
  }

  async getHtml() {
    return `
      <h1>Hey, I'm Radostin.</h1>
      <h2>A web developer based in Sofia, Bulgaria. Specialized in front and back-end.</h2>
      <h2>I'm really passionate about all sorts of technology. Always looking forward to collaborate on thought-provoking and intriguing projects with enthusiasm to engage in the full process.</h2>
      
      <a class="btn btn-large" href="/work" data-link>My Projects</a>

      <div class="responsive-img-container">
        <img src="../../static/images/markus-spiske-y6HpQzW87Vc-unsplash.jpg" width="3840" height="5760">
      </div>

      <section class="favored-tech">
        <i class="fas fa-layer-group"></i>
        <h2>Back-End</h2>
        <ul class="skills">
          <li>C#</li>
          <li>MSSQL</li>
          <li>EF Core</li>
          <li>ASP.NET Core</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Firebase</li>
        </ul>
      </section>
      
      <section class="favored-tech">
        <i class="fas fa-drafting-compass"></i>
        <h2>Front-End</h2>
        <ul class="skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      <ul>
        Attributions:
        <li><span>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
      </ul>
    `;
  }
}
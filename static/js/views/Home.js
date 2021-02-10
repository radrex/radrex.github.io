import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('About Me | Radostin Stoychev');
  }

  async renderHtml(targetElement, data) {
    targetElement.innerHTML = `
      <section class="info-wrapper">
        <div class="info-block">
          <h1>Hey, I'm Radostin.</h1>
          <h2>A junior software developer based in Sofia, Bulgaria. Specialized in front and back-end.</h2>
          <h2>I'm really passionate about all sorts of technology. Always looking forward to collaborate on thought-provoking and intriguing projects with enthusiasm to engage in the full process.</h2>
          
          <a class="btn btn-large" href="/work" data-link>My Projects</a>
        </div>

        <div class="img-block">
          <div class="img-container-wrapper">
            <div class="responsive-img-container" style="padding-bottom:${5760 / (3840 / 100)}%">
              <img src="../../static/images/markus-spiske-y6HpQzW87Vc-unsplash.jpg" alt="Picture of Me" width="3840" height="5760">
            </div>
          </div>
        </div>
      </section>

      <section class="favored-tech">
        <section class="tech-block">
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

        <section class="tech-block">
        <i class="fas fa-drafting-compass"></i>
        <h2>Front-End</h2>
        <ul class="skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
        </section>
      </section>

      <ul>
        Attributions:
        <li><span>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
      </ul>
    `;
  }
}
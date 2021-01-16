import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {

    return `
      <h1>Hey, I'm Radostin.</h1>
      <h2>A web developer based in Sofia, Bulgaria. Specialized in front-end and back-end.</h2>
      <a class="btn btn-large" href="/work" data-link>My Projects</a>

      <div class="responsive-img-container">
        <img src="../../static/images/markus-spiske-y6HpQzW87Vc-unsplash.jpg" width="3840" height="5760">
      </div>

      <h2>Featured Projects</h2>

      <ul>
        Attributions:
        <li><a target="_blank" href="https://icons8.com/icons/set/laptop-coding">Laptop Coding icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
        <li><span>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
      </ul>
    `;
  }
}
import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Contact');
  }

  async getHtml() {
    return `
      <h1>Contact Me</h1>
      <h2>If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.</h2>
    
      <section class="mac-window">
        <div class="buttons">
          <div class="mac-btn red"></div>
          <div class="mac-btn yellow"></div>
          <div class="mac-btn green"></div>
        </div>
        <div class="window-body">
          <form action="" method="POST">   
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="text" placeholder="Email" />
            <textarea name="text" placeholder="Message"></textarea>
            
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
    `;
  }
}
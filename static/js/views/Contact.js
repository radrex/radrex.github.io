import BaseView from "./BaseView.js";

export default class extends BaseView {
  constructor(params) {
    super(params);
    this.setTitle('Contact | Radostin Stoychev');
  }

  async renderHtml(targetElement, data) {
    targetElement.innerHTML = `
      <h1>Contact Me</h1>
      <h2>If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days. Or you can contact me via linkedin or telegram, links for which can be found at the end of the page.</h2>
    
      <section class="border-box">
        <h3>Status</h3>
        <h4>Available</h4>
        <p>I'm currently on a job hunt and taking on side projects.</p>
      </section>

      <section class="mac-window">
        <div class="buttons">
          <div class="mac-btn red"></div>
          <div class="mac-btn yellow"></div>
          <div class="mac-btn green"></div>
        </div>
        <div class="window-body">
          <form id="send-message-form" method="POST">
            <input id="invalid-name" name="name" type="text" placeholder="Name" />
            <input id="invalid-email" name="email" type="text" placeholder="Email" />
            <textarea id="invalid-message" name="message" placeholder="Message"></textarea>
            <input id="successfully-send" type="submit" value="Send Message" />
          </form>
        </div>
      </section>
    `;
  }
}
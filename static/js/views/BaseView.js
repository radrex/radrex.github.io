export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) { // Update document title on each selected page
    document.title = title;
  }

  async renderHtml(targetElement, data) {
    return "";
  }
}
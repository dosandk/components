export default class Pagination {
  constructor() {
    this.render();
  }

  getTemplate() {
    return `
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      `;
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy () {
    this.remove();
    this.element = null;
    this.subElements = {};
  }
}

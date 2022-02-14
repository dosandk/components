export default class MovieCard {
  constructor() {
    this.render(); // В DOM ще не додали компонент
    this.loadData();

    this.subElements = this.getSubElements();
  }

  async loadData () {
    const response = await fetch('http://demo.bootcamp.place/api/movies/?start=0&end=1');
    const json = await response.json();
    const [data] = json.data;

    for (const item of Object.entries(data)) {
      const [key, value] = item;

      if (this.subElements[key]) {
        this.subElements[key].innerHTML = value;
      }
    }
  }

  getSubElements () {
    const result = {};
    const subElements = [...this.element.querySelectorAll("[data-element]")];

    for (const item of subElements) {
      const key = item.dataset.element;

      result[key] = item;
    }

    return result;
  }

  getTemplate() {
    return `
        <div>
          <h1 data-element="title"></h1>
          <div data-element="overview"></div>
          <ul>
            <li data-element="homepage"></li>
            <li data-element="original_language"></li>
            <li data-element="popularity"></li>
          </ul>
        </div>
      `;
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper; // <--- DOM element
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

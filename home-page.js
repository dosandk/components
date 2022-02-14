import MovieCard from './movie-card.js';
import Pagination from './pagination.js';

export default class HomePage {
  constructor() {
    this.render();
    this.getSubElements();

    this.initializeComponents();
    this.renderComponents();
  }

  initializeComponents () {
    this.movieCard = new MovieCard();
    this.pagination = new Pagination();
  }

  renderComponents () {
    // loop
    this.subElements.movieCard.append(this.movieCard.element);
    this.subElements.pagination.append(this.pagination.element);
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `<div>
        <h1>This is HomePage component</h1>
        
        <div data-element="pagination"></div>
        <div data-element="movieCard"></div>
      </div>`;

    this.element = wrapper;
  }

  getSubElements () {
    const result = {};
    const subElements = this.element.querySelectorAll('[data-element]');

    for (const item of subElements) {
      const name = item.dataset.element;

      result[name] = item;
    }

    console.error('result', result);
    this.subElements = result;
  }
}

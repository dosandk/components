export default class AllMoviesPage {
  constructor() {
    this.render();
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `<div>
        <h1>This is AllMoviesPage component</h1>
      </div>`;

    this.element = wrapper;
  }
}

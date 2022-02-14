export default class CreateMoviePage {
  constructor() {
    this.render();
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `<div>
        <h1>This is CreateMoviePage component</h1>
      </div>`;

    this.element = wrapper;
  }
}

export default class MyCollectionPage {
  constructor() {
    this.render();
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `<div>
        <h1>This is MyCollectionPage component</h1>
      </div>`;

    this.element = wrapper;
  }
}

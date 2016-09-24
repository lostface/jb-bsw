import template from './search-panel.component.html';

class SearchPanelController {
  $onInit() {
    this.query = '';
  }

  handleOnSearchButtonClick() {
    this.onSearchButtonClick({ query: this.query });
  }
}

export default {
  template,
  controller: SearchPanelController,
  bindings: {
    onSearchButtonClick: '&',
  },
};

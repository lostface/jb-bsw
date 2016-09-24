import template from './search-panel.component.html';

class SearchPanelController {
  $onInit() {
    this.query = '';
  }

  isQueryEmpty() {
    return this.query === '';
  }

  handleOnSearchButtonClick() {
    this.onSearchButtonClick({ query: this.query });
  }

  handleOnClearButtonClick() {
    this.query = '';
    this.onClearButtonClick();
  }
}

export default {
  template,
  controller: SearchPanelController,
  bindings: {
    onSearchButtonClick: '&',
    onClearButtonClick: '&',
  },
};

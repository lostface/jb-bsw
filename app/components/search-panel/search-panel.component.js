import template from './search-panel.component.html';

class SearchPanelController {
  $onInit() {
    this.resetQuery();
  }

  isQueryEmpty() {
    return this.query === '';
  }

  resetQuery() {
    this.query = '';
  }

  triggerSearch() {
    this.onSearchTrigger({ query: this.query });
  }

  handleOnClearButtonClick() {
    this.resetQuery();
    this.onClearButtonClick();
  }

  handleOnSearchQueryKeydown($event) {
    const { keyCode } = $event;
    // ESC
    if (keyCode === 27) {
      this.resetQuery();
    // Enter
    } else if (keyCode === 13) {
      this.triggerSearch();
    }
  }
}

export default {
  template,
  controller: SearchPanelController,
  bindings: {
    onSearchTrigger: '&',
    onClearButtonClick: '&',
  },
};

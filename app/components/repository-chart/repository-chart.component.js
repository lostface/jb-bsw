import Chart from 'chart.js';

class RepositoryChartController {
  constructor($element) {
    'ngInject';
    this.$element = $element;
  }

  $onInit() {
    this.drawRepositoryStatsChart();
  }

  // INFO should be called only once
  drawRepositoryStatsChart() {
    const ctx = this.$element[0].querySelector('#repository-chart');
    const { stargazersCount, watchersCount, forksCount, openIssuesCount } = this.repository;

    const data = {
      datasets: [{
        data: [
          stargazersCount,
          forksCount,
          watchersCount,
          openIssuesCount,
        ],
        backgroundColor: [
          '#36a2eb',
          '#4bc0c0',
          '#ffce56',
          '#ff6384',
        ],
        label: 'Repository Stats'
      }],
      labels: [
        'Stargazers',
        'Forks',
        'Watchers',
        'Open Issues'
      ]
    };

    new Chart(ctx, {
      type: 'polarArea',
      data: data,
      options: {
        responsive: false
      },
    });
  }
}

export default {
  template: `
    <div id="repository-chart-container" class="repository-chart-container" >
      <h4>Repository Stats</h4>
      <canvas id="repository-chart" class="repository-chart" width="450" height="450"></canvas>
    </div>
  `,
  controller: RepositoryChartController,
  bindings: {
    repository: '<',
  },
};

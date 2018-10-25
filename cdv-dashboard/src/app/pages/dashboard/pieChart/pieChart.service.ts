import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'general.dashboard.pdata',
        stats: '300',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'general.dashboard.services',
        stats: '4',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'general.dashboard.linkedServices',
        stats: '4',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'general.dashboard.consents',
        stats: '5',
        icon: 'refresh',
      }
    ];
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NglTab } from 'ng-lightning';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public readonly selectedTab$: BehaviorSubject<string> = new BehaviorSubject<string>('main');

  HighchartsMain = Highcharts;
  linechart: any = {
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false
    },
    title: {
      text: '',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [
      {
      name: 'Бизнес задачи',
      colorByPoint: true,
      data: [
        {
          name: 'Добавить вложения: фото, файлы',
          y: 1,
          color: '#fe9000'
        },
        {
          name: 'Выбор из линейных справочников',
          y: 1,
          color: '#1bbc27'
        },
        {
          name: 'Поддержка полей из 2-уровневых справочников и объекта в Edit Mode',
          y: 1,
          color: '#1bbc27'
        },
        {
          name: 'Добавить комментарии (Записи) к Сообщению при редактировании',
          y: 1,
          color: '#1bbc27'
        },
        {
          name: 'Изменение статуса сообщения, согласно статусной схеме',
          y: 1,
          color: '#1bbc27'
        },
        {
          name: 'Поддержка новых полей из справочников в Журнале Сообщений',
          y: 1,
          color: '#1bbc27'
        },
        {
          name: 'Сортировка журнала сообщений ',
          y: 1,
          color: '#1bbc27'
        }
      ]
    },
  ]
  };

  HighchartsTech = Highcharts;
  linechartTech: any = {
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [
      {
      name: 'Тех. таски',
      colorByPoint: true,
      data: [
        {
          name: 'Поддержка Линейных справочников в ReadOnly и EditMode',
          y: 1,
          color: '#b6b7b8'
        },
        {
          name: 'Добавление полей "Причина" и "Описание причины" при Создании и в EditMode + ReadOnly',
          y: 1,
          color: '#b6b7b8'
        },
        {
          name: 'Загрузчик НСИ по классификаторам из Excel',
          y: 1,
          color: '#b6b7b8'
        },
        {
          name: 'Загрузчик ТМ и ЕО из Excel',
          y: 1,
          color: '#ed0000'
        },
        {
          name: 'Фильтрация справочников по профилю',
          y: 1,
          color: '#b6b7b8'
        },
      ]
    },
  ]
  };

  public changeTab(event: NglTab): void {
    this.selectedTab$.next(event.id);
  }
}

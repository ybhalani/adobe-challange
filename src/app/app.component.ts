import { Component } from '@angular/core';
import * as leads from '../assets/leads.json';
import { CommonUtil } from './shared/common.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dupes-finder';
  sampleData: any = leads;
  data: any;
  logs = [];
  deDuplicatedData: any;
  duplicateData: any;
  outputVisible: boolean = false;

  constructor() {
    this.data = CommonUtil.cloneDeep(this.sampleData.default);
  }

  findDupes() {
    this.logs = [];
    this.outputVisible = false;
    const leads = CommonUtil.cloneDeep(this.data.leads);

    this.logs.push({ text: `dupes finding started with _id key`, item: {} });
    const filterById = CommonUtil.checkDupesData(leads, this.logs, '_id');
    this.logs.push({ text: `dupes finding ended with _id key and duplicate founds:`, item: filterById.duplicateData });

    this.logs.push({ text: `dupes finding started with email key`, item: {} });
    const filterByEmail = CommonUtil.checkDupesData(filterById.uniqueData, this.logs, 'email');
    this.logs.push({ text: `dupes finding ended with email key`, item: filterByEmail.duplicateData });

    this.deDuplicatedData = {
      leads: filterByEmail.uniqueData
    }

    this.duplicateData = {
      leads: filterById.duplicateData.concat(filterByEmail.duplicateData)
    }
    this.outputVisible = true;

  }

  downloadSoureData() {
    this.downloadJson(this.duplicateData, 'SourceData');
  }

  downloadDeduplicatedData() {
    this.downloadJson(this.duplicateData, 'DeDuplicateData');
  }

  downloadDuplicateData() {
    this.downloadJson(this.duplicateData, 'DuplicateData');
  }

  downloadJson(data, fileName) {
    var jsonData = JSON.stringify(data, null, 2);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
    element.setAttribute('download', `${fileName}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}

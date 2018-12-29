import { Component } from '@angular/core';
import { stringify } from 'querystring';
// import { ObjModel } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  

export class AppComponent {

  ngOnInit() {

    this.loadData();
  }
  loadData() {
    var outarr = [];
    var data = {
      "id": {
        "required": true,
        "type": "string"
      },
      "name": "Aravind"
    }
    for (var key in data) {
      var chobj = data[key];
      var obj: ObjModel = {
        innerObj: {
          value: ""
        },
        name: "",
        showInnerParams: false,
        type: "",
        value: ""
      };
      obj.type = typeof (chobj);
      obj.name = key;
      obj.showInnerParams = false;
      obj.innerObj.value = "string"
      if (obj.type == "object") {
        obj.value = [];
        for (var chkey in chobj) {
          let valobj = {
            "type": typeof (chkey),
            "value": chobj[chkey],
            "name": chkey
          }
          obj.value.push(valobj);
        }
      }
      else {
        obj.value = chobj;
      }
      outarr.push(obj);
    }
    console.log(outarr);
  }
}

class ObjModel {
  type: any;
  name: string;
  showInnerParams: boolean;
  innerObj: InnerObj;
  value: any;
}
class InnerObj {
  value: string;
}

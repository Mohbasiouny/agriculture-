import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  dataP;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    debugger;
    this._http.get('http://127.0.0.1:8000/api/customer/').subscribe((data) => {
      this.dataP = data['results'];
    }, (err) => {
      console.log(err);
    });
  }

}

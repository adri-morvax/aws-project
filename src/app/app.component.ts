import { films, ListFilmsQuery, GetFilmsQuery } from './API.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createFilms } from 'src/graphql/mutations';
import { DataStore, API, graphqlOperation } from 'aws-amplify';
import { listFilms } from 'src/graphql/queries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'films-aws';
  public createForm: FormGroup;
  public films: films[] = [];
  public list: Array<films> = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      year: ['', Validators.required],
      realisator: ['', Validators.required],
    });
  }
  async ngOnInit() {
    const result = await API.graphql<any>(graphqlOperation(listFilms));
    this.films = result.data.listFilms.items;
  }
  public async onCreate(film: films) {
    const result = await API.graphql<any>(
      graphqlOperation(createFilms, { input: film })
    );
    this.createForm.reset();

    window.location.reload();
  }
}

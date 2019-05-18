import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {TodoService} from './service/todo.service';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryMock} from './mock/in-memory-mock';
import {MatCardModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {reducers} from './store/reducers';
import {TodoEffects} from './store/effects/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryMock),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

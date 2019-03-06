<% if (name) { %>
import { Injectable } from '@angular/core';

interface I<%= classify(name) %>Service {
  //
} 

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service implements I<%= classify(name) %>Service {
  constructor() {
    console.log(`My custom service -> <%= classify(name) %>`);
  }
}
<% } else { %>
  Why don't you give me your name with --name?
<% } %>
    
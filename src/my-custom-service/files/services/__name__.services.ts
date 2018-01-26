
<% if (name) { %>
import { Injectable } from '@angular/core';

interface I<%= classifyName %>Service {
  //
} 

@Injectable()
export class <%= classifyName %>Service implements I<%= classifyName %>Service {
  constructor() {
    console.log(`My custom service -> <%= classifyName %>`);
  }
}
<% } else { %>
  Why don't you give me your name with --name?
<% } %>
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ "Title: " + title }}</h2>
    <h3>{{ 2 * 5 + 10 }}</h3>
    <h4>{{ "Title: " + getTitle() }}</h4>
    <h5 title="{{ title }}">Move the mouse cursor here to see the title</h5>
  `
})
export class AppComponent {
  title = "Interpolation demonstration";

  getTitle(): string {
    return this.title;
  }
}

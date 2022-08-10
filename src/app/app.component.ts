import { Component } from '@angular/core';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tenax';
  URL_BASE: string = environment.URL_BASE;
  docs_url: string = this.URL_BASE + "/swagger-ui/index.html";

}

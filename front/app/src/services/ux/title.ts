import { Title } from '@angular/platform-browser';

export class MindsTitle {

  private counter: number;
  private sep = ' | ';
  private default_title = 'Planet Concourse Virtual Worlds | Social Impact Challenge Community | Blended Reality |  Purpose Driven Social Networking Hub | Cash Rewards | Cash-Back Social' +
      ' Shopping | Social Experiments | Social Challenges | S.I.M.S - Social Impact Management Systems |  Social Economies In Service To Life |   Events Community | Contests | Cultural Touchstone | Cash for Causes ';
  private text: string = '';

  static _(title: Title) {
    return new MindsTitle(title);
  }

  constructor(public title: Title) { }

  setTitle(value: string) {
    let title;

    if (value) {
      title = [value, this.default_title].join(this.sep);
    } else {
      title = this.default_title;
    }
    this.text = title;
    this.applyTitle();
  }


  setCounter(value: number) {
    this.counter = value;
    this.applyTitle();

  }

  applyTitle() {
    if (this.counter) {
      this.title.setTitle(`(${this.counter}) ${this.text}`);
    } else {
      this.title.setTitle(this.text);
    }

  }

}

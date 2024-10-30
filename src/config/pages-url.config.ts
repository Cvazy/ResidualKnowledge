class PAGES_CONFIG {
  private root = "/";

  HOME = this.root;
  ORDERS = `${this.root}orders`;
  GROUPS_LIST = `${this.root}groups`;
  REPORTS = `${this.root}reports`;
  SETTINGS = `${this.root}settings`;
}

export const PROJECT_PAGES = new PAGES_CONFIG();

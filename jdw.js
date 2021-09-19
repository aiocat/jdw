class JDWindow {
  constructor(options) {
    this.height = options?.height || 400;
    this.width = options?.width || 400;

    this.titlebarTitle = options?.titlebar?.title || "JDW";
    this.titlebarHeight = options?.titlebar?.height || 20;

    this.__window = document.createElement("div");
    this.__titleBar = document.createElement("div");
    this.__titleBarTitleElement = document.createElement("p");
    this.__titleBarTitleElement.style.display = "inline-block";

    this.__window.style.margin = "0";
    this.__window.style.position = "absolute";
    this.__titleBar.style.margin = "0";
    this.__titleBar.style.position = "relative";
    this.__titleBarTitleElement.style.margin = "0";
  }

  async windowCss(css) {
    this.__window.style = css;
  }

  async titleBarCss(css) {
    this.__titleBar.style = css;
  }

  async draw() {
    this.__window.style.height = `${this.height}px`;
    this.__window.style.width = `${this.width}px`;

    this.__titleBar.style.width = "100%";
    this.__titleBar.style.height = `${this.titlebarHeight}px`;
    this.__titleBarTitleElement.innerText = this.titlebarTitle;

    this.__titleBar.appendChild(this.__titleBarTitleElement);
    this.__window.appendChild(this.__titleBar);
    document.body.appendChild(this.__window);
  }
}

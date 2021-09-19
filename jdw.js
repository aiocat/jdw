class JDWindow {
  constructor(options) {
    this.height = options?.height || 400;
    this.width = options?.width || 400;

    this.titlebarTitle = options?.titlebar?.title || "JDW";
    this.titlebarHeight = options?.titlebar?.height || 20;

    this.__window = document.createElement("div");
    this.__titleBar = document.createElement("div");
    this.__titleBarTitleElement = document.createElement("p");

    this.__rightDiv = document.createElement("span")
    this.__rightDiv.style.float = "right"

    this.__titleBarCloseBtn = document.createElement("button");
    this.__titleBarCloseBtn.innerText = "X"
    this.__titleBarCloseBtn.onclick = () => this.__window.remove()
  }

  __prepareWindows() {
    this.__titleBarTitleElement.style.display = "inline-block";
    this.__window.style.margin = "0";
    this.__window.style.position = "absolute";
    this.__titleBar.style.margin = "0";
    this.__titleBar.style.position = "relative";
    this.__titleBarTitleElement.style.margin = "0";
  }

  windowCss(css) {
    this.__window.style = css;
  }

  titleBarCss(css) {
    this.__titleBar.style = css;
  }

  titleCss(css) {
    this.__titleBarTitleElement.style = css
  }

  closeButtonCss(css) {
    this.__titleBarCloseBtn.style = css
  }

  setCloseButtonContent(content) {
    this.__titleBarCloseBtn.innerText = content
  }

  draggable() {
    let pos1 = 0,
      pos2 = 0,
      posX = 0,
      posY = 0;

    var windowElement = this.__window;

    this.__titleBar.onmousedown = (e) => {
      e = e || window.event;
      e.preventDefault();
      posX = e.clientX;
      posY = e.clientY;

      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };

      document.onmousemove = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = posX - e.clientX;
        pos2 = posY - e.clientY;
        posX = e.clientX;
        posY = e.clientY;
        windowElement.style.top = windowElement.offsetTop - pos2 + "px";
        windowElement.style.left = windowElement.offsetLeft - pos1 + "px";
      };
    };
  }

  resizable(resizeValue) {
    ["both", "horizontal", "vertical"].indexOf(resizeValue) !== -1 ?
      this.__window.style.resize = resizeValue
    :
      this.__window.style.resize = "both"

    this.__window.style.overflow = "auto";
  }

  draw() {
    this.__prepareWindows();

    this.__rightDiv.appendChild(this.__titleBarCloseBtn)

    this.__window.style.height = `${this.height}px`;
    this.__window.style.width = `${this.width}px`;

    this.__titleBar.style.width = "100%";
    this.__titleBar.style.height = `${this.titlebarHeight}px`;
    this.__titleBarTitleElement.innerText = this.titlebarTitle;

    this.__titleBar.append(this.__titleBarTitleElement, this.__rightDiv);
    this.__window.appendChild(this.__titleBar);
    document.body.appendChild(this.__window);
  }
}

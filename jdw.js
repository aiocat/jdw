/**
 * Main class for the window.
 * @param {object} options - The window options.
 */
class JDWindow {
  constructor({ height, width, titlebar, runBeforeClose }) {
    // Create window, titlebar, title, close button. Also edit settings
    this.height = height || 400;
    this.width = width || 400;

    this.titlebarTitle = titlebar?.title || "JDW";
    this.titlebarHeight = titlebar?.height || 20;

    this.__window = document.createElement("div");
    this.__app = document.createElement("div");
    this.__titleBar = document.createElement("div");
    this.__titleBarTitleElement = document.createElement("p");

    this.__titleBarCloseBtn = document.createElement("button");
    this.__titleBarCloseBtn.innerText = "X";
    this.__titleBarCloseBtn.onclick = () => {
      if (runBeforeClose) {
        runBeforeClose() === true ? this.__window.remove() : 0;
      } else {
        this.__window.remove();
      }
    };
  }

  /** Prepare windows. */
  __prepareWindows() {
    this.__titleBarTitleElement.style.display = "inline-block";
    this.__titleBarTitleElement.style.margin = "0";

    this.__window.style.margin = "0";
    this.__window.style.position = "absolute";

    this.__titleBar.style.margin = "0 auto";
    this.__titleBar.style.position = "relative";
    this.__titleBar.style.display = "flex";
    this.__titleBar.style.justifyContent = "space-between";
    this.__titleBar.style.alignItems = "center";

    this.__app.style.margin = "0 auto";
    this.__app.style.position = "relative";
    this.__app.style.margin = "0";
    this.__app.style.maxHeight = `${this.height - this.titlebarHeight}px`;
  }

  /**
   * Edit window css
   * @param {string} css - The css for the window.
   */
  windowCss(css) {
    this.__window.style = css;
  }

  /**
   * Edit app css
   * @param {string} css - The css for the app.
   */
  appCss(css) {
    this.__app.style = css;
  }

  /**
   * Edit title bar css
   * @param {string} css - The css for the title bar.
   */
  titleBarCss(css) {
    this.__titleBar.style = css;
  }

  /**
   * Edit title css
   * @param {string} css - The css for the title.
   */
  titleCss(css) {
    this.__titleBarTitleElement.style = css;
  }

  /**
   * Edit close button css
   * @param {string} css - The css for the close button.
   */
  closeButtonCss(css) {
    this.__titleBarCloseBtn.style = css;
  }

  /**
   * Edit close button content
   * @param {string} content - The new content for the close button.
   */
  setCloseButtonContent(content) {
    this.__titleBarCloseBtn.innerText = content;
  }

  /** Make the window draggable. */
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

  /**
   *  Make the window resizable.
   * @param {string} resizeValue - The resize option for the window. Can be "both", "horizontal" or "vertical".
   */
  resizable(resizeValue) {
    ["both", "horizontal", "vertical"].indexOf(resizeValue) !== -1
      ? (this.__window.style.resize = resizeValue)
      : (this.__window.style.resize = "both");

    this.__window.style.overflow = "auto";
  }

  /** Make the window scrollable. */
  scrollable() {
    this.__app.style.overflow = "auto";
  }

  /**
   * Add an element to the app.
   * @param {any} element - The element will be added.
   */
  addElement(element) {
    this.__app.appendChild(element);
  }

  /**
   *  Add one or more element to the app.
   * @param {...any} elements - The element(s) will be added.
   */
  addElements(...elements) {
    this.__app.append(...elements);
  }

  /**
   * Draw the window.
   * @param {int} posX - Left position that window will be spawned at (px).
   * @param {int} posY - Top position that window will be spawned at (px).
   */
  draw(posX, posY) {
    this.__prepareWindows();

    this.__window.style.height = `${this.height}px`;
    this.__window.style.width = `${this.width}px`;
    this.__window.style.left = `${posX}px`;
    this.__window.style.top = `${posY}px`;

    this.__titleBar.style.width = "100%";
    this.__titleBar.style.height = `${this.titlebarHeight}px`;
    this.__titleBarTitleElement.innerText = this.titlebarTitle;

    this.__titleBar.append(
      this.__titleBarTitleElement,
      this.__titleBarCloseBtn
    );
    this.__window.append(this.__titleBar, this.__app);
    document.body.appendChild(this.__window);
  }
}

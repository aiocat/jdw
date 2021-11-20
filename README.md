# JDW (Javascript Dynamic Windows)

JWD is a minimal tool for creating awesome dynamic windows in your web page.

## CDN Url(s)

- https://cdn.jsdelivr.net/gh/aiocat/jdw/jdw.min.js (Testing)
  - https://cdn.jsdelivr.net/gh/aiocat/jdw@0.0.1/jdw.min.js (Stable Release)

## Example

An example code to show JDW's utils.

```js
let jdwindow = new JDWindow({
  width: 600, // 600px.
  height: 400, // 400px.
  titlebar: {
    title: "Window", // Window title will be "Window".
    height: 25, // Titlebar height.
  },
});

let btn = document.createElement("button"); // Create a new element to append.
btn.innerText = "Hello!";
jdwindow.addElement(btn); // Add element to the window.

jdwindow.windowCss("border: 2px solid #000; background-color: #333;"); // Change window CSS.
jdwindow.appCss("background-color: #222;"); // Change app CSS.
jdwindow.titleBarCss(
  'background-color: #555; font-family: "Noto Sans JP", sans-serif;'
); // Change title bar CSS.
jdwindow.titleCss("font-size: 24px; font-weight: 800; padding-left: 10px;"); // Change title CSS.
jdwindow.closeButtonCss(
  "background-color: #bf616a; border-radius: 300px; padding: 8px; border: 0px solid #000; outline: none; margin-right: 10px;"
); // Change close button CSS.
jdwindow.setCloseButtonContent(""); // Edit close button content (Default "X").
jdwindow.draggable(); // Make the window draggable.
jdwindow.scrollable(); // Make the window scrollable.
jdwindow.resizable(); // Make the window resizable.
jdwindow.draw(0, 0); // Draw window with at 9px left and 0px top.
```

### Result

![](https://i.imgur.com/GNqJrn7.gif)

Check https://i.imgur.com/BqtLn58.mp4 for better quality.

## Found a bug? Got an error?

- Please create a new issue on gitlab repository if you found a bug or an error.

## Contributing

If you want to contribute this project:

- Make sure you add the comments for your codes.
- Please do not something useless.

## Authors

- [Aiocat](https://gitlab.com/aiocat)

## License

This project is distributed under MIT license.

## Project status

Under development.

import './style.css';
import * as PIXI from 'pixi.js';

(async() => {
  // Application
  const app = new PIXI.Application();

  await app.init({
    background: 'royalblue'
  });

  app.canvas.id = 'app-canvas';

  document.body.appendChild(app.canvas);
})();


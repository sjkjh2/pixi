import './style.css';
import {
  Application,
  Assets,
  Sprite,
  Graphics,
} from 'pixi.js';

export default async function main() {
  // Application
  const app = new Application();

  await app.init({
    background: 'royalblue',
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
  });

  app.canvas.id = 'app-canvas';
  document.body.appendChild(app.canvas);

  const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);

  bunny.x = 0;
  bunny.y = app.screen.height / 2;
  bunny.anchor.set(0.5);
  bunny.scale.set(2);

  let n = 0;

  app.ticker.add((delta) => {
    bunny.x += 2 * delta.deltaTime;
    bunny.rotation += delta.deltaTime * 0.1;
    if (bunny.x > app.screen.width) {
      bunny.x = 0;
    }

  });
};


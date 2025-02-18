// Sprite Animation
import './style.css';
import {
  Application,
  Assets,
  AnimatedSprite,
  Rectangle,
  Texture,
} from 'pixi.js';

export default async function main() {
  // Application
  const app = new Application();

  await app.init({
    background: 'royalblue',
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true
  });

  app.canvas.id = 'app-canvas';
  document.body.appendChild(app.canvas);

  const texture = await Assets.load('/images/dead.png');
  // const frames = [
  //   // 5 frames
  //   new Texture({
  //     source: texture,
  //     frame : new Rectangle(0, 0, 96, 96)
  //   }),
  //   new Texture({
  //     source: texture,
  //     frame : new Rectangle(96, 0, 96, 96)
  //   }),
  //   new Texture({
  //     source: texture,
  //     frame : new Rectangle(192, 0, 96, 96)
  //   }),
  //   new Texture({
  //     source: texture,
  //     frame : new Rectangle(288, 0, 96, 96)
  //   }),
  //   new Texture({
  //     source: texture,
  //     frame : new Rectangle(384, 0, 96, 96)
  //   }),
  // ]
  const frames = [];
  for (let i = 0; i < 5; i++) {
    const frame = new Texture({
      source: texture,
      frame : new Rectangle(i * 96, 0, 96, 96)
    });
    frames.push(frame);
  }
  const zombie = new AnimatedSprite(frames);

  app.stage.addChild(zombie);

  zombie.animationSpeed = 0.1;
  zombie.loop = false;
  // zombie.play();

  zombie.eventMode = 'static';
  zombie.cursor = 'pointer';
  zombie.on('pointertap', () => {
    // zombie.play();
    zombie.gotoAndPlay(0);
  });
  zombie.onComplete = () => {
    zombie.gotoAndStop(0);
  }
};


import * as BABYLON from '@babylonjs/core';
import './style.css';
import downloadScene from './downloadScene';

const canvas = document.getElementById('renderCanvas');
const downloadButton = document.getElementById('downloadButton');
const engine = new BABYLON.Engine(canvas);

var createScene = function () {
  var scene = new BABYLON.Scene(engine);
  scene.createDefaultCameraOrLight(true, false, true);
  const box = new BABYLON.MeshBuilder.CreateBox();
  return scene;
};

var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

downloadButton.addEventListener('click', () => {
  downloadScene('example', scene);
});

// window.addEventListener('resize', function() {
//   engine.resize();
// });

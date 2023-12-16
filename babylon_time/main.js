import * as BABYLON from '@babylonjs/core';
import './style.css';

const canvas = document.getElementById('renderCanvas');
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

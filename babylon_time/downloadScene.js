import * as BABYLON from '@babylonjs/core';

function downloadScene(filename, scene) {
  let objectUrl;
  if (objectUrl) {
    window.URL.revokeObjectURL(objectUrl);
  }

  const serializedScene = BABYLON.SceneSerializer.Serialize(scene);

  const strScene = JSON.stringify(serializedScene);

  if (filename.toLowerCase().lastIndexOf(".babylon") !== filename.length - 8 || filename.length < 9) {
    filename += ".babylon";
  }

  const blob = new Blob([strScene], { type: "octet/stream" });

  // turn blob into an object URL; saved as a member, so can be cleaned out later
  objectUrl = (window.webkitURL || window.URL).createObjectURL(blob);

  const link = window.document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  const click = document.createEvent("MouseEvents");
  click.initEvent("click", true, false);
  link.dispatchEvent(click);
}

export default downloadScene;
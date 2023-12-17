let objectUrl;
function doDownload(filename, mesh) {
  if (objectUrl) {
    window.URL.revokeObjectURL(objectUrl);
  }

  const serializedMesh = BABYLON.SceneSerializer.SerializeMesh(mesh);

  const strMesh = JSON.stringify(serializedMesh);

  if (filename.toLowerCase().lastIndexOf(".babylon") !== filename.length - 8 || filename.length < 9) {
    filename += ".babylon";
  }

  const blob = new Blob([strMesh], { type: "octet/stream" });

  objectUrl = (window.webkitURL || window.URL).createObjectURL(blob);

  const link = window.document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  const click = document.createEvent("MouseEvents");
  click.initEvent("click", true, false);
  link.dispatchEvent(click);
}
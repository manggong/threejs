// Find the latest version by visiting https://cdn.skypack.dev/three.

import * as THREE from 'https://cdn.skypack.dev/three@0.126.1';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight); // 보여 줄 공간을 잡는다.
renderer.setPixelRatio(devicePixelRatio); // 애니메이션 수행 시 픽셀 깨짐 보정
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(boxGeometry, material);
scene.add(mesh);

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  planeMesh.rotation.x += 0.01;
}

animate();

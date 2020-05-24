/////////////////////////////////////////////////////////
// global variables
var camera, renderer;
var agent1;
var agent2;
var Lighthouse = new THREE.Object3D();
var modelName = "lighthouse";

// program starts here ...
init();
animate();

function init() {

  initThree();
  
  //scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 500;
  camera.position.y = 400;


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  /////////////////////////////////////////////////////////////////////

  
  // scene grid [-400,400]x[-400,400]
  var gridXZ = new THREE.GridHelper(800, 80, 'red', 'white');
  scene.add(gridXZ);

  // in scene.js
  sceneFromJSON ( );  // using LevelDesigner
  
  //////////////////////////////////////////////////////////////////////////	
  	let size = 10; // halfsize of agent
//    agent = new Agent(new THREE.Vector3(-400 + 400 * Math.random(), 0, -400 + 400 * Math.random()), mesh);
    agent1 = new Agent(new THREE.Vector3(50,0,-50), size);
	
	agent2 = new Agent(new THREE.Vector3(-60,0,150), size);
	
	
	//readModel('lighthouse', 40);
	//Lighthouse.position.set(209.52434509802094,-1.584297207979961e-14,71.3504031550267);

}


function animate() {

  agent1.update(0.01)
  agent2.update(0.01)
  
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agent1)} );
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agent2)} );
  
	if(scene.targets.length > 0){
		requestAnimationFrame(animate);
	}

	else if(scene.targets.length == 0){
		setRandomTargets();
		requestAnimationFrame(animate);
	}  

/*  if (scene.targets.length > 0)
  	requestAnimationFrame(animate);
  else
  	alert ('game over')*/

  render();
}

function render() {
  renderer.render(scene, camera);
}


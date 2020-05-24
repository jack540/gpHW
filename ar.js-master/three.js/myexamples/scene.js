function sceneFromJSON () {

  arWorldRoot.obstacles = []
	arWorldRoot.obstacles.push (new Obstacle (new THREE.Vector3 (  1.5, 0,  1.5), 30*A))
	arWorldRoot.obstacles.push (new Obstacle (new THREE.Vector3 ( -1.5, 0, -1.5), 30*A))
	arWorldRoot.obstacles.push (new Obstacle (new THREE.Vector3 (  1.5, 0, -1.5), 30*A))
	arWorldRoot.obstacles.push (new Obstacle (new THREE.Vector3 ( -1.5, 0,  1.5), 30*A))
	arWorldRoot.obstacles.push (new Obstacle (new THREE.Vector3 (    0, 0,    0), 30*A))

  arWorldRoot.targets = []
	arWorldRoot.targets.push (new Target (1, new THREE.Vector3 (-1.75,0,0.5) ));

}

function setRandomTargets(){
		
		while(1) {
			RT = true;
			max =  350;
			min = -350;			
			x = (Math.floor(Math.random()*(max-min+1))+min)*A;
			z = (Math.floor(Math.random()*(max-min+1))+min)*A;
				
			var aa = new THREE.Vector3( x, 0, z );
			let obs = arWorldRoot.obstacles;
			obs.forEach (function (item, index, arr) {
				
				var dis = aa.distanceTo( item.mesh.position);
				if(dis < 0.5) {
					RT = false;
				}
			})
			if(RT == true) break;
		}
		arWorldRoot.targets.push (new Target (0, new THREE.Vector3 ( x, 0, z) ));		 
}

class Target {
	constructor (id, pos) {
		this.id = id;
		this.pos = pos.clone();
		this.mesh = new THREE.Mesh (new THREE.CylinderGeometry (8*A,8*A,3*A,20*A), 
		    new THREE.MeshBasicMaterial ({color:'#FF8000'}));
		this.found = false;  // default: not found yet
		this.mesh.position.copy (pos)
		arWorldRoot.add (this.mesh);
	}
	setFound (agent) {
		this.found = true;
		this.mesh.material.visible = false;
		postMessage (agent, 'TARGET reached');
		
		agent.score += 10;			
		
		// remove from scene.targets
		for (let i = 0; i < arWorldRoot.targets.length; i++) {
			if (arWorldRoot.targets[i].id === this.id) arWorldRoot.targets.splice (i, 1)
		}
		
	}
	
}

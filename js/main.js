var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 50, 50 );
camera.lookAt( 0, 0, 0 );        
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
controls = new THREE.OrbitControls( camera, renderer.domElement );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

//var foambox = new FoamBox();

function onDocumentMouseDown(event) {
    event.preventDefault();

    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    meshObjects = [mesh, mesh2, mesh3]; // three.js objects with click handlers we are interested in
     
    var intersects = raycaster.intersectObjects(meshObjects);

    if (intersects.length > 0) {
        intersects[0].object.callback();
    }

}
document.addEventListener('mousedown', onDocumentMouseDown, false);
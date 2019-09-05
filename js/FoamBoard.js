export default class FoamBoard {
    constructor(width, height) {
        this.boxGeometry = new THREE.BoxGeometry( width, height, 3 ); // WIDTH, HEIGHT, DEPTH
        var sideTexture = new THREE.TextureLoader().load( 'img/FoamBoardSide.bmp' );
        this.boxMaterials = 
            [
                new THREE.MeshBasicMaterial( { color: 0x808080 } ), // RIGHT
                new THREE.MeshBasicMaterial( { color: 0x808080 } ), // LEFT
                new THREE.MeshBasicMaterial( { color: 0x808080 } ), // TOP
                new THREE.MeshBasicMaterial( { color: 0x808080 } ), // BOTTOM
                new THREE.MeshBasicMaterial( { color: 0xf0f0f0 } ), // FRONT
                new THREE.MeshBasicMaterial( { color: 0xf0f0f0 } ), // BACK
            ];
        this.boxMesh = new THREE.Mesh( this.boxGeometry, this.boxMaterials );
        this.boxMesh.callback = function() {
            console.log('X');
        };
        this.edgeGeometry = new THREE.EdgesGeometry( this.boxGeometry );
        this.edgeLine = new THREE.LineSegments( this.edgeGeometry, new THREE.LineBasicMaterial( {color: 0x000000 } ) );
    }
    position(x,y,z) {
        this.boxMesh.position.set(x,y,z);
        this.edgeLine.position.set(x,y,z);
    }
    rotation(x,y,z) {
        x = x / 180 * Math.PI;
        y = y / 180 * Math.PI;
        z = z / 180 * Math.PI;
        this.boxMesh.rotation.set(x, y,z );
        this.edgeLine.rotation.set(x,y,z);
    }
}
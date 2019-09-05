module.exports = class FoamBox {
    constructor() {
        this.foamBoards = [];

        var fbFloor = new FoamBoard(40,60);
        fbFloor.position(0,0,0);
        fbFloor.rotation(90,0,0);
        this.foamBoards.add(fbFloor);
        scene.add( fbFloor.boxMesh );
        scene.add( fbFloor.edgeLine );

        var fbBack = new FoamBoard(40,20);
        fbBack.position(0,8.5,-31.5);
        fbBack.rotation(0,0,0);
        scene.add( fbBack.boxMesh );
        scene.add( fbBack.edgeLine );

        var fbFront = new FoamBoard(40,20);
        fbFront.position(0,8.5,31.5);
        fbFront.rotation(0,0,0);
        scene.add( fbFront.boxMesh );
        scene.add( fbFront.edgeLine );

        var fbLeft = new FoamBoard(66,20);
        fbLeft.position(-21.5,8.5,0);
        fbLeft.rotation(0,90,0);
        scene.add( fbLeft.boxMesh );
        scene.add( fbLeft.edgeLine );

        var fbRight = new FoamBoard(66,20);
        fbRight.position(21.5,8.5,0);
        fbRight.rotation(0,90,0);
        scene.add( fbRight.boxMesh );
        scene.add( fbRight.edgeLine );
    }
}
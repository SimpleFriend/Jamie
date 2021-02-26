
var allSystemsReady = false;
var app;

function m(bone) { return app.human.skeleton.bones[bone].quaternion; }

var reyeZero, leyeZero;

var wantedTemporalis = 0, devTemporalisLeft = 0, devTemporalisRight = 0;
var wantedSmile = 0, devSmile = 0, curSmile = 0;

setInterval(function () {
    var wantedTemporalis = Math.random() * 0.16 - 0.08;
    wantedTemporalisL = wantedTemporalis - Math.random() * 0.02;
    wantedTemporalisR = wantedTemporalis - Math.random() * 0.02;
    wantedSmile = Math.random() * 0.2 - 0.1;
    //console.log("wantedTemporalis", wantedTemporalis);
}, 3000);

setInterval(function () {

    var sec = Math.abs((new Date()).getSeconds() - 30) - 15;
    app.controls.autoRotateSpeed = sec / 30;

}, 1000);

function l() {

    if (!allSystemsReady) {
        app.human.position.y = 7;
        return;
    }

    let devX = ((app.human.skeleton.bones[208].quaternion.x + app.human.skeleton.bones[202].quaternion.x) / 2 - (app.human.skeleton.bones[50].quaternion.x + app.human.skeleton.bones[40].quaternion.x)) / 20;
    let devY = ((app.human.skeleton.bones[208].quaternion.y + app.human.skeleton.bones[202].quaternion.y) / 2 - (app.human.skeleton.bones[50].quaternion.y + app.human.skeleton.bones[40].quaternion.y) / 2) / 20;

    app.human.skeleton.bones[50].quaternion.x = app.human.skeleton.bones[50].quaternion.x + devX / 4;
    app.human.skeleton.bones[50].quaternion.y = app.human.skeleton.bones[50].quaternion.y + devY / 2;
    app.human.skeleton.bones[40].quaternion.x = app.human.skeleton.bones[40].quaternion.x + devX / 2;
    app.human.skeleton.bones[40].quaternion.y = app.human.skeleton.bones[40].quaternion.y + devY / 4;

    //app.human.skeleton.bones[208].updateMatrixWorld();
    //app.human.skeleton.bones[202].updateMatrixWorld();

    let reyePos = app.human.skeleton.bones[208].getWorldPosition();
    let leyePos = app.human.skeleton.bones[202].getWorldPosition();

    let camPos = app.camera.getWorldPosition();
    let rDir = {
        x: camPos.x - reyePos.x,
        y: camPos.y - reyePos.y,
        z: camPos.z - reyePos.z,
    }
    let lDir = {
        x: camPos.x - leyePos.x,
        y: camPos.y - leyePos.y,
        z: camPos.z - leyePos.z,
    }

    app.human.skeleton.bones[208].lookAt(rDir);
    app.human.skeleton.bones[202].lookAt(lDir);

    app.human.skeleton.bones[208].quaternion.x -= app.human.skeleton.bones[50].quaternion.x * 1.1;
    app.human.skeleton.bones[208].quaternion.y -= app.human.skeleton.bones[50].quaternion.y * 1.1;
    app.human.skeleton.bones[202].quaternion.x -= app.human.skeleton.bones[50].quaternion.x * 1.1;
    app.human.skeleton.bones[202].quaternion.y -= app.human.skeleton.bones[50].quaternion.y * 1.1;

    app.human.skeleton.bones[208].quaternion.x -= app.human.skeleton.bones[40].quaternion.x * 1.1;
    app.human.skeleton.bones[208].quaternion.y -= app.human.skeleton.bones[40].quaternion.y * 1.1;
    app.human.skeleton.bones[202].quaternion.x -= app.human.skeleton.bones[40].quaternion.x * 1.1;
    app.human.skeleton.bones[202].quaternion.y -= app.human.skeleton.bones[40].quaternion.y * 1.1;
    /*
            if (app.human.skeleton.bones[208].quaternion.x < -0.2) app.human.skeleton.bones[208].quaternion.x = -0.2;
            if (app.human.skeleton.bones[208].quaternion.x >  0.2) app.human.skeleton.bones[208].quaternion.x =  0.2;
            if (app.human.skeleton.bones[208].quaternion.y < -0.2) app.human.skeleton.bones[208].quaternion.y = -0.2;
            if (app.human.skeleton.bones[208].quaternion.y >  0.2) app.human.skeleton.bones[208].quaternion.y =  0.2;
    
            if (app.human.skeleton.bones[202].quaternion.x < -0.2) app.human.skeleton.bones[202].quaternion.x = -0.2;
            if (app.human.skeleton.bones[202].quaternion.x >  0.2) app.human.skeleton.bones[202].quaternion.x =  0.2;
            if (app.human.skeleton.bones[202].quaternion.y < -0.2) app.human.skeleton.bones[202].quaternion.y = -0.2;
            if (app.human.skeleton.bones[202].quaternion.y >  0.2) app.human.skeleton.bones[202].quaternion.y =  0.2;
    */
    if (app.human.skeleton.bones[208].quaternion.x < -0.2 || app.human.skeleton.bones[208].quaternion.x > 0.1 || app.human.skeleton.bones[208].quaternion.y < -0.15 || app.human.skeleton.bones[208].quaternion.y > 0.15
        || app.human.skeleton.bones[202].quaternion.x < -0.2 || app.human.skeleton.bones[202].quaternion.x > 0.1 || app.human.skeleton.bones[202].quaternion.y < -0.15 || app.human.skeleton.bones[202].quaternion.y > 0.15) {
        app.human.skeleton.bones[208].quaternion.x = app.human.skeleton.bones[208].quaternion.x / 10;
        app.human.skeleton.bones[208].quaternion.y = app.human.skeleton.bones[208].quaternion.y / 10;
        app.human.skeleton.bones[202].quaternion.x = app.human.skeleton.bones[202].quaternion.x / 10;
        app.human.skeleton.bones[202].quaternion.y = app.human.skeleton.bones[202].quaternion.y / 10;
    }

    // temporalis

    devTemporalisLeft = (wantedTemporalisL - app.human.skeleton.bones[138].quaternion.x) / 15 / 3;
    devTemporalisRight = (wantedTemporalisR - app.human.skeleton.bones[140].quaternion.x) / 15 / 3;
    devSmile = (wantedSmile - curSmile) / 10 / 3;

    app.human.skeleton.bones[138].quaternion.x += devTemporalisLeft;
    app.human.skeleton.bones[140].quaternion.x += devTemporalisRight;
    curSmile += devSmile;

    app.human.skeleton.bones[138].quaternion.y = -Math.max(0, app.human.skeleton.bones[138].quaternion.x);
    app.human.skeleton.bones[140].quaternion.y = Math.max(0, app.human.skeleton.bones[140].quaternion.x);

    // mouth
    app.human.skeleton.bones[128].quaternion.y = -(curSmile / 2);
    app.human.skeleton.bones[126].quaternion.y = (curSmile / 2);
    app.human.skeleton.bones[128].quaternion.x = -(curSmile / 1.5);
    app.human.skeleton.bones[126].quaternion.x = -(curSmile / 1.5);
    app.human.skeleton.bones[128].quaternion.z = (curSmile / 3);
    app.human.skeleton.bones[126].quaternion.z = -(curSmile / 3);

    // closing eyes
    app.human.skeleton.bones[204].quaternion.x = -(curSmile / 7) + app.human.skeleton.bones[202].quaternion.x / 2;
    app.human.skeleton.bones[210].quaternion.x = -(curSmile / 7) + app.human.skeleton.bones[208].quaternion.x / 2;
    app.human.skeleton.bones[206].quaternion.x = (curSmile / 11);
    app.human.skeleton.bones[212].quaternion.x = (curSmile / 11);

}

// load some json data first
var loadUrls = {
    modeling_sliders: 'node_modules/makehuman-data/src/json/sliders/modeling_sliders.json',
    resources: 'node_modules/makehuman-data/public/data/resources.json'
}
var loader = new THREE.XHRLoader();
Promise.all(
    _.values(loadUrls).map((url) => new Promise((resolve, reject) =>
        loader.load(
            url,
            (data) => resolve(JSON.parse(data))
        )
    )
    )
)
    .then(data => {
        var keys = Object.keys(loadUrls)
        for (var i = 0; i < keys.length; i++) {
            key = keys[i]
            window[key] = data[i]
        }
    })
    .then(() => {
        // start the app
        resources.baseUrl = "node_modules/makehuman-data/public/data/"
        app = new App(resources, modeling_sliders)
        app.init()
        app.animate();

    })
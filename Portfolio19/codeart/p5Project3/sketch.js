
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/



// global manager object
var mgr;
var clubMusic;

function preload()
{
  clubMusic = loadSound("assets/361425__wertstahl__some-club-tech-dance-with-strobe-tension-atmo-music-fragment.wav");
}

function setup() {
    createCanvas(1000, 1000);
    console.log(hell);
    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (bar);
    mgr.addScene (characterSelect);
    mgr.addScene (aboutScreen);
    mgr.addScene (alchoholPoisoning);
    mgr.addScene (satisfied);
    mgr.showNextScene();
}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();

}

// function mousePressed()
// {
//    // pass the mousePressed message into the SceneManager
//   mgr.mousePressed();
//}

// function keyPressed()
// {
//     // You can optionaly handle the key press at global level...
//     // switch(key)
//     // {
//     //     case '1':
//     //         mgr.showScene( scene1 );
//     //         break;
//     //     case '2':
//     //         mgr.showScene( scene2 );
//     //         break;
//     //     case '3':
//     //         mgr.showScene( scene3 );
//     //         break;
//     // }
//
//     // ... then dispatch via the SceneManager.
//     mgr.keyPressed();
//}

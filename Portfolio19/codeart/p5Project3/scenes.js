
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var shadow;
var barA;
var hell = "hi";


//Character Selection
var grittyBool;
var lessGrittyBool;
var jadedBool;

var grittyImg;
var lessGrittyImg;
var jadedImg;
var ld50Img;

//Status Bars
var funBar = 1;
var esteemBar = 1;


////////////////////////////// 1 /////////////////
function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      start = createButton("Start");
      start.position(width*1/3 -100,height/2);
      start.style('font-size', '30px')
      start.mousePressed(startSim);
      start.size(300);

      about = createButton("About");
      about.position(width*1/3 -100,height/2+100);
      about.mousePressed(startAbout);
      about.style('font-size','30px');
      about.size(300);
      //start.height(100);

      ld50Img = loadImage("assets/LD50040.png");

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        if(clubMusic.isPlaying())
        {
          clubMusic.stop();
        }
        //background("grey");
        textAlign(CENTER);

        start.show();
        about.show();
    }


    this.draw = function()
    {
      background("grey");
      image(ld50Img,width/2 -200,height/2 -175, ld50Img.width/1.5, ld50Img.height/1.5);


      fill(255);
      textSize(70);
      textAlign(CENTER);
      text("LD50-040's Drinking Simulator",width/2,height *1/3 - 100);

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);
        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    function startAbout()
    {
      start.hide();
      about.hide();
      mgr.showScene(aboutScreen);
    }

    function startSim()
    {
        start.hide();
        about.hide();
        mgr.showScene(characterSelect);
    }
}

///////////////////////  2  ////////////////////////

function bar()  {

    var fruity;
    var hard;
    var beer;

    var fruityImg;
    var hardImg;
    var beerImg;

    var gCol = color(124,49,102);
    var gColT = color(226, 167, 209);

    this.enter = function()
    {
      clubMusic.play();
      fruity.show();
      hard.show();
      beer.show();
    }

    this.setup = function()
    {
      fruity = createButton("Fruity");
      fruity.position(680,(height*1/3) + 300);
      fruity.style('font-size', '30px');
      fruity.style('background-color',gCol);
      fruity.style('color', gColT );
      fruity.style('border','none');
      fruity.mousePressed(addFunF);

      hard = createButton("Hard");
      hard.position(780,(height*1/3) + 300);
      hard.style('font-size', '30px');
      hard.style('background-color',gCol);
      hard.style('color', gColT );
      hard.style('border','none');
      hard.mousePressed(addFunH);

      beer = createButton("Beer")
      beer.position(880,(height*1/3) + 300);
      beer.style('font-size', '30px');
      beer.style('background-color',gCol);
      beer.style('color', gColT );
      beer.style('border','none');
      beer.mousePressed(addFunB);

      fruityImg = loadImage("assets/FruityDrink.png");
      hardImg = loadImage("assets/HardLiquor.png");
      beerImg = loadImage("assets/Beer.png");

      barA= createSprite(500, 500, width,height);
        var barAnim = barA.addAnimation("strobe", "assets/BarSceneFrame1.png","assets/BarSceneFrame12.png");

      shadow= createSprite(width/2-200,height/2+120,5,5);
        var shAnimation = shadow.addAnimation("idle","assets/idleFrame1.png","assets/idleFrame5.png" );
        shadow.addAnimation("run","assets/runFrame1.png","assets/runFrame6.png");
    }

    this.draw = function()
    {

        background("red");
        //rect(width/2, height/2, 10, curTime);
        drawSprites();
        image(fruityImg,550, (height*1/3) + 200, fruityImg.width/2, fruityImg.height/2);
        image(hardImg,650, (height*1/3) + 218, hardImg.width/2, hardImg.height/2);
        image(beerImg,750, (height*1/3) + 200, beerImg.width/2, beerImg.height/2);

        if (esteemBar >= 360)
        {
          console.log("You're Satisfied!")
          mgr.showScene(satisfied);
          funBar = 0;
          esteemBar = 0;
          fruity.hide();
          hard.hide();
          beer.hide();

        }
        if(funBar >= 670)
        {
          funBar = 0;
          esteemBar = 0;
          console.log("You Have Alchohol Poisoning =) !!!");
          mgr.showScene(alchoholPoisoning);
          fruity.hide();
          hard.hide();
          beer.hide();

        }
        if(mouseIsPressed)
          {
            shadow.changeAnimation("run");
          }
          else
          {
            shadow.changeAnimation("idle");
          }
          rect(950, height*2/3, 40, -funBar);
          rect(width/8, 10, esteemBar, 40);

          fill(255);
          textSize(25);
          textAlign(CENTER);
          text("Drunkeness",945,height*2/3 + 20);
          text("Enjoyment", width/8, 70);
    }

    function addFunF()
    {
      if (grittyBool = true && !lessGrittyBool && !jadedBool)
      {
        funBar += random(10,150);
        console.log(funBar);
        if (funBar >= 300)
        {
          esteemBar += random(20, 80);
        }
      }
      if (lessGrittyBool = true && !grittyBool && !jadedBool)
      {
        funBar += random(20,200);
        console,log(funBar);
        if (funBar >= 10)
        {
          esteemBar += random(50,80);
        }
      }
      if (jadedBool = true && !grittyBool && !lessGrittyBool)
      {
        funBar += random(20, 100)
        console.log(funBar);
        if (funBar >= 300)
        {
          esteemBar += random(10, 70);
        }
      }
    }

    function addFunH()
    {
      if (grittyBool = true && !lessGrittyBool && !jadedBool)
      {
        funBar += 100;
        console.log(funBar);
        if (funBar >= 50 || funBar <= 400)
        {
          esteemBar += random(30, 100);
        }
      }
      if (lessGrittyBool = true && !grittyBool && !jadedBool)
      {
        funBar += 200;
        if (funBar >=300 || funBar <= 500)
        {
          esteemBar += random(20, 60);
        }
      }
      if (jadedBool = true && !grittyBool && !lessGrittyBool)
      {
        funBar += 80;
        if (funBar >=100|| funBar <= 500)
        {
          esteemBar += random(20, 60);
        }
      }
    }

    function addFunB()
    {
      if (grittyBool = true && !lessGrittyBool && !jadedBool)
      {
        funBar += 20;
        console.log(funBar);
        if (funBar >= 100 || funBar <= 500)
        {
          esteemBar += 10;
        }
      }
      if (lessGrittyBool = true && !grittyBool && !jadedBool)
      {
        funBar += 30;
        console.log(funBar);
        if (funBar>= 200 || funBar <= 600)
        {
          esteemBar += 20;
        }
      }
      if (jadedBool = true && !grittyBool && !lessGrittyBool)
      {
        funBar+=10;
        console.log(funBar);
        if (funBar >=50 || funBar <=200)
        {
          esteemBar += 10;
        }
      }
    }

    this.keyPressed = function()
    {
      //console.log("woot");
    //  ghost.changeAnimation("stand");
        this.sceneManager.showNextScene();
    }



}

////////////////////////////// 3 /////////////////

function characterSelect() {

  var gritty;
  var lessGritty;
  var jaded;

  var gCol = color(124,49,102);
  var gColT = color(226, 167, 209);
  var lGCol = color(87,63,150);
  var lGColT = color(185, 173, 219);
  var jCol = color(26,81,62);
  var jColT = color(181, 226, 211);



  this.setup = function ()
  {
    grittyImg = loadImage("assets/Gritty.png");
    lessGrittyImg = loadImage("assets/LessGritty.png");
    jadedImg = loadImage("assets/JadedWithHand.png");

    gritty = createButton("Him");
    gritty.style('font-size', '30px');
    gritty.style('background-color',gCol);
    gritty.style('color', gColT);
    gritty.style('border','none');
    gritty.position(330, height/2+100);
    gritty.mousePressed(grittyFunc);

    lessGritty = createButton("Him");
    lessGritty.style('font-size','30px');
    lessGritty.style('background-color',lGCol);
    lessGritty.style('color', lGColT);
    lessGritty.style('border','none');
    lessGritty.position(550, height/2+100);
    lessGritty.mousePressed(lessGrittyFunc);

    jaded = createButton("Her");
    jaded.style('font-size', '30px');
    jaded.style('background-color',jCol);
    jaded.style('color', jColT);
    jaded.style('border','none');
    jaded.position(800, height/2+ 100);
    jaded.mousePressed(jadedFunc);
  }

  this.enter = function()
  {
    gritty.show();
    lessGritty.show();
    jaded.show();
  }

  this.draw = function()
  {
    fill(9,58,58);
    rect(0,0, width, height);
    fill(39,15,76);
    rect(0,0, (width * 2/3)-22, height);
    fill(96,21,57);
    rect(0,0, (width * 1/3)+58, height);

    fill(255);
    textSize(100);
    textAlign(CENTER);
    text("Pick Your Drinker",width/2,height *1/3);

    image(grittyImg,-120, (height*1/3) + 155, grittyImg.width/2, grittyImg.height/2);
    image(lessGrittyImg,310, (height*1/3) + 155, lessGrittyImg.width/2, lessGrittyImg.height/2);
    image(jadedImg,550, (height*1/3) + 155, jadedImg.width/2, jadedImg.height/2);
  }

  function grittyFunc ()
  {
    grittyBool = true;
    lessGrittyBool = false;
    jadedBool = false;

    mgr.showScene(bar);
    gritty.hide();
    lessGritty.hide();
    jaded.hide();

    console.log(grittyBool);
    console.log(lessGrittyBool);
    console.log(jadedBool);
  }
  function lessGrittyFunc()
  {
    lessGrittyBool = true;
    grittyBool = false;
    jadedBool = false;

    mgr.showScene(bar);
    gritty.hide();
    lessGritty.hide();
    jaded.hide();

    console.log(grittyBool);
    console.log(lessGrittyBool);
    console.log(jadedBool);
  }
  function jadedFunc ()
  {
    jadedBool = true;
    lessGrittyBool = false;
    grittyBool = false;

    mgr.showScene(bar);
    gritty.hide();
    lessGritty.hide();
    jaded.hide();

    console.log(grittyBool);
    console.log(lessGrittyBool);
    console.log(jadedBool);
  }

}
///////////////////////  4  ////////////////////////

function aboutScreen()
{

  this.enter = function()  {

      back.show();
      background("grey");
      textAlign(CENTER);

  }

  this.setup = function()
  {
    back = createButton("Back");
    back.style('font-size','20px');
    back.position(width*1/3,height/2+400);
    back.mousePressed(goBack);
    back.size(100);
  }

  this.draw = function()
  {
    fill(255);
    textSize(70);
    textAlign(CENTER);
    text("Come Experience Intoxication!!!",width/2,height *1/3 - 100);

    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("This relic of the fleshy past has been brought forward in time by the ingenious LD50-040! ",width/2,height *1/3 );
    text("Experience drunkeness and alchoholism through nearly authentic Human eyes in this revolutionary simulator! ",width/2,height *1/3+50 );
    text("Pick one of the three Human avatars, and explore their individual tolerances and likes, but be careful! ",width/2,height *1/3+100 );
    text("Intoxication isn't all fun and games, Humans risk death should their weak filtration systems intake more than ",width/2,height *1/3+150 );
    text("they can handle!",width/2,height *1/3+200 );
  }

  function goBack()
  {
    back.hide();
    mgr.showScene(intro);
  }

}
///////////////////////  5  ////////////////////////
  function alchoholPoisoning()
  {
    this.enter = function()
    {
      tostart.show();
      background("grey");
      textAlign(CENTER);
    }
    this.setup = function()
    {
      tostart = createButton("Back");
      tostart.style('font-size', '20px');
      tostart.position(width*1/3,height/2+400);
      tostart.mousePressed(toStart);
      tostart.size(100);
    }

    this.draw = function()
    {
      fill(255);
      textSize(60);
      textAlign(CENTER);
      text("You've Died of Alchohol Poisoning =(",width/2,height *1/3 - 100);

    }
    function toStart()
    {
      tostart.hide();
      mgr.showScene(intro);
    }

  }
  ///////////////////////  6  ////////////////////////
  function satisfied()
  {
    this.enter = function()
    {
      tostartS.show();
      background("grey");
      textAlign(CENTER);
    }
    this.setup = function()
    {
      tostartS = createButton("Back");
      tostartS.style('font-size', '20px');
      tostartS.position(width*1/3,height/2+400);
      tostartS.mousePressed(toStartS);
      tostartS.size(100);
    }

    this.draw = function()
    {
      fill(255);
      textSize(60);
      textAlign(CENTER);
      text("You've had a good night!",width/2,height *1/3 - 100);

    }
    function toStartS()
    {
      tostartS.hide();
      mgr.showScene(intro);
    }
  }

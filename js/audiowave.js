
var w = window.innerWidth  || document.documentElement.clientWidth  || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var newcolor = 'white';
var triangle = new Path({ strokeColor: newcolor, opacity: 1, strokeWidth: 165 });

triangle.dashArray  = [25, 1];

var newcolor2 = 'purple';
var triangle2 = new Path({ strokeColor: newcolor2, opacity: 1, strokeWidth: 145 });

triangle2.dashArray  = [25, 1];


var lscolor = 'pink';
// LEFT SPEAKER LINE # 1
//=============================================
var leftPath   = new Path({ strokeColor: 'White', opacity: 1, strokeWidth: 115 });
var leftPath2  = new Path({ strokeColor: lscolor, opacity: 1, strokeWidth:105 });

leftPath.dashArray  = [25, 1] , leftPath2.dashArray = [25, 1]; // point separation


var lscolor2 = 'magenta';
// LEFT SPEAKER LINE # 2
//=============================================
var leftPath3 = new Path({ strokeColor: 'tan',  opacity: .1, strokeWidth: 5000 });
var leftPath4 = new Path({ strokeColor: 'white',  opacity: .4, strokeWidth: 5000 });

leftPath3.dashArray = [4, 10], leftPath4.dashArray = [2, 10];


var rscolor = 'lime';
// RIGHT SPEAKER LINE # 1
//=============================================
var rightPath  = new Path({ strokeColor: 'White', opacity: 1, strokeWidth: 115 });
var rightPath2 = new Path({ strokeColor: rscolor, opacity: 1, strokeWidth: 105 });

rightPath.dashArray  = [25, 1], rightPath2.dashArray = [25, 1]; // point separation


var rscolor2 = 'green';

// RIGHT SPEAKER LINE # 2 fillColor: 'White',
//=============================================
var rightPath3 = new Path({ strokeColor: 'White', opacity: 1, strokeWidth: 125 });
var rightPath4 = new Path({ strokeColor: rscolor2, opacity: 1, strokeWidth: 115 });

rightPath3.dashArray = [25, 1], rightPath4.dashArray = [25, 1]; // point separation




var amount = 9, step = view.size.width / amount, flip = true;


for (var i = 0; i <= amount; i++) {
  triangle.add (new Point(i * step, 0));
  triangle2.add (new Point(i * step, 0));
  leftPath.add   (new Point(i * step, 0));
  leftPath2.add  (new Point(i * step, 0));
  leftPath3.add   (new Point(i * step, 0));
  leftPath4.add   (new Point(i * step, 0));
  rightPath.add  (new Point(i * step, 0));
  rightPath2.add (new Point(i * step, 0));
  rightPath3.add (new Point(i * step, 0));
  rightPath4.add (new Point(i * step, 0));
}
var group3 = new Group({
  children: [leftPath3, leftPath4],
  applyMatrix: false,
  pivot: leftPath3.position,
  position: view.center
});
var group = new Group({
  children: [triangle, triangle2, leftPath, leftPath2],
  applyMatrix: false,
  strokeJoin: 'round',
  strokeCap: 'round',
  pivot: leftPath.position,
  position: view.center - 100
});

var group2 = new Group({
  children: [rightPath, rightPath2, rightPath3, rightPath4],
  applyMatrix: false,
  strokeJoin: 'round',
  strokeCap: 'round',
  pivot: rightPath.position,
  position: view.center - 100
});



function onMouseDown() {
  flip = !flip;
}

//function onKeyDown(event) {
//  if (event.key === 'space') {
//    group.fullySelected = !group.fullySelected;
//  }
//}

var audio, source, analyserL, analyserR, freqByteData;

view.onFrame = function() {




	
		
  var step = view.size.width / amount;
  var scale = view.size.height / 3;

  analyserL.getByteFrequencyData(freqByteData);
  var leftBands = getEqualizerBands(freqByteData, true);

  analyserR.getByteFrequencyData(freqByteData);
  var rightBands = getEqualizerBands(freqByteData, true);

  for (var i = 1; i <= amount; i++) {

    leftPath3.rotate(i * scale / 10000);
		leftPath4.rotate(i * scale / 10000);

		// do not touch this
    leftPath3.segments[i].point = [-leftBands[i - 1] * scale + 1000, i * step];
    leftPath4.segments[i].point = [-rightBands[i - 1] * scale * (flip ? -1 : 1) + 1000, i * step ];

  
    leftPath.segments[i].point = [i * step, -leftBands[i - 1] * scale];
    leftPath2.segments[i].point = [i * step,  -leftBands[i - 1] * scale];


    rightPath.segments[i].point = [i * step, -rightBands[i - 1] * scale * (flip ? -1 : 1) - 400];
    rightPath2.segments[i].point = rightPath.segments[i].point;

    rightPath3.segments[i].point = [i * step, -rightBands[i - 1] * scale * (flip ? -1 : 1) - 200 ];
    rightPath4.segments[i].point = rightPath3.segments[i].point;

    triangle.segments[i].point = [i * step, -leftBands[i - 1] * scale + 500];
    triangle2.segments[i].point = [i * step, -leftBands[i - 1] * scale + 530];

  }
	
  leftPath.smooth();
  leftPath2.smooth();
  leftPath3.smooth();
  leftPath4.smooth();
  rightPath.smooth();
  rightPath2.smooth();
  rightPath3.smooth();
  rightPath4.smooth();
  triangle.smooth();
  triangle2.smooth();
  group.pivot = [rightPath.position.x, 0];
  group2.pivot = [leftPath.position.x, 0];
  group.position = view.center - 50;
  group2.position = view.center - 50;
  

}

// Pause animation until we have data
view.pause();

var AudioContext = window.AudioContext || window.webkitAudioContext;

if (AudioContext) {

  var songs = [
  "03 Caroline.mp3",
  "The Sugarhill Gang - Rapper's Delight.mp3",
  "049 The Black Eyed Peas - Just Can't Get Enough.mp3",
  "03 Freebird.mp3",
  "02 Take On Me.mp3",
  "020 Adele - Rolling In The Deep.mp3",
  "04 Wishing Well.mp3",
  "Pitbull - Global Warming - Feel This Moment.mp3",
  "Bruno Mars - Unorthodox Jukebox - Locked Out Of Heaven.mp3",
  "09 Blue Bayou.mp3",
  "07 Teenage Dream.mp3",
  "02 Superfly.mp3",
  "02 Addicted to Love.mp3",
  "13 Cat Scratch Fever.mp3",
  "07 Up Where We Belong.mp3",
  "05 How Can You Mend A Broken Heart.mp3",
  "02 California Gurls.mp3",
  "03 Angel Of The Morning.mp3",
  "02 Black Betty.mp3",
  "11 Walks Like a Lady.mp3",
  "06 (Don't Fear) The Reaper.mp3",
  "Swedish House Mafia - Until Now - Don't You Worry Child.mp3",
  "07 Just A Little Bit.mp3",
  "06 My Sharona.mp3",
  "03 - Unbelievable.mp3",
  "004.Daft Punk feat. Pharrell Williams - Get Lucky.mp3",
  "06 St. Elmo's Fire.mp3",
  "14 A Horse with No Name.mp3",
  "19 Walk on the Wild Side.mp3",
  "11 Sailing.mp3",
  "083 Foo Fighters - Walk.mp3",
  "08 The Ballroom Blitz.mp3",
  "18 Casey Jones.mp3",
  "09 Cry Cry Cry.mp3",
  "Robin Thicke - Blurred Lines - Blurred Lines.mp3",
  "04 Bang A Gong (Get It On).mp3",
  "09 Don't Go Breaking My Heart.mp3",
  "01 Do I Wanna Know_.mp3",
  "10 House Of The Rising Sun.mp3",
  "Will.i.am - %23Willpower - Scream %26 Shout.mp3",
  "10 Truckin'.mp3",
  "02 - New Pony.mp3",
  "13 One.mp3",
  "19 All By Myself.mp3",
  "09 Can't Fight This Feeling.mp3",
  "06 Spirit of Radio.mp3",
  "04 Takin' Care Of Business.mp3",
  "06 - Joey.mp3",
  "11 Get It On.mp3",
  "005.Jay-Z - Holy Grail (feat. Justin Timberlake.mp3",
    "002.Miley Cyrus - We Can't Stop.mp3",
  "05 Blinded By The Light.mp3",
  "07 Suicide Blonde.mp3",
  "19 Ride Captain Ride.mp3",
  "18 Walk This Way.mp3",
  "03 Cold as Ice.mp3",
  "15 I Want You To Want Me.mp3",
  "03 Tainted Love.mp3",
  "11 The Joker.mp3",
  "06 Lay Down Sally.mp3",
  "12 More Than A Feeling.mp3",
  "04 Listen to the Music.mp3",
  "14 Heart of Glass.mp3",
  "001 Maroon 5 ft. Christina Aguilera - Moves Like Jagger.mp3",
  "003.Imagine Dragons - Radioactive.mp3",
  "09 Key Largo.mp3",
  "04 Mama Told Me (Not To Come).mp3",
  "13 Rock 'N' Roll Fantasy.mp3",
  "02 To the Sea.mp3",
  "03 Long Cool Woman In A Black Dress.mp3",
  "03 Since You Been Gone.mp3",
  "11 You Keep Me Hangin' On.mp3",
  "009.Capital Cities - Safe and Sound.mp3",
  "04 Sara Smile.mp3",
  "Grandmaster Flash %26 Melle Mel - White Lines.mp3",
  "10 Down on the Corner.mp3",
  "08 Brown Eyed Girl.mp3",
  "12 Smokin' In The Boys Room.mp3",
  "035.Brett Eldredge - Don't Ya.mp3",
  "03 Up Around the Bend.mp3",
  "19 Three Little Birds.mp3",
  "05 The Lion Sleeps Tonight (Wimoweh).mp3",
  "01 You and Your Heart.mp3",
  "02 Magic Carpet Ride.mp3",
  "01 Up Around the Bend.mp3",
  "15 Me %26 Bobby McGee.mp3",
  "044.The Lumineers - Ho Hey.mp3",
  "13 Hello Stranger.mp3",
  "03 The Twist.mp3",
  "04 Bad Moon Rising.mp3",
  "14 Dance with me.mp3",
  "Nicki Minaj - Super Bass.mp3",
  "15 Duke Of Earl.mp3",
  "08 Tempted.mp3",
  "08 Come On Eileen.mp3",
  "07 A Horse with No Name.mp3",
  "06 Lets Dance.mp3",
  "02 Eye Of The Tiger.mp3",
  "09 Rich Girl.mp3",
  "05 - Winterlude.mp3",
  "08 Please Dont Go.mp3",
  "11 We Will Rock You.mp3",
  "11 Ain't No Sunshine.mp3",
  "05 The Hustle.mp3",
  "07 You Sexy Thing.mp3",
  "06 Lady Marmelade.mp3",
  "13 Southern Nights.mp3",
  "01 Raindrops Keep Fallin' on My Head.mp3",
  "13 I Want Candy.mp3",
  "09 Don't It Make My Brown Eyes Blue.mp3",
  "08 A Fifth of Beethoven.mp3",
  "02 We Got The Beat.mp3",
  "13 Love Train.mp3",
  "02 La Bamba.mp3",
  "Justin Timberlake - The 20,20 Experience - Suit %26 Tie.mp3",
  "06 Radar Love.mp3",
  "01 Maggie May.mp3",
  "07 Sweet Home Alabama.mp3",
  "05 Band On The Run.mp3",
  "07 Space Cowboy.mp3",
  "15 Tragedy.mp3",
  "10 Suspicious Minds.mp3",
  "02 Fly Like An Eagle.mp3",
  "20 Slip Slidin' Away.mp3",
  "08 Magic.mp3",
  "15 Piece of My Heart.mp3",
  "Fun. - Some Nights - Some Nights.mp3",
  "004 LMFAO ft. Lauren Bennett %26 GoonRock - Party Rock Anthem.mp3",
  "027.AWOLNATION - Sail.mp3",
  "15 Take It On The Run.mp3",
  "013.Macklemore %26 Ryan Lewis feat. Ray Dalton - Can't Hold Us.mp3",
  "01 Got To Give It Up (Part 1).mp3",
  "05 The Joker.mp3",
  "07 You Know I%60m No Good.mp3",
  "09 Islands In The Stream.mp3",
  "20 Margaritaville.mp3",
  "13 Lola.mp3",
  "07 Don't Bring Me Down.mp3",
  "04 Peace Train.mp3",
  "03 Spirit In The Sky.mp3",
  "18 Let's Get It On.mp3",
  "F--kin' Problems.mp3",
  "031.MacKlemore feat. Wanz - Thrift Shop.mp3",
  "01 Gimme All Your Lovin'.mp3",
  "081.The Neighbourhood - Sweater Weather.mp3",
  "003 Foster the People - Pumped Up Kicks.mp3",
  "10 Slow Ride.mp3",
  "Jennifer Lopez ft. Pitbull - On the Floor.mp3",
  "Drake - Nothing Was The Same - Hold On, We're Going Home.mp3",
  "Maroon 5 - Overexposed - One More Night.mp3",
  "07 Gangster of Love.mp3",
  "006.Anna Kendrick - Cups.mp3",
  "we_belong.mp3",
  "Thunderstruck.mp3",
  "Sledgehammer.mp3",
  "letitwhip.mp3"
  ];

var classical = [
"01SPRI~1.MP3",
"02 'Morning' from 'Peer Gynt'.mp3",
"03 The Marriage of Figaro (overture).mp3",
"04 Hornpipe.mp3",
"05 Waltz in A Flat Major Op 39-15.mp3",
"06'UNF~1.MP3",
"08 Humoreske.mp3",
"09 The Girl with the Flaxen Hair.mp3",
"100SYM~1.MP3",
"10DANC~1.MP3",
"11'EIN~1.MP3",
"12 Piano Concerto In A Minor.mp3",
"13 'New World' Symphony (Excerpt).mp3",
"14 Golliwog's Cakewalk.mp3",
"15MINI~1.MP3",
"16 Trumpet Voluntary.mp3",
"17 Song of the Gondolier.mp3",
"18 Toreador's Song from 'Carmen'.mp3",
"19 Toccata and Fugue in D Minor.mp3",
"20 Slavonic Dance in C Major.mp3",
"21 Holberg Suite.mp3"
];

  var playclassical = 0
  var thissong = '', audioURL = '';

  if (playclassical == 1) {
	  thissong = classical[Math.floor(Math.random() * 20)];
	  audioURL = "classical_audio/"  + thissong;
  }
  else {
    thissong = songs[Math.floor(Math.random() * 159)];
    audioURL = "audio/"  + thissong;
  }


  console.log(thissong);


  console.log(audioURL);

  audio = new AudioContext();

  source = audio.createBufferSource();

  // Create two separate analyzers for left and right channel.
  analyserL = audio.createAnalyser();
  analyserL.smoothingTimeConstant = 0.03;
  analyserL.fftSize = Math.pow(2, amount) * 2;

  analyserR = audio.createAnalyser();
  analyserR.smoothingTimeConstant = analyserL.smoothingTimeConstant;
  analyserR.fftSize = analyserL.fftSize;

  // Create the buffer to receive the analyzed data.
  freqByteData = new Uint8Array(analyserL.frequencyBinCount);

  // Create a splitter to feed them both
  var splitter = audio.createChannelSplitter();

  // Connect audio processing graph
  source.connect(splitter);

  splitter.connect(analyserL, 0, 0);
  splitter.connect(analyserR, 1, 0);

  // Connect source to output also so we can hear it
  source.connect(audio.destination);

  loadAudioBuffer(audioURL);
}
else {
  alert('Audio not supported');
}

function loadAudioBuffer(url) {

  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function() {
    audio.decodeAudioData(
      request.response,
      function(buffer) {
        source.buffer = buffer;
        source.loop = true;
        source.start(0);
        view.play();
      },

      function(buffer) {
        alert("Error loading MP3");
      }
    );
  };
  request.send();
}

function getEqualizerBands(data) {
  var bands = [];
  var amount = Math.sqrt(data.length) / 2;

  for (var i = 0; i < amount; i++) {
    var start = Math.pow(2, i) - 1;
    var end = start * 2 + 1;
    var sum = 0;
    for (var j = start; j < end; j++) {
      sum += data[j];
    }
    var avg = sum / (255 * (end - start));
    bands[i] = Math.sqrt(avg / Math.sqrt(2) + .02);
  }
  return bands;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

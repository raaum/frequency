/**
*
* Loop Waveform Visualizer by Felix Turner
* @felixturner / www.airtight.cc
*
* Audio Reactive Waveform via Web Audio API.
*
*/


  var songs = ["03 Caroline.mp3",
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
  "07 Gangster of Love.mp3",
  "006.Anna Kendrick - Cups.mp3",
  "we_belong.mp3",
  "Thunderstruck.mp3",
  "Sledgehammer.mp3",
  "letitwhip.mp3"];
  var thissong = songs[Math.floor(Math.random() * 159)];
  console.log(thissong);
	var audioURL = "audio/" + thissong;
console.log(audioURL);

var mouseX = 0, mouseY = 0, windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2, camera, scene, renderer, material, container;
var source;
var analyser;
var buffer;
var audioBuffer;
var dropArea;
var audioContext;
var source;
var analyser;
var xhr;
var started = false;

var perlin = new ImprovedNoise();
var noisePos = Math.random()*100;

$(document).ready(function() {
	init();
});

function init() {

	//check for WebGL
	if(!hasWebGL()){
		$("#prompt").html("Sorry!<br>This browser does not support WebGL. <br>Please use Chrome, Safari or Firefox.");
		return;
	}

	//Get an Audio Context
	try {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		audioContext = new window.AudioContext();
	} catch(e) {
		//Web Audio API is not supported in this browser
		$("#prompt").html("Sorry!<br>This browser does not support the Web Audio API. <br>Please use Chrome, Safari or Firefox.");
		return;
	}

	$('#prompt').html('drop mp3 here or <a id="loadSample">load sample mp3</a>');

	//fix iOS sound playback
	//from http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
	window.addEventListener('touchstart', function() {

		// create empty buffer
		var buffer = audioContext.createBuffer(1, 1, 22050);
		var source = audioContext.createBufferSource();
		source.buffer = buffer;

		// connect to output (your speakers)
		source.connect(audioContext.destination);

		// play the file
		source.noteOn(0);

	}, false);

	//init audio
	analyser = audioContext.createAnalyser();
	analyser.smoothingTimeConstant = 0.1;
	analyser.fftSize = 1024;

	//init 3D scene
	container = document.createElement('div');
	document.body.appendChild(container);
	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000000);
	camera.position.z = 2000;
	scene = new THREE.Scene();
	scene.add(camera);
	renderer = new THREE.WebGLRenderer({
		antialias : false,
		sortObjects : false
	});
	renderer.setSize(window.innerWidth, window.innerHeight);

	container.appendChild(renderer.domElement);

	// stop the user getting a text cursor
	document.onselectStart = function() {
		return false;
	};


	//init listeners
	$("#loadSample").click( loadSampleAudio);
	$(document).mousemove(onDocumentMouseMove);

	container.addEventListener( 'touchstart', onDocumentTouchStart, false );
	container.addEventListener( 'touchmove', onDocumentTouchMove, false );

	$(window).resize(onWindowResize);
	document.addEventListener('drop', onMP3Drop, false);
	document.addEventListener('dragover', onDocumentDragOver, false);

	onWindowResize(null);

	LoopVisualizer.init();

}

function loadSampleAudio() {
	$('#prompt').text("loading...");



	// Load asynchronously
	var request = new XMLHttpRequest();
	request.open("GET", audioURL, true);
	request.responseType = "arraybuffer";

	request.onload = function() {
		audioContext.decodeAudioData(request.response, function(buffer) {
			audioBuffer = buffer;
			startSound();
		}, function(e) {
			$('#prompt').text("error loading mp3");
			console.log(e);
		});
	};
	request.send();
}

function onDroppedMP3Loaded(data) {
	audioContext.decodeAudioData(data, function(buffer) {
		audioBuffer = buffer;
		startSound();
	}, function(e) {
		$('#prompt').text("cannot decode mp3");
		console.log(e);
	});
}

function startSound() {

	if (source){
		source.stop(0.0);
		source.disconnect();
	}

	// Connect audio processing graph
	source = audioContext.createBufferSource();
	source.connect(audioContext.destination);
	source.connect(analyser);

	source.buffer = audioBuffer;
	source.loop = true;
	source.start(0.0);
	startViz();
}

function onDocumentMouseMove(event) {
	mouseX = (event.clientX - windowHalfX);
	mouseY = (event.clientY - windowHalfY);
}

function onDocumentTouchStart( event ) {
	if ( event.touches.length == 1 ) {
		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		mouseY = event.touches[ 0 ].pageY - windowHalfY;
	}
}

function onDocumentTouchMove( event ) {
	if ( event.touches.length == 1 ) {
		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		mouseY = event.touches[ 0 ].pageY - windowHalfY;
	}
}

function onWindowResize(event) {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render() {

	LoopVisualizer.update();

	noisePos += 0.005;

	if (LoopVisualizer.vizParams.autoTilt){
		var rotRng = Math.PI /2;
		LoopVisualizer.loopHolder.rotation.x = perlin.noise(noisePos,0,0) * rotRng;
		LoopVisualizer.loopHolder.rotation.y = perlin.noise(noisePos ,100,0) * rotRng;

	}else{
		//mouse
		var xrot = mouseX/window.innerWidth * Math.PI*2 + Math.PI;
		var yrot = mouseY/window.innerHeight* Math.PI*2 + Math.PI;
		LoopVisualizer.loopHolder.rotation.x += (-yrot - LoopVisualizer.loopHolder.rotation.x) * 0.3;
		LoopVisualizer.loopHolder.rotation.y += (xrot - LoopVisualizer.loopHolder.rotation.y) * 0.3;
	}

	renderer.render(scene, camera);
}

$(window).mousewheel(function(event, delta) {
	//set camera Z
	camera.position.z -= delta * 50;
});

function onDocumentDragOver(evt) {
	$('#prompt').show();
	$('#prompt').text("drop MP3 here");
	evt.stopPropagation();
	evt.preventDefault();
	return false;
}

function onMP3Drop(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	//clean up previous mp3
	//if (source) source.disconnect();
	//LoopVisualizer.remove();

	$('#prompt').show();
	$('#prompt').text("loading...");

	var droppedFiles = evt.dataTransfer.files;
	var reader = new FileReader();
	reader.onload = function(fileEvent) {
		var data = fileEvent.target.result;
		onDroppedMP3Loaded(data);
	};
	reader.readAsArrayBuffer(droppedFiles[0]);
}

function startViz(){
	$('#prompt').hide();
	//LoopVisualizer.start();
	if (!started){
		started = true;
		animate();
	}
}

function hasWebGL() {
	try {
		return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
	} catch( e ) {
		return false;
	}
}

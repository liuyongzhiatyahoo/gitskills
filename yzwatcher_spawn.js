//
//$node --harmony yzwatcher_spawn.js target.txt
//
const 	fs = require('fs'),
	spawn = require('child_process').spawn,
	filename = process.argv[2];
let	counter = 0;

if (!filename)
	throw error ("The command is short of an argument: node --harmony yzWatch.js target.txt");

fs.watch(filename, function(){
	let
		ls = spawn('ls', ["-lh", filename]),
		output = '';
	ls.stdout.on('data', function(chunk){
		output += chunk.toString();	
	});

	ls.on('close', function(){
		let 
			parts = output.split(/\s+/);
		counter = counter + 1;		
		console.dir([parts[0], parts[4], parts[8]]);
		console.dir("Modified " + counter + " Times!!!");
		console.dir(" ");
	});

	
});

console.log("This Program watch file changes \n using concept of Emitter Event, channel");
console.log(filename + " is under watch!!!\n");




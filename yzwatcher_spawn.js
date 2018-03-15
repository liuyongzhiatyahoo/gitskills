//
//$node --harmony yzwatcher_spawn.js target.txt
//
const 	fs = require('fs'),
	spawn = require('child_process').spawn,
	filename = process.argv[2];
let	counter = 0;

if (!filename)
	throw error ("The command is of form: node --harmony yzwatch.js target.txt");

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
		console.log("Modified " + counter + " Times!\n");
	});

	
});

console.log("This Program watches file changes \nusing concepts of emitter event, channel");
console.log(filename + " is under watch!!!\n");




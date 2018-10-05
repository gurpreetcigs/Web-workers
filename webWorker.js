self.addEventListener('message', function(e){
	let data = e.data;
	setTimeout(function(){
		self.postMessage(data.test);
	}, 10000);
	
}, false);

self.addEventListener('test2', function(e){
	let data = e.data;
	if(data.test){
		setTimeout(function(){
			self.postMessage('Thread for test2');
		}, 2000);
	}
}, false);

(function(){
	var t = this;
		t.agb = {};
	t.agb.userAgent = navigator.userAgent.toLocaleLowerCase();
	t.agb.isiPhone = t.agb.userAgent.indexOf('iphone') > -1;
	t.agb.isAndroid = t.agb.userAgent.indexOf('android') > -1;
	t.agb.iphone = 'width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5';
	t.agb.font = document.documentElement.clientWidth/320;
	if(t.agb.isiPhone){
		document.getElementById('metaView').content = t.agb.iphone;
		t.agb.font = t.agb.font > 1 ? parseInt(t.agb.font * 65) : 65;
	}else if(t.agb.isAndroid){
		t.agb.font = t.agb.font > 1 ? parseInt(t.agb.font * 32) : 32;
	}else{
		t.agb.font = 32;
	}
	document.documentElement.style.fontSize = t.agb.font + 'px';
	t.agb.pS = document.getElementById('metaView');
	t.agb.pSp = t.agb.pS.parentNode;
	t.agb.pSp.removeChild(t.agb.pS);
	delete t.agb;
})();

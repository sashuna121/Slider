window.onload = function(){
	function bottonclick(event){
		if(event.toElement.className === 'back'){
			visibleIndex --;
		}
		if(event.toElement.className === 'next'){
			visibleIndex ++;
		}		
	}
	var slyders = document.getElementsByClassName("slider");
	
	var visibleIndex = 0;
	
	for (var i = 0; i < slyders.length; i++) {
		
		var slider = slyders[i];		

		var ul = slider.getElementsByTagName("ul");
		var li = ul[0].getElementsByTagName("li");
		
		var btn = document.createElement('button');
		btn.className="back";
		btn.onclick = bottonclick;
		slider.appendChild(btn);
		var btn = document.createElement('button');
		btn.className="next";
		btn.onclick = bottonclick;
		slider.appendChild(btn);
		
		

		slider.style.height = slider.getElementsByTagName("li")[0].offsetHeight + "px";
		
		
		
		
	
	};  
	
	
};

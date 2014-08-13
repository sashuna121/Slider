window.onload = function(){
	
	var slyders = document.getElementsByClassName("slider");
	
	

	[].forEach.call(slyders,function(slider, index){
		var visibleIndex = 0;
		var arrLi = [];
		var ul = slider.getElementsByTagName("ul"),
			li = ul[0].getElementsByTagName("li");		
		[].forEach.call(li, function(key,index){			
			return(key.parentElement.tagName =="UL" && key.parentElement.parentElement.tagName == "DIV") ? arrLi.push(key) : 0;

		});

		var btn = document.createElement('button');
		btn.className="back";
		btn.maxClick = arrLi.length-1;
		slider.appendChild(btn);		
		btn = document.createElement('button');
		btn.className="next";
		btn.maxClick = arrLi.length-1;
		slider.appendChild(btn);
		var buttons = slider.getElementsByTagName("button");
		[].forEach.call(buttons, function(button){
			button.onclick = bottonclick;			
		});		
				
		var nav = document.createElement("nav");
		slider.appendChild(nav);
		for(var i = 0; i < arrLi.length; i++) {
			var navLi = document.createElement("li");
			navLi.onclick = navLiOnclick;
			navLi.index = i;
			nav.appendChild(navLi);
		}
		
		
		function navLiOnclick(){
			visibleIndex = this.index;
			anim();			
		}
		function anim(){
			console.log(visibleIndex);
		}
		function bottonclick(event){
			if(event.toElement.className === 'back'){
				visibleIndex--;
				visibleIndex = visibleIndex < 0 ? this.maxClick : visibleIndex;						
			}
			if(event.toElement.className === 'next'){
				visibleIndex ++;
				visibleIndex = visibleIndex > this.maxClick ?  0 : visibleIndex;								
			}	
			anim();	
		}
	
	});	
};

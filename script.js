var Weight={};
var Animate={};
function $(id){
	return document.getElementById(id);
}
(function(a){
	var trigger=function(element,toChange){
		var snapshot =Array.prototype.slice.call(element,0);
		for (var i = snapshot.length-1 ; i >= 0; i--) {
			snapshot[i].addEventListener("mouseover",function(e){
				if(e.target.tagName == "a".toUpperCase()){
					for(var i in toChange){
						e.target.style[i] = toChange[i];
					}
				}
			},false);
		};
		for (var i = snapshot.length-1 ; i >= 0; i--) {
			snapshot[i].addEventListener("mouseout",function(e){
				if(e.target.tagName == "a".toUpperCase()){
					for(var i in toChange){
						e.target.style[i] = "";
					}
				}
			},false);	
		};
	};
	a.trigger=trigger;
})(Animate);
(function(w){
	var Clock=function(element){
		element.style.position ="fixed";
		element.style.width = "60px";
		element.style.height = "13em";
		element.style.top="10px";
		element.style.right="4px";
		element.style.lineHeight="1.4em";
		var Items={
		"0":"零",
		"1":"壹",
		"2":"贰",
		"3":"叁",
		"4":"肆",
		"5":"伍",
		"6":"陆",
		"7":"柒",
		"8":"捌",
		"9":"玖"
		};
		var toCN=function(date){
			var arr=(date+"").split("");
			var re="";
			for (var i = 0 ,ii = arr.length; i <ii; i++) {
				re = re+Items[arr[i]];
			};
			return re;
		}
		var Calendar = document.createElement("div");
			Calendar.style.position="absolute";
			Calendar.style.top="5px";
		    Calendar.style.width ="1em";
		    Calendar.style.fontSize="20px";
		    Calendar.style.fontFamily="serif";
		    Calendar.style.paddingRight="5px";
		    Calendar.style.borderRight ="1px solid";
		 	element.appendChild(Calendar);
		var Time =document.createElement("div");
			Time.style.width="1em";
			Time.style.fontSize="14px";
		    Time.style.fontFamily="serif";
			Time.style.position="absolute";
			Time.style.top="17px";
			Time.style.left="2.1em";
			element.appendChild(Time);
		var reflashView = function(){
		 	var date = new Date();
		 	var d,m,y,h,min,s ="";
			var d=toCN(date.getDate());
			var m=toCN(date.getMonth()+1);
			var y=toCN(date.getFullYear());
			var h=toCN(date.getHours());
			var min=toCN(date.getMinutes());
			var s =toCN(date.getSeconds());
		 		Calendar.innerHTML=y+"年"+m+"月"+d+"日";
		 		Time.innerHTML=h+"时"+min+"分"+s;
		};
		setInterval(reflashView,1000);	
	}
	w.Clock = Clock;
})(Weight);
(function(w){
	var ipodCtrl=function(element){
		element.addEventListener("click",function(e){
			if(this.childNodes[3].paused){
				this.childNodes[3].play();
				element.childNodes[1].style.backgroundColor="#333";
			}else{
				this.childNodes[3].pause();
				element.childNodes[1].style.backgroundColor="#aaa";
			}
		},false);
	}
	w.ipodCtrl=ipodCtrl;
})(Weight);
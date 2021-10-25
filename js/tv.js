//play
function play() {
	var rul = document.getElementById("url").value; 
	if(rul == "") {
		alert("请复制链接粘贴后再点解析按钮！")
	} else {
		var jxApi = document.getElementById("jk"); 
		var jxurl = document.getElementById("jk").selectedIndex; 
		var jkv = jxApi.options[jxurl].value; 
		var paly = document.getElementById("palybox"); 
		paly.src = jkv + rul; 
		//ajax
		var tittext = document.getElementById("tittext");
		//1,create ajax
		var xhr = getxhr();
		//2,
		xhr.open("post", "shipinjiexi/", true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//3,
		xhr.send("titurl=" + rul);
		console.log(xhr.readyState);
		//
		xhr.onreadystatechange = function() {
			console.log(xhr.readyState)
			console.log(xhr.status)
			if(xhr.readyState == 4 && xhr.status == 200) {
				tittext.innerHTML = xhr.responseText; 
			}
		}

		function getxhr() {
			var xhr = null;
			if(window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else {
				xhr = new ActiveXObject("Microsoft.XMLHttp");
			}
			return xhr;
		}
	}
}

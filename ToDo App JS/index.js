
		var elements = [];
		window.onload = function() {
		if (JSON.parse(localStorage.getItem("elements")) != null)
		elements = JSON.parse(localStorage.getItem("elements"));
		console.log(elements);
		display();
		};
		function addElement() {
		if (document.querySelector("#addTxt").value.trim() != "") {
		elements.push(document.querySelector("#addTxt").value.trim());
		add_push();
		if (localStorage.getItem("elements") == null) {
		localStorage.setItem("elements", JSON.stringify(elements));
		} else {
		localStorage.setItem("elements", JSON.stringify(elements));
		}
		
		}
		}
		function add_push() {
		
		window.location.reload();
		
		}
		function display() {
		document.querySelector("#addTxt").innerHTML = "";
		for (var i = 0; i < elements.length; i++)
		document.querySelector(".list-group").innerHTML +=
		"<li class='list-group-item'>"+elements[i]+"<span onclick='del(" + i +"); return false' class='glyphicon glyphicon-remove'></span></li>"
		
		}
		function del(index) {
		elements.splice(index, 1);
		if (localStorage.getItem("elements") == null) {
		localStorage.setItem("elements", JSON.stringify(elements));
		} else {
		localStorage.setItem("elements", JSON.stringify(elements));
		}
		window.location.reload();
		
		}
		var input = document.getElementById("addTxt");
		input.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
		event.preventDefault();
		addElement();
		}
		});
		
function welcome() {
	return ("Welcome. This is done by module. <br /> Module is just having another js file and using its functions in html.");
}

function clickEffect(e) {
	var d = document.createElement("div");
	d.className = "clickEffect";
	d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
	document.body.appendChild(d);
	d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}
document.addEventListener('click', clickEffect);

function printName() {
	const name = document.getElementById('name').value;
	document.getElementById("result").innerText = name;
}


function API() {
	const url = document.getElementById('url').value;
	const option = document.getElementById('option').value;
	document.getElementById("urlResult").innerText = url;
	document.getElementById("optionResult").innerText = option;

}


$(document).ready(function () {
	alert("I love you");
	$('#execute_btn').click(function () {
		$('#list li').text('JQuery 적용 텍스트(NEW)');
	});

	$('.welcome').html('hello world! coding everybody!').css('background-color', 'yellow');

	$("#btnAPI").click(function () {
		var inputURL = $("#url").val();
		var inputOption = $("#option").val();
		if (!inputURL || !inputOption) {
			alert("Missing API url + option!!");
		} else {

			alert("URL: " + inputURL + " Option: " + inputOption);
			fetch(inputURL, inputOptions)
			alert("jeje")
				.then((response) => alert("response:", response))
				.catch ((error) => alert("error:", error));
		}
	});


	$("#btnAPITEST").click(function () {
		const userAction = async () => {
			const response = await fetch('https://127.0.0.1/api/login', {
				method: 'POST',
				body: "{\"User\":{\"login_id\":\"admin\",\"password\":\"gPtjd3820@\"}}", // string or object
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const myJson = await response.json(); //extract JSON from the http response
			// do something with myJson
			alert("successful..");
		}
	});

	$("#btnAPITEST2").click(function () {
		$.ajax({
			url: 'example.php',
			async: true,
			type: 'POST',
			data: {
				"User": {
					"login_id": "admin",
					"password": "gPtjd3820@"
				}
			},
			dataType: 'json',// xml, json, script, html
			beforeSend: function (jqXHR) { },// 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
			success: function (jqXHR) { },// 요청 완료 시
			error: function (jqXHR) { },// 요청 실패.
			complete: function (jqXHR) { }// 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
		});
		$.post('index.html', function (data) { $('.result').html(data); });
				
		});


});





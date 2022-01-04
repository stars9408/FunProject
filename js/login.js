$(document).ready(function () {
	var adminID = "admin";
	var adminPW = "admin";
	$("#btnLogin").click(function () {
		var uID = $("#userId").val();
		var uPW = $("#passwd").val();
		if (!uID || !uPW) {
			alert("Enter the USER INFORMATION.");
		} else {
			if (uID == adminID) {
				if (uPW == adminPW) {
					alert("Login Successful...");
				} else {
					console.log("Incorrect PW");
					alert("Incorrect Credential.");
				}
			} else {
				console.log("Incorrect ID");
				alert("Incorrect Credential.");
			}
		}
	})
})
		var  index = 0;

		function toggleCSS() {
			index++;
			var cssObject = document.getElementById('cssEditor');
			var previewPaneStyleObject = document.getElementById('previewPaneCSS');

			if (index%2 == 1) {
				previewPaneStyleObject.innerHTML = cssObject.value;
			}
			else if (index%2 == 0) {
				previewPaneStyleObject.innerHTML = null;
			}
		}

		function launchHTML() {
			var htmlObject = document.getElementById('htmlEditor');
			var previewPaneObject = document.getElementById('previewPane');

			previewPaneObject.innerHTML = htmlObject.value;
		}

		function clearCode() {
			var htmlObject = document.getElementById('htmlEditor');
			var previewPaneObject = document.getElementById('previewPane');
			var cssObject = document.getElementById('cssEditor');

			cssObject.value = null;
			htmlObject.value = null;
			previewPaneObject.innerHTML = null;
		}
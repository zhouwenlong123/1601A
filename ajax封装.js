var $ = {
	ajax: function (ops) {
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}

		var method = ops.method,
			url = ops.url,
			async = ops.async,
			data = ops.data ? ops.data : "";
		if (typeof data === 'string') {
			data = data;
		} else {
			var str = "";
			for (var key in data) {
				str += key + '=' + data[key] + '&';
			}
			data = str.replace(/&$/, "");
		}
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					ops.success && ops.success(xhr.responseText);
				}
			}
		}
		if (method === 'get') {
			xhr.open(method, url + '?' + data, async);
			xhr.send(null);
		} else {
			xhr.open(method, url, async);
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhr.send(data);
		}
	}
}
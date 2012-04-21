	/* setting */
	if (DEMOBO) {
		DEMOBO.developer = 'developer@demobo.com';

		DEMOBO.controller = { "page": "remote" };

		var connectedEvent;

		DEMOBO.init = function () {
			$.demobo.addEventListener('textchange',function(e) {
				$("#autocomplete").val(e.value);
			},false);

			$.demobo.addEventListener('textreturn',function(e) {
				search();
			},false);

			$.demobo.addEventListener('button',function(e) {
				switch(e.value) {
					case "next":
					showNextMarker();
					break;
					case "prev":
					showPrevMarker();
					break;
				}
			},false);

			$.demobo.addEventListener('connected', function(e) {
				setMapLatLng(e.latitude, e.longitude);
			});
		};
	}

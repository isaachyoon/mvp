var $ = require('jQuery')


var queryData = (options) => {
	console.log('from queryData', options.query)
	// url = '127.0.0.1:3000/query';
	// var url = 'https://www.googleapis.com/customsearch/v1?parameters';
	var url = 'https://www.googleapis.com/customsearch/v1';

	var params = {
		'q': options.query,
		'cx': '012011638819444911068:babsjtwkt_m',
		'key': 'AIzaSyAK4pazUYYFoDc2tlerulNk63KW2JbqqGY',
		// siteSearch: 'https://expressjs.com'
	}
	$.get(url, params, function(data){
		console.log(data);
		// callback(data);
	})
};

export default queryData;//window.queryData = queryData;


/*
//express
<script>
  (function() {
    var cx = '012011638819444911068:babsjtwkt_m';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>

//react
<script>
  (function() {
    var cx = '012011638819444911068:6hd8pplw3iy';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>

//mongo
<script>
  (function() {
    var cx = '012011638819444911068:z0lilz8hbva';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>

*/
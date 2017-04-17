angular.module('starter.directives', [])

.directive('map', function($ionicActionSheet) {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var myLatLng = {lat: 37.231213, lng: -80.426263};
        var locations = [
          ['Bondi Beach', 37.232213, -80.425263, 4],
          ['Coogee Beach', 37.231213, -80.426263, 5],
          ['Cronulla Beach', 37.233213, -80.424263, 3],
          ['Manly Beach', 37.234213, -80.426263, 2],
          ['Maroubra Beach', 37.235213, -80.426263, 1]
        ];

        var image = {
            url: 'img/marker_image_1.png',
            size: new google.maps.Size(75, 73),
            anchor: new google.maps.Point(0, 32)
        };
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Parking Structure Perry Street Lot</h1>'+
            '<div id="bodyContent">'+
            '<p><button>Favorited</button> <button>Directions 7 min</button>' +
            'random words random words random words random words.</p>'+
            '<p>random link, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'Random link</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var mapOptions = {
          center: new google.maps.LatLng(37.231213, -80.426263),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);

        // var marker = new google.maps.Marker({
        //   position: myLatLng,
        //   map: map,
        //   title: 'Hello World!',
        //   icon: image
        // });

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});

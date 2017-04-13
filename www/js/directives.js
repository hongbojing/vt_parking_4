angular.module('starter.directives', [])

.directive('map', function($ionicActionSheet) {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
          $scope.show = function() {

          // Show the action sheet
          var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: '<b>Share</b> This' },
              { text: 'Move' }
            ],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                 // add cancel code..
               },
            buttonClicked: function(index) {
              return true;
            }
          });

          // For example's sake, hide the sheet after two seconds
          // $timeout(function() {
          //   hideSheet();
          // }, 2000);

        };
        var myLatLng = {lat: 37.231213, lng: -80.426263};
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

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!',
          icon: image
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        //   $scope.show();
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

var preloader = function () {

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {

			scope.$watch(
				function () {
					return null;
				},

				function () {

				}
			)
		}
	}
};

module.exports = preloader;
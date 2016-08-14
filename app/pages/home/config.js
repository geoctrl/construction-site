export default function($stateProvider) {
	"ngInject";

	$stateProvider.state('home', {
		url: '/',
		template: `<home></home>`
	});
}
require(["jquery","bootstrap","css!../../css/page/index.css"],function($){
	$(function(){
		
		$('.navbar').on('activate.bs.scrollspy', function () {
		})
		$('body').scrollspy({ target: '.navbar' })	
		$('[data-spy="scroll"]').each(function () {
		  var $spy = $(this).scrollspy('refresh');
		})
		var searchfun = function(){
			$('#inputBox').animate(
				{
					paddingTop:'200px',
					width:'100px'
				},
				'slow'
			);
		}
		$('.icon-search').bind('click',searchfun);
	})
}
)
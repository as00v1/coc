require(["jquery","bootstrap","css!../../css/page/animate.css"],function($){
	$(function(){
		var searchfun = function(){
			$('#inputBox').animate(
				{
					paddingTop:'100px',
				}
			);
		}
		$('.icon-search').bind('click',searchfun);
	})
}
)
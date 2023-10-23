/* Hamburger */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');
    const navLinks = document.querySelectorAll('.navlist a');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('bx-x');
        navList.classList.toggle('open');
    });
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuIcon.classList.toggle('bx-x');
            menuIcon.classList.remove('open');
            navList.classList.remove('open');
        });
    });
});

/* Vertical tabs to accordion*/
$(document).ready(function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
    $(".tab_container").css("min-height", function(){ 
      return $(".tabs").outerHeight() + 50;
    });
	/* in accordion mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
});
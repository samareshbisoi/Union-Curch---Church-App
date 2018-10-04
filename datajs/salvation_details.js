// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()


	
	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var str = window.location.href; 
		var start = str.lastIndexOf("?") + 1;
		var end = str.length;
		//alert(str.substring(start,end));	
		//var str = str.replace("#tab2", "");
		var a_id = str.substring(start,end) ;
		
		//var url=BaseURL+"article_details.php?article_id="+a_id; alert(url);
		var url=BaseURL+"salvation_details.php?sal_id="+a_id; //alert(url);
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var sal_id=field.sal_id;
				var sal_title=field.sal_title;
	        	var sal_desc=field.sal_desc;
				var sal_image=field.sal_image;
				var dir = "";
				/*if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				} else {*/
					dir = "movie_images";
				/*}*/
				//alert(article_title);
				img_value = ImgURL+dir+"/"+sal_image;
				$("#post_title").html(sal_title) ;
				$("#post_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#post_body").html(sal_desc) ;
				//$("#post_date").html(post_date) ;
				//$("#rating").html(rateHTML) ;
				//$("#review_for_id").val(a_id);
	        });
    	});
		
		
    	});
		
		
	
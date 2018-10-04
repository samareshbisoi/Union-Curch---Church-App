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
		var url=BaseURL+"encouraging_details.php?enc_id="+a_id; //alert(url);
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var enc_id=field.enc_id;
				var enc_title=field.enc_title;
	        	var enc_desc=field.enc_desc;
				var enc_image=field.enc_image;
				var dir = "";
				/*if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				} else {*/
					dir = "movie_images";
				/*}*/
				//alert(article_title);
				img_value = ImgURL+dir+"/"+enc_image;
				$("#post_title").html(enc_title) ;
				$("#post_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#post_body").html(enc_desc) ;
				//$("#post_date").html(post_date) ;
				//$("#rating").html(rateHTML) ;
				//$("#review_for_id").val(a_id);
	        });
    	});
		
		
    	});
		
		
	
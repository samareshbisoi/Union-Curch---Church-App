function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}


$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="tribute.html" class="close-panel"><img src="images/icons/red/features.png" alt="" title="" /><span>Tribute</span></a></li><li><a href="encouraging.html" class="close-panel"><img src="images/icons/red/tabs.png" alt="" title="" /><span>Encouraging Quotes</span></a></li><li><a href="upcoming.html" class="close-panel"><img src="images/icons/red/toggle.png" alt="" title="" /><span>Upcoming Events</span></a></li><li><a href="https://unionchurch.org.in/category/gallery/photos/" target="_blank" class="close-panel"><img src="images/icons/red/photos.png" alt="" title="" /><span>Photos</span></a></li><li><a href="https://www.youtube.com/channel/UCq_qjpp_LAIrSOS2b69Ka3w/videos" target="_blank" class="close-panel"><img src="images/icons/red/video.png" alt="" title="" /><span>Inspirationals</span></a></li><li><a href="praise.html" class="close-panel"><img src="images/icons/red/form.png" alt="" title="" /><span>Praise Reports</span></a></li>	<li><a href="articles.html" class="close-panel"><img src="images/icons/red/reflection.png" alt="" title="" /><span>Articles</span></a></li>   <li><a href="bible.html" class="close-panel"><img src="images/icons/red/more.png" alt="" title="" /><span>Bible Doctrines</span></a></li><li><a href="salvation.html" class="close-panel"><img src="images/icons/red/prayer.png" alt="" title="" /><span>Salvation</span></a></li><li><a href="baptism.html" class="close-panel"><img src="images/icons/red/books.png" alt="" title="" /><span>Baptism</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});
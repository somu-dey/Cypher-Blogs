/* 
	User Submitted Posts - Plugin Settings
	@ https://perishablepress.com/user-submitted-posts/
*/

jQuery(document).ready(function($){
	
	// toggle panels
	$('.default-hidden').hide();
	$('#mm-panel-toggle a').on('click', function(){
		$('.toggle').slideToggle(300);
		return false;
	});
	$('h2').on('click', function(){
		$(this).next().slideToggle(300);
		return false;
	});
	
	// jump toggle panels
	$('#mm-panel-primary-link').on('click', function(){
		$('.toggle').hide();
		$('#mm-panel-primary .toggle').slideToggle(300);
		return true;
	});
	$('#mm-panel-secondary-link').on('click', function(){
		$('.toggle').hide();
		$('#mm-panel-secondary .toggle').slideToggle(300);
		return true;
	});
	
	// toggle form info
	$('.usp-custom-form').on('click', function(){
		$('.usp-custom-form-info').slideDown(300);
	});
	$('.usp-form').on('click', function(){
		$('.usp-custom-form-info').slideUp(300);
	});
	
	// toggle categories
	$('.usp-cat-toggle-link').on('click', function(){
		$('.usp-cat-toggle-div').toggle(300);
		return false;
	});
	
	// image uploader
	var custom_uploader;
	$('#upload_image_button').click(function(e) {
		e.preventDefault();
		if (custom_uploader) {
			custom_uploader.open();
			return;
		}
		custom_uploader = wp.media.frames.file_frame = wp.media({
			multiple: false,
			library: { type: 'image' },
			button:  { text: 'Select Image' },
			title: 'Select Default Featured Image',
		});
		custom_uploader.on('select', function() {
			console.log(custom_uploader.state().get('selection').toJSON());
			attachment = custom_uploader.state().get('selection').first().toJSON();
			$('#upload_image').val(attachment.url);
		});
		custom_uploader.open();
	});
	
});
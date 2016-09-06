 /* ---------------------------------------------
  Widget Configure 
  --------------------------------------------- */
 (function($) {
     "use strict";

     for (var Url in Header_Social) {
         $('.social-search > .top-social').append("<a target='blank' href='" + Header_Social[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
     }

     if (About_Me_Widget['show'] === true) {
         $('.glimmer_about_widget').removeClass('hidden');
         $('.widget.glimmer_about_widget .widget-title > span').html(About_Me_Widget['widget_title']);
         $('.widget.glimmer_about_widget .about-widget .author-image-home img').attr('src', About_Me_Widget['image_url']);
         $('.widget.glimmer_about_widget .about-widget .author-image-home img').attr('alt', About_Me_Widget['author_name']);
         $('.widget.glimmer_about_widget .about-widget .author-name').html(About_Me_Widget['author_name']);
         $('.widget.glimmer_about_widget .about-widget .about-description p').html(About_Me_Widget['description']);
         $('.widget.glimmer_about_widget .about-widget a.more-link').attr('href', About_Me_Widget['author_link']);
     }

     if (Ads_Widget['show'] === true) {
         $('.widget_ads').removeClass('hidden');
         $('.widget.widget_ads .widget-title > span').html(Ads_Widget['widget_title']);
         $('.widget_ads img').attr('src', Ads_Widget['image_url']);
         $('.widget_ads img').attr('alt', Ads_Widget['widget_title']);
         $('.widget.widget_ads .ads-widget a').attr('href', Ads_Widget['ads_url']);
     }
     
     if (Navigation_Widget['show'] === true) {
         $('.widget_nav_menu').removeClass('hidden');
         $('.widget_nav_menu > .widget-title-area .widget-title span').html(Navigation_Widget['widget_title']);
     }

     if (Social_Widget['show'] === true) {
         $('.widget_follow_us').removeClass('hidden');
         $('.widget_follow_us > .widget-title-area .widget-title span').html(Social_Widget['widget_title']);
     }

     for (var Url in Social_Widget) {
         if (Url == "show" || Url == "widget_title") {
             continue;
         }
         $('.widget_follow_us > .follow-us-area').append("<a class='follow-link' target='blank' href='" + Social_Widget[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
     }

     if (Facebook_Page_Widget['show'] === true) {
         $('.widget_facebook').removeClass('hidden');
         $('.widget_facebook > .widget-title-area .widget-title span').html(Facebook_Page_Widget['widget_title']);
         var fb_url = Facebook_Page_Widget['page_url'];
         var fb_page = '<div class="fb-page" data-href="' + fb_url + '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore">Facebook</div></div>';
         $('.widget_facebook > .facebook-widget').append(fb_page);
     }

     var facebook_sdk_script = '<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script>';
     $('body').append(facebook_sdk_script);
     if (Googleplus_Page_Widget['show'] === true) {
         $('.widget_googleplus').removeClass('hidden');
         $('.widget_googleplus > .widget-title-area .widget-title span').html(Googleplus_Page_Widget['widget_title']);
         var gp_url = Googleplus_Page_Widget['page_url'];
         var google_plus_sdk_script = '<script src="https://apis.google.com/js/platform.js" async defer></script>';
         var googleplus_page = '<div class="g-page" data-href="' + gp_url + '" data-rel="publisher"></div>';
         $('body').append(google_plus_sdk_script);
         $('.widget_googleplus > .googleplus-widget').append(googleplus_page);
     }

     if (Twitter_Widget['show'] === true) {
         $('.widget_twitter').removeClass('hidden');
         $('.widget_twitter > .widget-title-area .widget-title span').html(Twitter_Widget['widget_title']);
         var tp_url = Twitter_Widget['profile_url'];
         var tp_count = Twitter_Widget['post_count'];
         var twitter_widget_id = Twitter_Widget['twitter_id'];
         var twitter_section = '<a class="twitter-timeline" href="' + tp_url + '" data-widget-id="' + twitter_widget_id + '" data-link-color="#0062CC" data-chrome="nofooter noscrollbar" data-tweet-limit="' + tp_count + '">Tweets</a>';
         twitter_section += "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>";
         $('.widget_twitter > .twitter-widget').append(twitter_section);
     }

     if (Contact_Widget['show'] === true) {
         $('.widget_contact').removeClass('hidden');
         $('.widget_contact > .widget-title-area .widget-title span').html(Contact_Widget['widget_title']);
         if (Contact_Widget['image_url'] != "") {
             $('.widget_contact > .widget-contact > .contact-logo').append(' <p><img alt="' + Contact_Widget['widget_title'] + '" class="retina" src="' + Contact_Widget['image_url'] + '"></p>');
         }
         $('.widget_contact > .widget-contact p.description').html(Contact_Widget['description']);
     }

     if (Flickr_Widget['show'] === true) {
         $('.widget_flickr').removeClass('hidden');
         $('.widget_flickr > .widget-title-area .widget-title span').html(Flickr_Widget['widget_title']);
     }

     if (Mailchimp_Widget['show'] === true) {
         $('.widget_subscribe').removeClass('hidden');
         $('.widget_subscribe > .widget-title-area .widget-title span').html(Mailchimp_Widget['widget_title']);
         $('.widget_subscribe > .newsletter-area > p').html(Mailchimp_Widget['details']);
         $('.form-newsletter form#newsletter-form').attr('action', Mailchimp_Widget['action_url']);
         $('#mc-embedded-subscribe').html(Mailchimp_Widget['button_text']);
     }

     if (Latest_Posts_Widget['show'] === true) {
         $('.glimmer_latest_post_widget').removeClass('hidden');
         $('.glimmer_latest_post_widget > .widget-title-area .widget-title span').html(Latest_Posts_Widget['widget_title']);
     }

     if (Tags_Widget['show'] === true) {
         $('.widget_tag_cloud').removeClass('hidden');
         $('.widget_tag_cloud > .widget-title-area .widget-title span').html(Tags_Widget['widget_title']);
     }

     if (Instagram_Widget['show'] === true) {
         $('#footer-top').removeClass('hidden');
         $('#footer-top #instafeed-area > .section-title').html( Instagram_Widget['widget_title'] );
     }

     if ( Footer_CopyRight_Text ) {
         $('#footer-bottom .copyright').html('<p>' + Footer_CopyRight_Text + '</p>');
     }

 })(jQuery);
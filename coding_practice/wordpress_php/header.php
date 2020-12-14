<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <?php wp_head(); ?>
  </head>
  
  <body <?php body_class(); ?>>
    
    <header>
      <div class="siteinfo">
        <div class="container">
          <h1><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
          <p><?php bloginfo('description'); ?></p>
        </div><!--/.container-->
      </div><!--/.siteinfo-->
      <?php if ( !is_front_page() ): ?>
        <?php if( get_header_image() ): ?>
          <img src="<?php header_image(); ?>"
            width="<?php echo get_custom_header()->width; ?>"
            height="<?php echo get_custom_header()->height; ?>"
            alt="">
        <?php endif; ?>
      <?php endif; ?>
      <div class="container">
        <nav>
          <?php wp_nav_menu( 'theme_location=navigation' ); ?>
        </nav>
      </div><!--/.container-->
    </header>
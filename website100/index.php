<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo( 'name' ); ?><?php wp_title(); ?></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <header id="page-top">
      <div class="siteinfo">
        <div class="container">
          <h1><a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a></h1>
          <p><?php bloginfo( 'description' ); ?></p>
        </div><!--/.container-->
      </div><!--/.siteinfo-->
      <?php if( get_header_image() ): ?>
        <img src="<?php header_image(); ?>" alt="header image">
      <?php endif; ?>
    </header>
    
    <nav>
      <div class="container">
        <div class="inner-nav">
          <?php dynamic_sidebar(); ?>
        </div><!--/.inner-nav-->
      </div><!--/.container-->
    </nav>
    
    <main>
      <div class="container">
        <?php if( is_category() ): ?>
          <h2 class="archive-title">
            <?php 
              $category = get_queried_object();
              $catId = $category->term_id;
              $catName = $category->name;
              echo '<img src="'.get_template_directory_uri().'/icons/'.$catId.'.png" alt="'.$catName.'" />';
            ?>を使用しているサイト
          </h2>
        <?php endif; ?>
        <?php if( is_month() ): ?>
          <h2 class="archive-title">
            <?php echo get_the_date( 'Y年n月' ); ?>に投稿した記事
          </h2>
        <?php endif; ?>
        <div class="post-wrapper <?php if( is_single() ): ?>single-page<?php else: ?>posts-page<?php endif; ?>">
          <?php if(have_posts()): while(have_posts()): the_post(); ?>
            <article <?php post_class(); ?>>
              <?php if( is_single() ): ?>
                <h2><?php the_title(); ?></h2>
              <?php else: ?>
                <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
              <?php endif; ?>
              <div class="postinfo">
                <time datetime="<?php echo get_the_date( 'Y-m-d' ) ?>"><i class="fa fa-calendar" aria-hidden="true"></i><?php echo get_the_date(); ?></time>
              </div><!--/.postinfo-->

              <?php if( is_single() ): ?>
                <div class="post-content">
                  <?php if ( has_post_thumbnail() ): ?>
                    <p><?php the_post_thumbnail( 'large' ); ?></p>
                  <?php endif; ?>
                  <?php the_content(); ?>
                </div><!--/.post-content-->
                <div class="postcat">
                  <h3>使用しているCMS、言語、Framework、Library、データベースなど</h3>
                  <?php 
                    foreach((get_the_category()) as $category) {
                      echo '<a href="'.get_site_url().'/category/'.get_cat_name($category -> category_parent).'/'.$category -> cat_name.'" rel="category tag"><img src="'.get_template_directory_uri().'/icons/'.$category -> cat_ID.'.png" alt="'.$category -> cat_name.'" /></a>';
                    }
                  ?>
                </div><!--/.postcat-->
              <?php else: ?>
                <div class="excerpt">
                  <?php if ( has_post_thumbnail() ): ?>
                    <p><?php the_post_thumbnail( 'large' ); ?></p>
                  <?php endif; ?>
                  <?php the_content(); ?>
                  <p class="more"><a href="<?php the_permalink(); ?>">続きを読む<i class="fa fa-chevron-right"></i></a></p>
                </div><!--/.excerpt-->
                <div class="postcat excerpt">
                  <h3>使用しているCMS、言語、Framework、Library、データベースなど</h3>
                  <div class="cat-icon">
                    <?php 
                      foreach((get_the_category()) as $category) {
                        echo '<a href="'.get_site_url().'/category/'.get_cat_name($category -> category_parent).'/'.$category -> cat_name.'" rel="category tag"><img src="'.get_template_directory_uri().'/icons/'.$category -> cat_ID.'.png" alt="'.$category -> cat_name.'" /></a>';
                      }
                    ?>
                  </div><!--/.cat-icon-->
                </div><!--/.postcat-->
              <?php endif; ?>

              <?php if( is_single() ): ?>
                <div class="pagenav postnav">
                  <span class="old">
                    <?php previous_post_link( '%link', '<i class="fa fa-chevron-left" aria-hidden="true"></i>%title'); ?>
                  </span>
                  <span class="new">
                    <?php next_post_link( '%link', '%title<i class="fa fa-chevron-right" aria-hidden="true"></i>' ); ?>
                  </span>
                </div><!--/.pagenav-->
              <?php endif; ?>
            </article>
          <?php endwhile; endif; ?>
          <?php if( $wp_query -> max_num_pages > 1 ): ?>
            <div class="pagenav">
              <span class="old">
                <?php next_posts_link('<i class="fa fa-chevron-left" aria-hidden="true"></i> 古い記事'); ?>
              </span>
              <span class="new">
                <?php previous_posts_link('新しい記事 <i class="fa fa-chevron-right" aria-hidden="true"></i>'); ?>
              </span>
            </div><!--/.pagenav-->
          <?php endif; ?>
        </div><!--/.post-wrapper-->
      </div><!--/.container-->
    </main>
      <p id="to-top-btn"><a class="scrollLink" href="#page-top"><i class="fa fa-chevron-up" aria-hidden="true"></i></a></p>
    <footer>
      <div class="container">
        <small>Copyright &copy; <?php bloginfo('name'); ?></small>
      </div><!--/.container-->
    </footer>
    <?php wp_footer(); ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
      $(function() {
        $('#to-top-btn').hide();
        $(window).scroll(function () {
          if ($(this).scrollTop() > 600) {
              $('#to-top-btn').fadeIn(300);
          } else {
              $('#to-top-btn').fadeOut(300);
          }
        });
        $('a.scrollLink[href^="#"]').on('click',function() {
          var href = $(this).attr('href');
          var target = $(href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, 500, 'swing');
            return false;
        });
      });
    </script>
  </body>
</html>

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/flow/',
        url: 'flow.html',
      },
      {
        path: '/roses/',
        url: 'roses.html',
      },
      {
        path: '/clothing/',
        url: 'clothing.html',
      },
      {
        path: '/food/',
        url: 'food.html',
      },
      {
        path: '/location/',
        url: 'location.html',
      },
      {
        path: '/dev/',
        url: 'dev.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');


  var $$ = Dom7;
  
  var myPhotoBrowserPopup = app.photoBrowser.create({
      photos : [
          {
              url: 'images/food/lechon.jpg',
              caption: 'Indulge the crispiness and juiciness Cebu Lechon'
          },
          {
              url: 'images/food/pork.jpg',
              caption: 'Pork Hamonado with pork belly braised in pineapple juice and soy sauce for the ultimate pork dish. Melt-in-your-mouth tender with a sweet and savory sauce, it is pure heaven on steamed rice'
          },
          {
              url: 'images/food/prawn.jpg',
              caption: 'This salt and pepper shrimp recipe is a Cantonese dish. It may be simple but it tastes delicious'
          },
      {
              url: 'images/food/tuna.jpg',
              caption: 'This mixture of orange juice, soy sauce and garlic with sesame seed makes a wonderful marinade for tuna'
          },
      {
              url: 'images/food/cordon.jpg',
              caption: 'This Chicken Cordon Bleu is the perfect dinner.  The Parmesan Dijon Sauce is absolutely heavenly and will left you awe'
          },
      ],
      type: 'popup'
  });
  
  function main_course(){
    myPhotoBrowserPopup.open();
  }
  
  var myPhotoBrowserPopup1 = app.photoBrowser.create({
      photos : [
          {
              url: 'images/food/ham.jpg',
              caption: 'Ham and Pineapple in Kebab Style!'
          },
          {
              url: 'images/food/pizza.jpg',
              caption: 'Filled with ham,cheese and mushroom on top!'
          },
          {
              url: 'images/food/tuna.jpg',
              caption: 'Healthy tuna salad recipe prepared the Mediterranean way. This mayo free tuna salad boasts tons of texture and fresh Mediterranean flavors. A zesty Dijon vinaigrette pulls it all together!'
          },
      {
              url: 'images/food/torts.jpg',
              caption: 'A gourmet wrap filled with white cheese, kiri cheese, carrots, cucumber, lettece, and slice ham of chicken'
          },
      ],
      type: 'popup'
  });
  
  function side_dish(){
    myPhotoBrowserPopup1.open();
  }
  
  var myPhotoBrowserPopup2 = app.photoBrowser.create({
      photos : [
          {
              url: 'images/food/cake.jpg',
              caption: 'A beach-theme cake for our lovely debutant'
          },
          {
              url: 'images/food/cookies.jpg',
              caption: 'Enjoy beach-theme cookie and it comes with different designs'
          },
          {
              url: 'images/food/crabcake.jpg',
              caption: 'Low carb and gluten free crab cakes are made with almond flour instead of breadcrumbs. They are wonderfully crispy and delicious!'
          },
      {
              url: 'images/food/cupcake.jpg',
              caption: 'Cupcakes are a cutest dessert to bring to the beach -- they keep well and you do not need any silverware. Turn a plain old beach day into an event with these fun cupcakes.'
          },
      {
              url: 'images/food/halo.jpg',
              caption: 'Halo-Halo perfect dessert to bring to the beach!'
          },
      {
              url: 'images/food/pizzafruit.jpg',
              caption: 'A healthy dessert "pizza" recipes topped off with yogurt and fresh fruit!'
          },
      {
              url: 'images/food/star.jpg',
              caption: 'Sandwich shaped into Star to bring the essence of beach.'
          },
      ],
      type: 'popup'
  });
  
  function dessert_food(){
    myPhotoBrowserPopup2.open();
  }
  
  var myPhotoBrowserPopup3 = app.photoBrowser.create({
      photos : [
          {
              url: 'images/food/blue.jpg',
              caption: 'Blue Dawn - Cocktail contains rum, pineapple juice, blue curacao, and gummy sharks for adults'
          },
          {
              url: 'images/food/peach.jpg',
              caption: 'Peach Sunset - A Mixture of Peach and Orange Juice for a different taste for kids'
          },
      {
              url: 'images/food/straw.jpg',
              caption: 'Strawberry Morning - Strawberry Iced Tea Flavor for everyone'
          },
      {
              url: 'images/food/teqs.jpg',
              caption: 'Tequila Sunrise - Tequila based with cherries and oranges'
          },
      ],
      type: 'popup'
  });
  
  function drink_cocktail(){
    myPhotoBrowserPopup3.open();
  }
  
  var myPhotoBrowserPopup4 = app.photoBrowser.create({
      photos : [
          {
              url: 'images/location/loc1.jpg',
              //caption: 'Blue Dawn - Cocktail contains rum, pineapple juice, blue curacao, and gummy sharks for adults'
          },
          {
              url: 'images/location/loc2.jpg',
              //caption: 'Peach Sunset - A Mixture of Peach and Orange Juice for a different taste for kids'
          },
      {
              url: 'images/location/loc3.png',
              //caption: 'Strawberry Morning - Strawberry Iced Tea Flavor for everyone'
          },
      {
              url: 'images/location/loc4.jpg',
              //caption: 'Tequila Sunrise - Tequila based with cherries and oranges'
          },
      {
              url: 'images/location/loc6.jpg',
              //caption: 'Tequila Sunrise - Tequila based with cherries and oranges'
          },
      {
              url: 'images/location/loc7.jpg',
              //caption: 'Tequila Sunrise - Tequila based with cherries and oranges'
          },
      {
              url: 'images/location/loc8.jpg',
              //caption: 'Tequila Sunrise - Tequila based with cherries and oranges'
          },
      ],
      type: 'popup'
  });
  
  function location_pop(){
    myPhotoBrowserPopup4.open();
  }



  function main_course(){
    myPhotoBrowserPopup.open();
  }

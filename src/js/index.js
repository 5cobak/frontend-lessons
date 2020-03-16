// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

//svg-sprite-loader

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../assets/img/icons/', true, /\.svg$/));


fetch(`https://mycdn.com/img/icons.svg`).then(res => {
  return res.text();
}).then(data => {
  document.getElementById('svg-icons').innerHTML = data;
});


// item-quantity-dropdown js

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({
  // max total items
  // maxItems: Infinity,
  // min total items
  minItems: "",
  // text to show on the dropdown override data-selection-text attribute
  selectionText: 'гость',
  // text to show for multiple items
  textPlural: 'гостей',
  // optionally can use setSelectionText function to override selectionText
  setSelectionText: (itemCount, totalItems) => {
  	// if(totalItems == 0) return "Сколько гостей";
  	 // line declination function
				function declination(n, text_forms){

			    n = Math.abs(n) % 100; var n1 = n % 10;
			    if (n >= 5 && n < 20) { return text_forms[2]; }
			    if (n1 > 1 && n1 <= 4) { return text_forms[1]; }
			    if (n1 == 1) { return text_forms[0]; }
			    if(n == 0) {return text_forms[3]}

			    return text_forms[2];

			};
			if (totalItems == 0) return declination(totalItems, ["гость", "гостя", "гостей", "Сколько гостей"]);
			else return totalItems + " " +declination(totalItems, ["гость", "гостя", "гостей", "Сколько гостей"]);
  },
  // buttons to increment/decrement

  // fires when an item quantity changes
  onChange: (id, count, totalItems) => {
       
    },
  // return false to prevent an item decrement
  // beforeDecrement: (id, itemCount) => {},
  // return false to prevent an item increment
  // beforeIncrement: (id, itemCount) => {}
  });

  // disabled button-decrement, change opacity css
  if( $('.button-decrement').next().html() == 0) {
      $('.button-decrement').addClass('button-decrement_opacity')
    }
    else $('.button-decrement').removeClass('button-decrement_opacity');
  

  $('.button-decrement').click(function(){
    if( $(this).next().html() == 0) {
      $(this).addClass('button-decrement_opacity')
    }
    else $(this).removeClass('button-decrement_opacity');
  });

  $('.button-increment').click(function(){
    if( $(this).prev().html() > 0) {
      $(this).prev().prev().removeClass('button-decrement_opacity')
    }
    else $(this).prev().prev().removeClass('button-decrement_opacity');
  })


  console.log( $('.button-decrement').next().html());
});

// mask 

$(document).ready(function(){
  $('.date-field').mask('00.00.0000')
});

// air-datePicker 

$('.my-datepicker').datepicker()


//borderBottomFocus on dropdown elements 

$('.iqdropdown').click(function(){
	$(this).toggleClass('borderBottomFocus');
}) 


// add increment and decrement icons

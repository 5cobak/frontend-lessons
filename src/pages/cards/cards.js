import jQueryBridget from 'jquery-bridget';
import 'components/card-room/card-room';
import './cards.scss';

const Masonry = require('masonry-layout');

jQueryBridget('masonry', Masonry, $);

$(document).ready(() => {
  $('.js-cards-page__content').masonry({
    itemSelector: '.cards-page__card',
    columnWidth: '.cards-page__card',
    gutter: 40,
  });
});

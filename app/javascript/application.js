// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require semantic-ui 
import "@hotwired/turbo-rails"
import "controllers"
import "channels"
export { scroll_bottom };

function scroll_bottom() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

$(document).on('turbo:load', function(){ 
    $('.ui.dropdown').dropdown();
    scroll_bottom();
})

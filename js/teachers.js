var range = $('#feeInput'),
    value = $('.feeValue');
    
value.html(range.attr('value'));

range.on('input', function(){
    value.html(this.value);
}); 
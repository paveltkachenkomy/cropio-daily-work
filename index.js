$('.task_record_block').prepend('<span></span><br>');
$('.task_record_block').each(function() {
    var url = $(this).children('a').attr('href');
    $(this).children('span').load(url + ' .data-card-small__body a[class!=edit_field_mapping_item]');
});
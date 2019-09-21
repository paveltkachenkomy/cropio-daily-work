// ==UserScript==
// @name            Сropio-daily-work
// @namespace       Cropio
// @version         1.0.0
// @author          Павел Ткаченко
// @description     Добавление названий полей в раздел "Работа машин по дням"
// @homepage        https://github.com/paveltkachenkomy/cropio-daily-work
// @downloadURL     https://raw.githubusercontent.com/paveltkachenkomy/cropio-daily-work/master/cropio-daily-work.user.js.js
// @updateURL       https://raw.githubusercontent.com/paveltkachenkomy/cropio-daily-work/master/cropio-daily-work.user.js.js
// @include         https://cropio.com/machines/reports/daily_work*
// ==/UserScript==
$('.task_record_block').prepend('<span></span><br>');
$('.task_record_block').each(function() {
    var url = $(this).children('a').attr('href');
    $(this).children('span').load(url + ' .data-card-small__body a[class!=edit_field_mapping_item]');
});

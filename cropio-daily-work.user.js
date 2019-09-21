// ==UserScript==
// @name Сropio-daily-work
// @namespace Cropio
// @version 1.0.0
// @Author Павел Ткаченко
// @homepage https://github.com/paveltkachenkomy/cropio-daily-work
// @description Добавление названий полей в раздел "Работа машин по дням"
// @downloadURL https://raw.githubusercontent.com/paveltkachenkomy/cropio-daily-work/master/index.js
// @updateURL https://raw.githubusercontent.com/paveltkachenkomy/cropio-daily-work/master/index.js
// @include https://cropio.com/machines/reports/daily_work*
// ==/UserScript==
$('.task_record_block').prepend('<span></span><br>');
$('.task_record_block').each(function() {
    var url = $(this).children('a').attr('href');
    $(this).children('span').load(url + ' .data-card-small__body a[class!=edit_field_mapping_item]');
});

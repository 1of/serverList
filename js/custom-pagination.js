var items = $('.servers .server-item');
var numItems = items.length;
var perPage = 4;
// Show total items
var showOnPage = $('.perPage'),
    totalOnPage = $('.numItems');
if (showOnPage.length && totalOnPage.length) {
    showOnPage.text(perPage);
    totalOnPage.text(numItems);
}
items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: '&laquo;',
    nextText: '&raquo;',
    onPageClick: function(pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items
            .hide()
            .slice(showFrom, showTo)
            .show();
        var hiddenItems = $(".servers .server-item[style$='display: none;']")
            .length;
        // Show not Hidden items
        showOnPage.text(this.items - hiddenItems);
    }
});

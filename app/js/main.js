

$(document).ready(function() {







$('#myTable').DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false,
    rowReorder: {
        selector: 'td:nth-child(2)'
    },
    responsive: true,
    "autoWidth": false
});



});

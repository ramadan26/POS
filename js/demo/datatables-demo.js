// Call the dataTables jQuery plugin
$(document).ready(function() {
  function add_classes(){
    $('.lstTbl').addClass(['table', 'table-bordered', 'table-hover', 'dataTable', 'nowrap', 'dt-responsive ']);
    $('.lstTbl').attr('dir', 'rtl');
  }
  $('.lstTbl').DataTable({
    "language": {
      "lengthMenu": "عرض _MENU_ عنصر بكل صفحة",
      "zeroRecords": "لا يوجد أي تطابق",
      "search": " بحث ",
      "info": "عرض الصفحة _PAGE_ من _PAGES_",
      "infoEmpty": "لا يوجد عناصر مُتاحة",
      "infoFiltered": "(filtered from _MAX_ total records)",
      "paginate": {
        "previous": "الصفحة السابقة",
        "next": "الصفحة التالية"
      }
    },
    // 'columnDefs': [ // see https://datatables.net/reference/option/columns.searchable
    //   {
    //     'searchable': false,
    //     'targets': [4, 5, 6]
    //   },
    // ],
    "responsive": true,
  }, add_classes());

  $('.dataTable-1').DataTable({
    "language": {
      "lengthMenu": "عرض _MENU_ عنصر بكل صفحة",
      "zeroRecords": "لا يوجد أي تطابق",
      "search": "  بحث في الاسم أو الرقم ",
      "info": "عرض الصفحة _PAGE_ من _PAGES_",
      "infoEmpty": "لا يوجد عناصر مُتاحة",
      "infoFiltered": "(filtered from _MAX_ total records)",
      "paginate": {
        "previous": "الصفحة السابقة",
        "next": "الصفحة التالية"
      }
    },
    "responsive": true,
    'columnDefs': [ // see https://datatables.net/reference/option/columns.searchable
      {
        'searchable': false,
        'targets': [4, 5, 6]
      },
    ],

  }, add_classes());
  $('.date-picker').flatpickr({
    enableTime: false,
    dateFormat: "Y-m-d"
  });
});

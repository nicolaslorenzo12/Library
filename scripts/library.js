function myFunction() {
  var input;
  var filter;
  var table;
  var tr;
  var td;
  var i;
  var txtValue;
  input = document.getElementById("myInput");  
  filter = input.value.toUpperCase();
  document.getElementById("upper").value = filter;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td != ull) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
// Lăn thẳng đến đầu trang khi nhấp vào nút back-to-top
$('#back-to-top').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});
// 

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
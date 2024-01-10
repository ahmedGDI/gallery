// Class
function Gallery(id) {
  obj = {}
  obj.ids = id
  obj.addImage = addImage
  obj.removeImage = removeImage
  return obj
}

// adds an image from the gallery based on its place holder id
var addImage = function (id) {
  var placeholderId = "#inp@place-add";
var imageUrl = $(placeholderId).val();
console.log(imageUrl)
if (imageUrl.trim() !== "") {
var newImage = $("<img>").attr("src", imageUrl);
$(".gallery div:last-child").append(newImage);
$(placeholderId).val("");
  }
};
// removes an img from the gallery based on its place holder id
var removeImage = function (id) {
  var placeholderId = "#inp@place-remove";
  var imageId = $(placeholderId).val();
if (imageId.trim() !== "") { // to trim all the empty space around !,the input is string
$("#" + imageId).remove(); //select elements removed
$(placeholderId).val("");
}
};


//invoke the methods with clik event in jq   
$(document).ready(function () {
  $("#addBtn").click(function () {
    addImage();
  });

  $("#removeBtn").click(function () {
    removeImage();
  });
});

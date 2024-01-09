function Gallery(){
    obj={}
    obj.data=[]
    obj.ids =[]
    obj.getImagesCount=0
    obj.addImage=addImage 
    obj.removeImage=removeImage
    obj.displayGallery=displayGallery
    obj.clearGallery=clearGallery
    obj.getRandomImage=getRandomImage // optional 
    obj.filterGalleryByKeyword=filterGalleryByKeyword
    return obj
}



var createGallery= Gallery()



var addImage =function(param){
        this.data.push(param)
}
var removeImage = function(){

}
var displayGallery = function (){

}
var clearGallery = function(){

}
var filterGalleryByKeyword =function(){

}


var container =document.querySelector('.gallery')
var btn1 = document.getElementById('#bnt1')
var btn2 = document.getElementById('#bnt2')



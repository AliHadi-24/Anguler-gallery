import { Injectable } from '@angular/core'
import { GalleryComponent } from '../gallery/gallery.component';

@Injectable()

export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

    

}

var IMAGES = [
    //{"id":1, "category": "boats", "caption": "View from ", "url":"assets/img/boat_01.jpeg"},
    {"id":1, "category": "animal", "caption": "an Animal", "url": "assets/img/a1.jpg"},
    {"id":2, "category": "animal", "caption": "an Animal", "url": "assets/img/a2.jpg"},
    {"id":3, "category": "animal", "caption": "an Animal", "url": "assets/img/a3.jpg"},
    {"id":4, "category": "animal", "caption": "an Animal", "url": "assets/img/a4.jpg"},
    {"id":5, "category": "animal", "caption": "an Animal", "url": "assets/img/a5.jpg"},

    {"id":6, "category": "car", "caption": "an Car", "url": "assets/img/c1.jpg"},
    {"id":7, "category": "car", "caption": "an Car", "url": "assets/img/c2.jpg"},
    {"id":8, "category": "car", "caption": "an Car", "url": "assets/img/c3.jpg"},
    {"id":9, "category": "car", "caption": "an Car", "url": "assets/img/c4.jpg"},
    {"id":10, "category": "car", "caption": "an Car", "url": "assets/img/c5.jpg"},

    {"id":11, "category": "game", "caption": "an Game", "url": "assets/img/g1.png"},
    {"id":12, "category": "game", "caption": "an Game", "url": "assets/img/g2.jpg"},
    {"id":13, "category": "game", "caption": "an Game", "url": "assets/img/g3.jpg"},
    {"id":14, "category": "game", "caption": "an Game", "url": "assets/img/g4.jpg"},
    {"id":15, "category": "game", "caption": "an Game", "url": "assets/img/g5.jpg"},

    {"id":16, "category": "nature", "caption": "an nature image", "url": "assets/img/n1.jpg"},
    {"id":17, "category": "nature", "caption": "an nature image", "url": "assets/img/n2.jpg"},
    {"id":18, "category": "nature", "caption": "an nature image", "url": "assets/img/n3.jpg"},
    {"id":19, "category": "nature", "caption": "an nature image", "url": "assets/img/n4.jpg"},
    {"id":20, "category": "nature", "caption": "an nature image", "url": "assets/img/n5.jpg"},
    {"id":21, "category": "nature", "caption": "an nature image", "url": "assets/img/n6.jpg"},
    {"id":22, "category": "nature", "caption": "an nature image", "url": "assets/img/n7.jpg"},

    {"id":23, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m1.jpg"},
    {"id":24, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m2.jpg"},
    {"id":25, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m3.jpg"},
    {"id":26, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m4.jpg"},
    {"id":27, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m5.jpg"},
    {"id":28, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m6.jpg"},




]


// var IMAGES = [
//     //{"id":1, "category": "boats", "caption": "View from ", "url":"assets/img/boat_01.jpeg"},
//     {"id":1, "category": "animal", "caption": "an Animal", "url": "assets/img/a1.jpg"},
//     {"id":2, "category": "animal", "caption": "an Animal", "url": "assets/img/a2.jpg"},
//     {"id":3, "category": "animal", "caption": "an Animal", "url": "assets/img/a3.jpg"},
//     {"id":4, "category": "animal", "caption": "an Animal", "url": "assets/img/a4.jpg"},
//     {"id":5, "category": "animal", "caption": "an Animal", "url": "assets/img/a5.jpg"},

//     {"id":6, "category": "car", "caption": "an Car", "url": "assets/img/c1.jpg"},
//     {"id":7, "category": "car", "caption": "an Car", "url": "assets/img/c2.jpg"},
//     {"id":8, "category": "car", "caption": "an Car", "url": "assets/img/c3.jpg"},
//     {"id":9, "category": "car", "caption": "an Car", "url": "assets/img/c4.jpg"},
//     {"id":10, "category": "car", "caption": "an Car", "url": "assets/img/c5.jpg"},

//     {"id":11, "category": "game", "caption": "an Game", "url": "assets/img/g1.png"},
//     {"id":12, "category": "game", "caption": "an Game", "url": "assets/img/g2.jpg"},
//     {"id":13, "category": "game", "caption": "an Game", "url": "assets/img/g3.jpg"},
//     {"id":14, "category": "game", "caption": "an Game", "url": "assets/img/g4.jpg"},
//     {"id":15, "category": "game", "caption": "an Game", "url": "assets/img/g5.jpg"},

//     {"id":16, "category": "nature", "caption": "an nature image", "url": "assets/img/n1.jpg"},
//     {"id":17, "category": "nature", "caption": "an nature image", "url": "assets/img/n2.jpg"},
//     {"id":18, "category": "nature", "caption": "an nature image", "url": "assets/img/n3.jpg"},
//     {"id":19, "category": "nature", "caption": "an nature image", "url": "assets/img/n4.jpg"},
//     {"id":20, "category": "nature", "caption": "an nature image", "url": "assets/img/n5.jpg"},
//     {"id":21, "category": "nature", "caption": "an nature image", "url": "assets/img/n6.jpg"},
//     {"id":22, "category": "nature", "caption": "an nature image", "url": "assets/img/n7.jpg"},

//     {"id":23, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m1.jpg"},
//     {"id":24, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m2.jpg"},
//     {"id":25, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m3.jpg"},
//     {"id":26, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m4.jpg"},
//     {"id":27, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m5.jpg"},
//     {"id":28, "category": "movie", "caption": "an image from a movie", "url": "assets/img/m6.jpg"},




// ]
    

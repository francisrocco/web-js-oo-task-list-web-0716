'use strict';
// List Model
List.all=[]

function List(title) {
  this.title=title;
  this.id=List.prototype.id
  this.tasks=[]

  this.listEl= function(){
    return '<div class="list"><h2><button class="destroy-list">x</button> '+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>'
  }

  this.optionEl=function(){
    return '<option value="'+this.id+'">'+this.title+'</option>'
  }

  this.build=function(){
    $('#select_list').append(this.optionEl())
    $('#lists').append(this.listEl())
  }


  List.prototype.id++
  List.all.push(this)

}



List.prototype.id=0

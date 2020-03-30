import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      toDos: [
        {name:"Wash Dishes", priority:"Normal", isDone: false},
        {name:"Buy Shopping", priority:"Normal", isDone: true},
        {name:"Clean Room", priority:"Low", isDone: false}
      ],
      newItem: "",
      newPriority: ""
    },
    methods: { 
      saveNewItem: function(){
        this.toDos.push(
          {
            name: this.newItem,
            priority: this.newPriority,
            isDone: false
          }
        );
        this.newItem ="",
        this.newPriority="";
      },
      doing: function(index){
        this.toDos[index].isDone = true;
      }
    }
  });
});
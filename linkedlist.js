#!/usr/bin/node
class Node{
  constructor(value){
    this.value=value
    this.next=[null]
  }
}




class LinkedList{
  constructor(){
    this.head=['head']
    this.head.next=[null]
  }
append(value){

  let array=this.head
  let node=new Node(value)
  function addend (node,array){
      if(array.next==0){
      array.next=node
      }else {
        addend(node,array.next)
      }
    } addend(node,array)
  }
  prepend(value){
      let node=new Node(value)
      node.next=this.head.next
      this.head.next=node
    }
    Size(){
      
    let counter=0
      function count(array){
        
        if(array==0){
          console.log(counter)
        }else{
          counter++
          count(array.next)
        }
      } count(this.head.next)

    }
    first(){
      console.log(this.head.next)
    }
    tail(){
      function ending(array){
        if(array.next==0){
          console.log(array)
        }else {
          ending(array.next)
        }
      }ending(this.head)
    }
    at(index){
      let counter=1
      function counting(index,array){
      if(counter==index){
        console.log(array.next)
      }else {
        counter++
        counting(index,array.next)
      }
      }counting(index,this.head)
    }
    pop(){
      function removelast(array){
        if(array.next.next==0){
          array.next=[null]
        }else{
          removelast(array.next)
        }
      }removelast(this.head)
    }
    contains(value){
      function containing(array,value){
        if(array.next.value==value){
          console.log('True')
        }else if(array.next!=0){
          containing(array.next,value)
        }else {
          console.log('False')
        }
      } containing(this.head,value)
    }find(value){
      let counter=1
      function containing(array,value){
        if(array.next.value==value){
          console.log(counter)
        }else if(array.next!=0){
          counter++
          containing(array.next,value)
        }else {
          console.log('Does not exist')
        }
      } containing(this.head,value)
    }
    tostring(){
      let print=''
      function printing(array){
        if(array==0){
          print=print+'->(Null)'
          console.log(print)
        }else{
          print=print+`-> (${array.value})`
          printing(array.next)
        }
      }printing(this.head.next)
    }
  }
 
    


let names=new LinkedList()
names.append('Christian')
names.append('alain')
names.append('nakhle')
names.append('charbel')
names.Size()
names.prepend('MIMI')
names.tostring()
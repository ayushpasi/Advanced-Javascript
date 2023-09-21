class Animal  {
       constructor(name){
        this.name=name;
   }
    speak(){
       console.log(this.name+" make sound");
    }
 }
class Dog extends Animal{
       constructor(name,bread){
          super(name);
          this.bread=bread;
        }
      speak(){
          super.speak();
          console.log(this.name+","+ this.bread+" bark");
         }
}
/*let dog=new Dog("tomy","labra");
dog.speak();*/
let anim=new Animal("dog");
anim.speak();
class Rectangle{
    constructor(width,height){
        this.width=width,
        this.height=height
    }
 rectangle(){
        let ans=this.width*this.height
        console.log(ans);
    }
  perimeter(){
        let ans=2*(this.width+this.height)
        console.log(ans);
    }
}
let res=new Rectangle(10,20);
res.rectangle()
res.perimeter()
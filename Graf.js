class Graf {
    constructor(A,B) {
        Perg.delete()
        this.G=[]
        var i=1,ii=1,c,a,b
        if(A<0){a=-A}else{a=A}
        if(B<0){b=-B}else{b=B}
c=a*b
        for(i;i<=a;ii++){
           this.G.push(createSprite(0+Width/(c-i),0+height/(c-ii)))
            if(ii>=b){ii=1;i+=1}
        }
    }
  
 
  
  }
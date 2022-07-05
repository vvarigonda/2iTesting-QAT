describe('Iteration with Multiples', ()=>{
    it('Iteration loop with multiples',()=>{
        let a=1;
        let x=5;
while((a*a)<=x){
	cy.log("Multiples until A until X =" +a);
    a++;
}
while((a*(a+1))<=(2*x)){
	cy.log("Multiples until A+1 until 2X =" +a);
    a++;
}

while((a*(a+2))<=(3*x)){
	cy.log("Multiples until A+2 until 3X =" +a);
    a++;
}

    })
})

describe('Iteration without Multiples ', ()=>{
    it('Iteration loop without multiples',()=>{
        let a=1;
        let x=5;
while(a <=x){
	cy.log("Multiples until A until X =" +a);
    a++;
}
while(a+1<=(2*x)){
	cy.log("Multiples until A+1 until 2X =" +a);
    a++;
}

while(a+2<=(3*x)){
	cy.log("Multiples until A+2 until 3X =" + a);
    a++;
}

    })
})
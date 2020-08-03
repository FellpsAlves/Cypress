/// <reference types="cypress" />

it('Equality', () =>{
    const x = 1;
    expect(x).equal(1);
    expect(x, 'mensagem').equal(1);
    expect(x).to.be.equal(1);
    x.should('to.be.equal', 1)
    expect(x).not.to.be.equal(3);
})

it('Thruly', () =>{
    const x = true;
    const y = null;
    let z;
    expect(x).to.be.true;
    expect(y).to.be.null;
    expect(z).to.be.undefined; 
})

it('Objetc Equality', () =>{
    const obj = {
        x: 1,
        y: 2 
    }
    expect(obj).equal(obj);
    expect(obj).to.be.equals(obj);
    expect(obj).equal(obj);
    expect(obj).eql({x:1, y:2});
    expect(obj).include({y:2});
    expect(obj).to.have.property('x');
    expect(obj).to.have.property('x', 1);
    expect(obj).not.to.be.empty;
})

it('Array', () =>{
    const array = [1,2,3];
    expect(array).to.have.members([1,2,3])
    expect(array).to.include.members([1,3]);
    expect(array).not.to.be.empty;
})

it('Types', () =>{
    const numero = 1;
    const string = 'String';

    expect(numero).to.be.a('number')
    expect(string).to.be.a('String')
    expect({}).to.be.an('object')
    expect([]).to.be.a('array')
})

it('String Check', () => {
    const string = 'String de teste'

    expect(string).to.be.equal('String de teste')
    expect(string).to.have.length(15)
    expect(string).to.contains('de')
    expect(string).to.match(/de/)
    expect(string).to.match(/^String/)
    expect(string).to.match(/teste$/)
    expect(string).to.match(/.{15}/)
    expect(string).to.match(/|w+/)
    expect(string).to.match(/|D+/)
})

it('Numbers', () =>{
    const numero = 4
    const floatNumero = 3.412

    expect(numero).to.be.equal(4)
    expect(numero).to.be.above(3)
    expect(numero).to.be.below(5)

    expect(floatNumero).to.be.closeTo(3.4, 0.1)

})
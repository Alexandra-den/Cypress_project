/// <reference types="Cypress" />

//Example HTTP GET request
it.skip('Example sending the GET request', ()=>{
    cy.request('https://next.privat24.ua')
        .then((response)=>{
            console.log(response);
        })
})




//Example HTTP POST request with EXPECT verification of response
it.skip('Example sending the POST request', ()=>{   
const requestBody = {
action: "info",
amount: 50,
card: "4552331448138217",
cardCvv: "111",
cardExp: "0526",
currency: "UAH",
phone: "+380686979712",
xref: "a5c91263560d260b090ed3f17689ae84",
_: 1642517624534,
    };

    const headersData={
        cookie:
'_ga=GA1.2._ga=GA1.2.905847043.1642321511; pubkey=0c88b774b597dd3b142b5b498b432b25; _gid=GA1.2.1106048759.1642612955; lfp=1/16/2022, 11:25:22 AM; pa=1642612964571.1770.1693868604508837next.privat24.ua0.819789629337706+1; fp=22.1642321511; _gid=GA1.2.1947458155.1642321511; pubkey=59034bad4cc25d5de94e47aaaef63c50; fp=20; lfp=1/16/2022, 11:25:22 AM; pa=1642517464265.39360.5839158797525914next.privat24.ua0.45843309391328324+1'};
    
    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody, 
        headers: headersData,
    })
        .then((response)=>{
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')
        console.log(response);
        })
});



//Example HTTP POST request with SHOULD verification of response
it('Example sending the POST request', ()=>{   
    const requestBody = {
    action: "info",
    amount: 50,
    card: "4552331448138217",
    cardCvv: "111",
    cardExp: "0526",
    currency: "UAH",
    phone: "+380686979712",
    xref: "a5c91263560d260b090ed3f17689ae84",
    _: 1642517624534,
        };
    
        const headersData={
            cookie:
    '_ga=GA1.2._ga=GA1.2.905847043.1642321511; pubkey=0c88b774b597dd3b142b5b498b432b25; _gid=GA1.2.1106048759.1642612955; lfp=1/16/2022, 11:25:22 AM; pa=1642612964571.1770.1693868604508837next.privat24.ua0.819789629337706+1; fp=22.1642321511; _gid=GA1.2.1947458155.1642321511; pubkey=59034bad4cc25d5de94e47aaaef63c50; fp=20; lfp=1/16/2022, 11:25:22 AM; pa=1642517464265.39360.5839158797525914next.privat24.ua0.45843309391328324+1'};
        
        cy.request({
            method: 'POST',
            url: 'https://next.privat24.ua/api/p24/pub/mobipay',
            body: requestBody, 
            headers: headersData,
            }).its('body').should('contain',{
                status:'success'
            }).its('data').should('contain', {
                status:'ok'
            })
    });
















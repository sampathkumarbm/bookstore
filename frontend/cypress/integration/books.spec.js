import assert from 'assert';
const { host,server} = Cypress.env();
const pages = 
[
{ tab:'Books',path:'books'},
{ tab:'Add Books',path:'add'},
{ tab:'About Us',path:'about'}
]  
let totalCount=0,count=0
describe("Book store", () => {
    it("Launch App",()=>{  
        cy.visit(host);
    cy.url().should('include', '/books')   
    })

    it("Verify Navbar",()=>{    
         cy.get('.MuiToolbar-root > .MuiTypography-root').contains("BOOK STORE APPLICATION")
         pages.forEach(page => {
         cy.contains(page.tab).click()
         cy.location('pathname').should('eq', `/${page.path}`)
         })
    })

    it("Adding Book",()=>{  
        cy.intercept({
            path: '/books',
            method:  'GET'
          }).as("books")
        cy.get('[href="/add"]').click()
        cy.fixture("Inputs/books.json")
        .then((books)=>{
            for (const key in books) {
                if(typeof( books[key])==="string")
                    cy.get(`input[name=${key}]`).type(books[key])
                else if(  key==="available")
                    cy.get('.PrivateSwitchBase-input').click()
                else{}
            }
        cy.get('.MuiButton-root').click()
        })
        cy.wait('@books').then((xhr) => {
        const res = xhr.response.body.result;
        cy.writeFile(
              "cypress/fixtures/api_responses/booksdetails.json",
             res
             ); 
        totalCount=res.length
        cy.log(totalCount,"totalCount")
          });
        })
 
        it("verifying Added Book Detail",()=>{
            cy.fixture('Inputs/books.json').then((bookData)=>{
            const {name,description}=bookData
            cy.getNewBookDetail(name,description,totalCount)
            })   
        })

        it("Updating Added Book Detail",()=>{
            let newBookEle=`:nth-child(${totalCount}) > :nth-child(1) > .MuiPaper-root > .MuiCardMedia-root`
            let newName="kasukabe Defence force",newDescription="Friends group"
            cy.get(newBookEle,{
                timeout: 10000,
              }).scrollIntoView()
            cy.get(`:nth-child(${totalCount}) > :nth-child(1) > .MuiPaper-root > .MuiBox-root > .MuiCardActions-root > a.MuiButton-root`).click()
            cy.get('input[name="name"]').clear().type(newName)
            cy.get('input[name="description"]').clear().type(newDescription)
            cy.get('.MuiButton-root').click()
            cy.getNewBookDetail(newName,newDescription,totalCount)
        })

        it("deleting book",()=>{
            cy.intercept({
             path: '/books',
             method:  'GET'
            }).as("books")
            let newBookEle=`:nth-child(${totalCount}) > :nth-child(1) > .MuiPaper-root > .MuiCardMedia-root`
            cy.get(newBookEle,{
             timeout: 10000,
            }).scrollIntoView()
            cy.get(`:nth-child(${totalCount}) > :nth-child(1) > .MuiPaper-root > .MuiBox-root > .MuiCardActions-root > button.MuiButton-root`).click()
            cy.wait('@books').then((xhr) => {
                const res = xhr.response.body.result;
                count=res.length
                assert.equal(totalCount-1,count)
        });
    })
    
})

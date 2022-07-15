require('cypress-xpath')
Cypress.Commands.add("getNewBookDetail", (name,description,count) => {
    let newBookEle=`:nth-child(${count}) > :nth-child(1) > .MuiPaper-root > .MuiCardMedia-root`
    cy.get(newBookEle,{
        timeout: 10000,
      }).scrollIntoView()
     cy.get(`#root > main > div > div > div:nth-child(${count}) > div > div`).find('img').should('have.attr', 'src').should('include','loveshayariimages')
      let bookSummaryInfo=`:nth-child(${count}) > :nth-child(1) > .MuiPaper-root > .MuiBox-root > .MuiCardContent-root`
cy.get(bookSummaryInfo+' > .MuiTypography-h6',{ timeout: 10000}).contains(new RegExp(name, "g"))
cy.get(bookSummaryInfo+' > .MuiTypography-body1',{ timeout: 10000}).contains(description)
cy.xpath(`//*[@id="root"]/main/div/div/div[${count}]/div/div/div/div[1]/h6[2]`).should('contain', 'Himawari');

})
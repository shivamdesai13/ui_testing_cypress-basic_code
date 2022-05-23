describe("test code", () => {
  // beforeEach..
  // it('first test code',()=>{
  //     cy.visit('http://demo.automationtesting.in')
  //     //cy.wait(5500)
  //     cy.get('#email').type('test@testing.com')
  //     //cy.wait(5500)
  //     cy.get('#enterimg').click()
  // })
  beforeEach(() => {
    cy.visit("http://demo.automationtesting.in"); //to visit website
  });

  it.skip("register test", () => {
    // cy.visit("http://demo.automationtesting.in"); //to visit website
    cy.get("#btn2").click(); //to click on skip sign in button
    cy.get(":nth-child(1) > :nth-child(2) > .form-control").type("Shivam"); //fill first name field
    cy.get(":nth-child(1) > :nth-child(3) > .form-control").type("Desai"); //fill last name field
    cy.get(".col-md-8 > .form-control").type("Agar (Malwa), Madhya Pradesh"); //address field filled
    cy.get("#eid > .form-control").type("shivamdesai@123.com"); //email id filled
    cy.get(":nth-child(4) > .col-md-4 > .form-control").type("9988776655"); //mobile no. filled
    cy.get(":nth-child(1) > .ng-pristine").check(); //to select radio button for male
    //cy.contains('FeMale').click();    //to select radio button for female
    cy.get('[type="checkbox"]').first().check(); //to fill field the field of hobbies
    cy.get("#msdd").click(); //to click language field
    cy.contains("Arabic").click(); //to select language Arabic
    cy.contains("English").click(); //to select language English
    cy.get('[type="checkbox"]').last().check(); //to fill field the field of hobbies
    cy.get("#Skills").select("APIs"); //to select skills field
    //cy.get("#countries").select('Select //')
    cy.get(".select2-selection").type("India{enter}"); //to fill the field for select country

    cy.get("input[type=file]").selectFile("cypress/downloads/dummy_file.doc"); //choose file
    cy.get("#yearbox").select("1916"); //birth year
    cy.get(":nth-child(11) > :nth-child(3) > .form-control").select("January"); //birth month
    cy.get("#daybox").select("1"); //birth date
    cy.get("#firstpassword").type("123456"); //password
    cy.get("#secondpassword").type("123456"); //confirm password
    cy.get("#submitbtn").click(); //click on submit
  });

  //   it.only("country",()=>{
  //     cy.get("#btn2").click();

  //     //cy.get('.select2-selection').click('')
  //         cy.get('.select2-selection').type('India{enter}')

  //     // cy.contains('Australia').click()
  //   })

  it.skip("login test code", () => {
    cy.get("#btn1").click(); //to click on sign in button
    cy.get(":nth-child(2) > .txtbox").type("shivamdesai@123.com"); //to fill the field of email id
    cy.get(":nth-child(3) > .txtbox").type("112233"); //to fill the field of password
    cy.get("#enterbtn").click(); //to click on enter
  });

  it.skip("widgets test for date picker", () => {
    cy.get("#btn2").click();
    cy.get(":nth-child(5) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(3) > a").click();
    cy.get("#datepicker2").click();
    cy.get(".dp1652941800000").click();
    //cy.get(':nth-child(5) > .dropdown-toggle').trigger('Datepicker')
    // cy.get('select').select('Datepicker')
  });

  it.skip("widgets test for Accordion", () => {
    cy.get("#btn2").click();
    cy.get(":nth-child(5) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
  });

  it.skip("widgets test for AutoComplete", () => {
    cy.get("#btn2").click();
    cy.get(":nth-child(5) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(2) > a").click();
    cy.get(".ui-autocomplete-multiselect").type("Hello, how are you doing...");
  });

  it.only("widgets test for slider", () => {
    cy.get("#btn2").click();
    cy.get(":nth-child(5) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(4) > a").click();
    cy.log("slider set to 10%")
      .get(".ui-slider-handle")
      .invoke("attr", "style", "left:10%") // Type-1 for moving slider
      .wait(2000)
      .log("slider set to 80%")
      .get(".ui-slider-handle")
      .then(($slide) => {
        $slide[0].setAttribute("style", "left:80%"); //Type-2  for moving slider
        cy.get("ui-slider-handle")
          .should("have.css", "left")
          .and("match", "80%");
        cy.get("ui-slider-handle").should("have.attr", "left", "80%");
      });
  });
});

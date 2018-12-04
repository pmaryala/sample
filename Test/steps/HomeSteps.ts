import { defineSupportCode } from 'cucumber'
import { HomePage } from "../pages/HomePage";
import { expect } from 'chai'
import { CourseDetailsPage } from "../pages/CourseDetails";

defineSupportCode(({Given, When, Then}) => {
    
    var homePage = new HomePage();
    var coursedetails = new CourseDetailsPage();

    Given(/^I navigate to application$/, async () => {
        await homePage.OpenBrowser("http://localhost:8808/");
    });

    When(/^I get all the heading$/, async () => {
        await homePage.GetAllHeadings();
    });

    When(/^I click the '([^\"]*)' course$/, async (headingText) => {
        await homePage.ClickFirstHeading(headingText.toString());
    });

    Then(/^I should see '([^\"]*)' course in coursedetails page$/, async (course) => {
        expect(coursedetails.GetCourseHeading).to.be.not.null;
    });

});
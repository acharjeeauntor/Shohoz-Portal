import {expect, test} from "@playwright/test"
import NavBar from "../../pageObjects/common/navbar";
import Helper from "../../utils/helper";
import TransportListPage from "../../pageObjects/transportListPage";
import HomePage from "../../pageObjects/homePage";
import testData from "../../testData/testData.json"

test.describe('Perform E2E Testing',async()=>{
  test('TestCase 1: Testing Tasks', async ({ page }) => {
    const navBar = new NavBar(page)
    const helper = new Helper(page)
    const homePage = new HomePage(page)
    const transportListPage = new TransportListPage(page)

    // Visit Website | https://www.shohoz.com/
    await page.goto('/')

    //Verify that Bus is selected by default
    expect(await helper.getElementColorValue(navBar.busNavItem)).toBe(testData.UIData.navItemActiveColorCode)

    // Search for one way ticket from Dhaka to Chittagong, on Date 30th October
    await homePage.searchBuses(testData.tripData.roundType,testData.tripData.from,testData.tripData.to,testData.tripData.date)
  
  // Select Bus Type ‘AC’ & Operator ‘Green Line Paribahan & Shohag Paribahan’
  await transportListPage.filterTransport(testData.tripData.busType,testData.tripData.buses)

  // Select any one with the lowest price & click on ‘Book Ticket’ 
  await transportListPage.bookLowestTicket()
  await page.waitForLoadState('networkidle')

  // Verify if 4 tickets can be selected for booking at once 
  await transportListPage.selectSeat(testData.tripData.maximunSelectedSeat)
  await expect(transportListPage.dialog).toBeVisible();
  await transportListPage.closeBtn.click();

  // Verify Dropping time & location is available in Trip Details 
  await transportListPage.tripDetailsTab.click();
  await transportListPage.droppingTab.click();
  await expect(page.getByText(testData.tripData.dropTime)).toBeVisible()
  await expect(page.getByText(testData.tripData.dropLocation)).toBeVisible()
  
  
  
  });
})


class HomePage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page
        this.oneWayRadioButton = page.locator('button.btn-trip-type').nth(0)
        this.roundWayRadioButton = page.locator('button.btn-trip-type').nth(0)
        this.fromCityLabel = page.locator('#fromcity')
        this.toCityLabel = page.locator('#tocity')
        this.fromInput = page.getByPlaceholder('From')
        this.toInput = page.getByPlaceholder('To')
        this.searchButton = page.getByRole('button', { name: 'Search' })
    }

    async searchBuses(roundType,from,to,date){
        if(roundType == 'One Way'){
            await this.oneWayRadioButton.click()
        }else if(roundType == 'Round Way'){
            await this.roundWayRadioButton.click()
        }
        await this.fromCityLabel.click()
        await this.fromInput.type(from)
        await this.page.getByRole('button', { name: from, exact: true }).click();
        await this.toCityLabel.click()
        await this.toInput.type(to)
        await this.page.getByRole('button', { name: to, exact: true }).click();
        await this.page.getByRole('gridcell', { name: date }).locator('div').click();
        await this.searchButton.click()
        await this.page.waitForLoadState('networkidle')
    }

}
export default HomePage
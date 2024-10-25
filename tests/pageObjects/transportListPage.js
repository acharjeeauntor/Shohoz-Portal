import { expect } from "@playwright/test"

class TransportListPage {
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page
        this.AcBusTypeCheckbox = page.locator('#bus-type-1')
        this.NonAcBusTypeCheckbox = page.locator('#bus-type-2')
        this.card = page.locator('div .trip-card');
        this.amount =page.locator('div .trip-card .fare-to-pay');
        this.availableSeat = page.locator('.seat-available')
        this.dialog = page.getByText('Maximum of 4 seat(s) can be')
        this.closeBtn = page.getByRole('button', { name: 'Close' })
        this.continueBtn = page.getByRole('button', { name: 'Continue' })
        this.tripDetailsTab = page.getByText('Trip Details')
        this.droppingTab = page.getByRole('button', { name: 'Dropping', exact: true })

    }

    async filterTransport(type, transportsName) {
        if (type == "AC") {
            await this.AcBusTypeCheckbox.check()
        } else if (type == "Non AC") {
            await this.NonAcBusTypeCheckbox.check()
        }
        for (var i = 0; i < transportsName.length; i++) {
            await this.page.getByLabel(transportsName[i]).check();
        }
    }

    async bookLowestTicket() {
        const arrayOFAmount = [];
        const x = await this.amount.count();
        for (let i = 0; i < x; i++) {
            const text = await this.amount.nth(i).textContent();
            const numericValue = parseFloat(text.replace(/[^\d.-]/g, '')); 
            arrayOFAmount.push(numericValue);
        }
        const sortedAmounts = arrayOFAmount.sort((a, b) => a - b);
        const y = await this.card.count();
        for (let j = 0; j < y; j++) {  
            const text = await this.card.nth(j).locator('.fare-to-pay').first().textContent();
            const numericValue = parseFloat(text.replace(/[^\d.-]/g, ''));
            if (numericValue == sortedAmounts[0]) {
                await this.card.nth(j).locator('.btn-book-ticket').click();
                break;
            }
        }
    }

    async selectSeat(high){
        for(var i=0;i<high+1;i++){
            await this.availableSeat.nth(i).click()
        }
    }
}
export default TransportListPage
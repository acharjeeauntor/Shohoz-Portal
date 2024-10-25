class NavBar{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page
        this.busNavItem = page.locator('#navbar [title="Bus"]')
    }
}
export default NavBar
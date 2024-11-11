import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async({page}) => {
    await page.goto('/')
})

// npx playwright test --prohect=chromium --grp @smoke
test('navigation to form page @smoke', async({page}) => {
    const pm = new PageManager(page);

    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().toastrPage();
    await pm.navigateTo().tooltipPage();
})

test('parametrized methods', async({page}) => {
    const pm = new PageManager(page);
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`;

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutPage().submitUsingTheGridWithCrendentialAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 1");
    await page.screenshot({path: 'screenshots/formLayoutPage.png'});
    const buffer = await page.screenshot();
    console.log(buffer.toString('base64'));
    await pm.onFormLayoutPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true);
    await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/inlineForm.png'})
    await pm.navigateTo().datepickerPage();
    await pm.onDatepickerPage().selectCommonDatePickerDataFromToday(5);
    await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15);
})
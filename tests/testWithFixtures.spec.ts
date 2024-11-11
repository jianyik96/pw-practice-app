import { test } from '../test-options'
import { faker } from '@faker-js/faker'

test('parametrized methods', async({pageManager}) => {
    //const pm = new PageManager(page);
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`;

    // await pm.navigateTo().formLayoutsPage();
    await pageManager.onFormLayoutPage().submitUsingTheGridWithCrendentialAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 1");
    await pageManager.onFormLayoutPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true);
})
import { Page, except } from "@playwright/test"
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/FormLayoutPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

export class PageManager {

    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly formLayoutsPage: FormLayoutPage;
    private readonly datepickerPage: DatepickerPage;

    constructor(page: Page){
        this.page = page;
        this.navigationPage = new NavigationPage(this.page);
        this.formLayoutsPage = new FormLayoutPage(this.page);
        this.datepickerPage = new DatepickerPage(this.page);
    }

    navigateTo(){
        return this.navigationPage
    }

    onFormLayoutPage(){
        return this.formLayoutsPage;
    }

    onDatepickerPage(){
        return this.datepickerPage;
    }
}
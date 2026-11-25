import { Locator, Page } from '@playwright/test';

export class IrctcTrainsSearchPage {
  readonly home: Locator;
  readonly login: Locator;
  readonly trainsMenu: Locator;
  readonly meals: Locator;
  readonly loyalty: Locator;
  readonly eWallet: Locator;
  readonly alerts: Locator;
  readonly otherServices: Locator;
  readonly contactUs: Locator;

  readonly bookTicket: Locator;
  readonly touristBooking: Locator;
  readonly connectingJourney: Locator;
  readonly irctcTrains: Locator;
  readonly groupBookings: Locator;
  readonly travelInsuranceClaimProcess: Locator;
  readonly cancellation: Locator;
  readonly pnrEnquiry: Locator;
  readonly trainSchedule: Locator;
  readonly trackYourTrain: Locator;
  readonly ftrCoach: Locator;
  readonly dogCatBooking: Locator;
  readonly linkYourAadhaar: Locator;
  readonly counterTicketCancel: Locator;
  readonly boardingPointChange: Locator;
  readonly officialMobileApps: Locator;
  readonly railConnectAndroid: Locator;
  readonly railConnectIos: Locator;

  constructor(private readonly page: Page) {
    this.home = page.locator("div ul.menu li > a[aria-label='Home icon']");
    this.login = page.locator("div ul.menu li > a[aria-label*='Login']");
    this.trainsMenu = page.locator("div ul.menu li > a[aria-label*='Menu Train']");
    this.meals = page.locator("div ul.menu li > a[aria-label*='Meals']");
    this.loyalty = page.locator("div ul.menu li > a[aria-label*='Menu LOYALTY']");
    this.eWallet = page.locator(
      "div ul.menu li > a[aria-label*='I.R.C.T.C. e.Wallet']:not([aria-label*='Sub Menu'])",
    );
    this.alerts = page.locator("div ul.menu li > a[aria-label*='Alerts']");
    this.otherServices = page.locator("div ul.menu li > a[aria-label*='more.']");
    this.contactUs = page.locator("div ul.menu li > a[aria-label*='contact us']");

    this.bookTicket = page.locator("div ul.box-shadow li > a[aria-label*='Book ticket']");
    this.touristBooking = page.locator("div ul.box-shadow li > a[aria-label*='Tourist Booking']");
    this.connectingJourney = page.locator(
      "div ul.box-shadow li > a[aria-label*='CONNECTING JOURNEY']",
    );
    this.irctcTrains = page.locator(
      '//a/span[contains(normalize-space(), "IRCTC TRAINS")]',
    );
    this.groupBookings = page.locator("div ul.box-shadow li > a[aria-label*='Group Booking']");
    this.travelInsuranceClaimProcess = page.locator(
      "div ul.box-shadow li > a[aria-label*='Insurance']",
    );
    this.cancellation = page.locator("div ul.box-shadow li > a[aria-label*='cancellation']");
    this.pnrEnquiry = page.locator("div ul.box-shadow li > a[aria-label*='PNR']");
    this.trainSchedule = page.locator("div ul.box-shadow li > a[aria-label*='Schedule']");
    this.trackYourTrain = page.locator("div ul.box-shadow li > a[aria-label*='track']");
    this.ftrCoach = page.locator("div ul.box-shadow li > a[aria-label*='FTR']");
    this.dogCatBooking = page.locator("div ul.box-shadow li > a[aria-label*='Dog/cat']");
    this.linkYourAadhaar = page.locator("div ul.box-shadow li > a[aria-label*='Link Your Aadhaar']");
    this.counterTicketCancel = page.locator(
      "div ul.box-shadow li > a[aria-label*='Counter Ticket Cancel']",
    );
    this.boardingPointChange = page.locator("div ul.box-shadow li > a[aria-label*='Boarding']");
    this.officialMobileApps = page.locator("div ul.box-shadow li > a[aria-label*='Android App']");
    this.railConnectAndroid = page.locator(
      "div ul.box-shadow li:has(a[aria-label*='Android App']) > ul > li:nth-child(1)",
    );
    this.railConnectIos = page.locator(
      "div ul.box-shadow li:has(a[aria-label*='Android App']) > ul > li:nth-child(2)",
    );
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }

  async hoverThenClick(hoverTarget: Locator, option: Locator): Promise<void> {
    await this.hover(hoverTarget);
    await this.waitUntilVisible(option);
    await this.click(option);
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async waitUntilVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }
}

import { chromium } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

async function globalSetup() {
    const browser = await chromium.launch({
        headless: true,
        slowMo: 500
    });

    const page = await browser.newPage();

    console.log("Opening login page...");

    await page.goto("https://demo.guru99.com/V4/index.php");

    console.log("Current URL:", page.url());

    await page.locator("[name='uid']").fill(process.env.GURU99_USERNAME!);
    await page.locator("[name='password']").fill(process.env.GURU99_PASSWORD!);

    await page.locator("[name='btnLogin']").click();

    await page.waitForTimeout(5000);

    console.log("After login URL:", page.url());

    await page.screenshot({ path: "after-login.png" });

    await page.context().storageState({
        path: "./playwright/.auth/user.json"
    });

    await browser.close();
}

export default globalSetup;
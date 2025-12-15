const visit = async (page) => {
    await page.goto('', {
        waitUntil: 'networkidle',
    });
    await page.waitForTimeout(10000);
    await page.scrollToEnd();
    await page.waitForNetworkIdle();
    await page.addMilestone('Go to my upcoming trips');
    await page.goto('trips?departure=Troyes&arrival=Paris&date=2025-01-01&time=00&passengers=1', {
        waitUntil: 'networkidle',
    });
    await page.waitForTimeout(10000);
    await page.scrollToEnd();
    await page.waitForNetworkIdle();
    await page.addMilestone('Go to result details');
    await page.goto('trips/0', {
        waitUntil: 'networkidle',
    });
    await page.waitForTimeout(10000);
    await page.scrollToEnd();
    await page.waitForNetworkIdle();
    await page.addMilestone('Go to cart');
    await page.goto('cart', {
        waitUntil: 'networkidle',
    });
    await page.waitForTimeout(10000);
    await page.scrollToEnd();
    await page.waitForNetworkIdle();
    await page.waitForTimeout(7000);
  };
  
  module.exports = visit;
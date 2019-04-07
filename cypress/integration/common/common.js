import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import CommonPage from '../../pages/common/common';

Then(/^I wait (\d+) seconds to load the page$/, (timToWait) => {
  CommonPage.waitToLoad(timToWait);
});



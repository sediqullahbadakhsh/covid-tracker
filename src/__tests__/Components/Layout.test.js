import BasicLayoutContainer from "../../components/Layouts/BasicLayout";
import LandingImage from "../../components/Layouts/LandingImage";
import renderWthRedux from "../../utils/testHelpers";

describe("Basic components should render without crashing", () => {
  it("should basic layout component render ", () => {
    renderWthRedux(
      <BasicLayoutContainer loading={false} error={false}>
        <h1>Hello World</h1>
      </BasicLayoutContainer>
    );
  });

  it("The landing image should render properly", () => {
    renderWthRedux(
      <BasicLayoutContainer>
        <LandingImage />
      </BasicLayoutContainer>
    );
  });
});

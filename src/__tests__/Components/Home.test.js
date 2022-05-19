import Home from "../../components/Home";
import renderWthRedux from "../../utils/testHelpers";
import ItemsCard from "../../components/ItemsCard";

describe("Home components should render without crashing", () => {
  it("should Home component render ", () => {
    renderWthRedux(<Home />);
  });
  it("Item card should render without crashing", () => {
    renderWthRedux(
      <ItemsCard
        id="123"
        country={{ country: "Ethiopia" }}
        totallConfirmed="1,221"
      />
    );
  });
});

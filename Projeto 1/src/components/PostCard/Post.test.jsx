const { render } = require("@testing-library/react");
import { PostCard } from ".";

const props = {
  title: "title 1",
  body: "body 1",
  id: 1,
  cover: "img/img.png",
};

describe("<PostCard />", () => {
  test("should render PostCard correctly", () => {
    const { debug } = render(<PostCard {...props} />);
    debug();
  });
});

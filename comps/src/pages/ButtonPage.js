import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5">
          <GoBell />
          Clicks Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success>Hide Ads</Button>
      </div>
      <div>
        <Button danger rounded>
          Hide Ads
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

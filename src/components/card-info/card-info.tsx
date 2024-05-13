import "./card-info.css";
import { ApplicationSteps } from "../application-steps";
import Subtitle from "../subtitle/subtitle";

type Props = {
  name: string | null;
};
export const CardInfo = ({ name }: Props) => {
  return (
    <div className="card-info__container">
      <Subtitle content={`Hi, ${name}!`} />
      <main className="card-info-main">
        <p>
          This card can be used to apply for Github Student Developer Pack. You
          can sign up for it{" "}
          <a
            href="https://education.github.com/discount_requests/application"
            target="_blank"
          >
            {" "}
            here
          </a>
          .
        </p>
        <ApplicationSteps />
      </main>
    </div>
  );
};

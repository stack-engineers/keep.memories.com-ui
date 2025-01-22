import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { MdOutlineUnsubscribe } from "react-icons/md";

const SubscribingPage: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  return (
    <>
      <NavigationBarComponent />
      <section className="subscription-page">
        <form action="" method="post">
          <h1>
            <MdOutlineUnsubscribe />
          </h1>
          <h2>Subscribe to our newsletter</h2>
          <p>
            Subscribe to our newsletter to get the latest updates and news on
            our latest uploads and updates.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            aria-required
            onInput={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
          <br />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <FooterComponent />
    </>
  );
};

export default SubscribingPage;

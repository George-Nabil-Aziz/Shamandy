// React
import { Link } from "react-router-dom";

// Flowbite
import { Footer } from "flowbite-react";

export const AppFooter = () => {
  return (
    <Footer container className="fixed right-0 bottom-0 left-0 border-t">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand src="/favicon.png" alt="Ta3mia" />
        <Footer.Copyright by="Shamandy™" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link as={Link} href="/">
            About
          </Footer.Link>
          <Footer.Link as={Link} href="/">
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
};
